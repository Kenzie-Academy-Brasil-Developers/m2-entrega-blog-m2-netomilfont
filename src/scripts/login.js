import { ApiRequest } from "./script.js"

class LoginPage {
    static renderLoginPage() {
        const token = localStorage.getItem("@kenzieBlog:token")

        if(token) {
            window.location.assign("src/pages/homePage.html")
        }

        const emailInput = document.getElementById("inputEmail")
        const passwordInput = document.getElementById("inputPass")
        const btnLogin = document.getElementById("btnLogin")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }

            ApiRequest.login(data)
        })
    }


}

LoginPage.renderLoginPage()