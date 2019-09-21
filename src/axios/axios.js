import React from 'react';
import axios from 'axios';


const axios = axios.create({
    baseURL: `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`
});

export default axios;