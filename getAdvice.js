"use strict"

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm';

export function getAdvice () {
   return axios.get("https://api.adviceslip.com/advice")
        .then((res) => {
            return(res.data)
        })
}

