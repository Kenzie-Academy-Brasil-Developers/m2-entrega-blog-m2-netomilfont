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
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:User_id", res.user.id)
        })
        .catch(err => console.log(err))

        return userLogin
    }

    static async cadastro() {

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