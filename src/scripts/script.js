export class ApiRequest {

    static BASEURL = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }
    static async login(body) {
        const userLogin = await fetch(`${this.BASEURL}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => { 
            localStorage.setItem("@kenzieBlog:userId", res.userId)
            localStorage.setItem("@kenzieBlog:token", res.token)

            return res
        })
        .catch(err => console.log(err))

        return userLogin
    }

    static async cadastro(data) {
        const cadUsuario = await fetch(`${ApiRequest.BASEURL}/users/register`, {
            method: "POST",
            headers: ApiRequest.headers,
            body: JSON.stringify(data) 
        })
        .then(res => {
            window.location.assign("./index.html")
            return res.json()
            })
        .catch(err => console.log(err))

        return cadUsuario
    }

    static async homePage() {

    }

    static async novoPost() {

    }

    static async editarPost() {

    }

    static async deletePost() {

    }
}