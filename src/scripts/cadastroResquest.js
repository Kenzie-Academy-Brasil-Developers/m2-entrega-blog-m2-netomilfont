import { ApiRequest } from "./script.js"

class CadastrarUsuario {
    static async novoUsuario() {
        const iptName = document.getElementById("nomeUsuario")
        const iptEmail = document.getElementById("emailRegist")
        const iptImg = document.getElementById("imageRegist")
        const iptSenha = document.getElementById("passRegist")
        const btnCadastro = document.getElementById("btnCadastro")

        btnCadastro.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username: iptName.value,
                email: iptEmail.value,
                avatarUrl: iptImg.value,
                password: iptSenha.value,
            }

            await ApiRequest.cadastro(data)
        })
    }
}

CadastrarUsuario.novoUsuario()