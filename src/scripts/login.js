import { ApiRequest } from "./requestApi.js"

class LoginPage {
    static renderLoginPage() {
        const token = localStorage.getItem("@kenzieBlog:token")
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