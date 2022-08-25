export class ApiRequest {
    static url = "https://blog-m2.herokuapp.com"

    static async login() {

    }

    static async cadastro(data) {
        const cadUsuario = await fetch(`${this.url}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
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