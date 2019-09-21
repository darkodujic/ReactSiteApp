import React, { Component } from "react";
import classes from "./LoginComp.css";
import Input from "./Input/Input";
import Aux from "../../hoc/axxx";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Loader } from "react-loader-spinner";
class Logincomp extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          placeholder: "Your email",
          type: "email"
        },
        value: "",
        validation: {
          required: true,
          contains: "@"
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          placeholder: "Your password",
          type: "password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      }
    },
    formValid: false
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.contains) {
      isValid = value.includes(rules.contains) && isValid;
    }

    return isValid;
  }

  inputChangeHandler = (id, event) => {
    event.preventDefault();
    const updatedForm = {
      ...this.state.loginForm
    };

    const updatedAll = {
      ...updatedForm[id]
    };

    updatedAll.value = event.target.value;
    updatedAll.valid = this.checkValidity(
      updatedAll.value,
      updatedAll.validation
    );

    updatedForm[id] = updatedAll;
    updatedAll.touched = true;

    let formIsValid = true;

    for (let formValid in updatedForm) {
      formIsValid = updatedForm[formValid].valid && formIsValid;
    }

    this.setState({ loginForm: updatedForm, formValid: formIsValid });
  };

  submitHandler = event => {
    event.preventDefault();

    if (this.props.loading) {
      return (
        <Loader
          className={classes.loader}
          type="Puff"
          color="#fff"
          height="200"
          width="200"
        />
      );
    }
    setTimeout(() => {
      this.props.onAuthFetch(
        this.state.loginForm.email.value,
        this.state.loginForm.password.value
      );
      this.setState(prevstate => {
        return (
          (prevstate.loginForm.email.value = ""),
          (prevstate.loginForm.password.value = "")
        );
      });
    }, 1000);

    setTimeout(() => {
      //something mine  let url1 = 'https://www.themoviedb.org/authenticate/${this.props.token}?redirect_to=http://localhost:3000/';
      window.location.href = `http://localhost:3000/`;
    }, 1500);
  };

  render() {
    let form = [];
    for (let input in this.state.loginForm) {
      form.push({
        id: input,
        config: this.state.loginForm[input]
      });
    }

    return (
      <Aux>
        <div className={classes.LoginComp}>
          <form className={classes.LoginForm} onSubmit={this.submitHandler}>
            <h2 className={classes.loginHeader}>Log in</h2>
            {form.map(el => {
              return (
                <Input
                  isTouched={el.config.touched}
                  invalid={!el.config.valid}
                  key={el.id}
                  elementType={el.config.elementType}
                  elementConfig={el.config.elementConfig}
                  value={el.config.value}
                  changed={event => this.inputChangeHandler(el.id, event)}
                />
              );
            })}
            <button
              disabled={!this.state.formValid}
              className={classes.loginbtn}
            >
              <span className={classes.loginspan}>
                {this.props.token !== null ? "Loagout" : "Login"}
              </span>
            </button>
          </form>
        </div>
      </Aux>
    );
  }
}

const stateWithProps = state => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const stateDispatchToProps = dispatch => {
  return {
    onAuthFetch: (username, password) =>
      dispatch(actions.AUTH_FETCH(username, password))
  };
};

export default connect(
  stateWithProps,
  stateDispatchToProps
)(withRouter(Logincomp));
