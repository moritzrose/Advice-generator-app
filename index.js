"use strict"

import { getAdvice } from "./getAdvice.js"


const adviceID = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")
const button = document.getElementById("button")


document.addEventListener("DOMContentLoaded", () => {
    button.addEventListener("click", () => {
        getAdvice()
            .then((adviceObject) => {
                //
                adviceID.innerText = adviceObject.slip.id
                adviceText.innerText = `"${adviceObject.slip.advice}"`
            })
    })
})
