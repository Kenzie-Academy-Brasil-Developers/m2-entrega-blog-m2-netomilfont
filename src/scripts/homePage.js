import { ApiRequest } from "./requestApi.js";
import { Modal } from "./modal.js";

export class Postagens {
    static listarPosts(arr) {

        const ul = document.querySelector("ul")
        const data = arr.data

        data.forEach((postagem) => {
            const cardPost =  Postagens.criarCard(postagem)
            ul.append(cardPost)
        });
    }

    static criarCard(postagem) {
        const objPostagem = postagem
        const userId = localStorage.getItem("@kenzieBlog:userId")

        const dataPostagem = objPostagem.createdAt.substring(0,10).split("-").reverse().join("/")

        const li = document.createElement("li")
        const divAvatar = document.createElement("div")
        const imgAvatar = document.createElement("img")
        const h2Usuario = document.createElement("h2")
        const pPostagem = document.createElement("p")
        const pData = document.createElement("p")
        const divBotoes = document.createElement("div")
        const buttonEditar = document.createElement("input")
        const buttonDeletar = document.createElement("input")

        li.key = objPostagem.id
        li.id = objPostagem.id
        buttonDeletar.id = objPostagem.id

        pPostagem.classList.add("postagem")
        pData.classList.add("data")
        divBotoes.classList.add("container__botoes")
        buttonEditar.classList.add("btnEdit")
        buttonDeletar.classList.add("btnDelete")

        imgAvatar.src = objPostagem.user.avatarUrl
        imgAvatar.alt = "Avatar do Usuario"
        h2Usuario.innerText = objPostagem.user.username
        pPostagem.innerText = objPostagem.content
        pData.innerText = dataPostagem
        buttonEditar.src = "../assets/edit 1.svg"
        buttonEditar.type = "image"
        buttonEditar.alt = "editar"
        buttonDeletar.src = "../assets/trash-bin 1.svg"
        buttonDeletar.type = "image"
        buttonDeletar.alt = "deletar"

        divBotoes.append(buttonEditar,buttonDeletar)

        divAvatar.append(imgAvatar, h2Usuario)

        li.append(divAvatar, pPostagem, pData)

        if(objPostagem.user.id == userId) {
            li.append(divBotoes)
        }

        return li
    }

    static renderDash(posts) {
        const token = localStorage.getItem("@kenzieBlog:token")
        const postList = document.querySelector("ul")

        postList.innerText = ""

        Postagens.listarPosts(posts)
    }

    static newPost () {

        const inputPost = document.querySelector(".inputPostagem")
        const buttonPost = document.querySelector(".btnSubmitPost")

        buttonPost.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                content: inputPost.value
            }

            await ApiRequest.novoPost(data)
            const listaPost = await ApiRequest.homePage()
            Postagens.listarPosts(listaPost)
        })
    }

    static deletePostagem() {
        const deleteBtn = document.querySelector(".modalBtnDelete")
        const modal = document.querySelector("#modal__delete")
    
        deleteBtn.addEventListener("click", async (event) => {
            event.preventDefault()
            
            const postId = localStorage.getItem("@kenzieBlog:postId")
            await ApiRequest.deletePost(postId)
            localStorage.removeItem("@kenzieBlog:postId")
    
            const posts = await ApiRequest.homePage()
            Postagens.renderDash(posts)
            
        })
    }

    static async editar() {
        const btnEditar = document.querySelector(".modalBtn")
        const inputTexto = document.querySelector(".TextoEditar")

        btnEditar.addEventListener("click", async (event) => {
            event.preventDefault()
            const idPost = localStorage.getItem("@kenzieBlog:postId")
            
            const data = {
                content: inputTexto.value,
            }
            
            await ApiRequest.editarPost(data, idPost)
            localStorage.removeItem("@kenzieBlog:postId")
            window.location.assign("./homePage.html")
        })
    }

    static logout() {
        const btnLogout = document.querySelector("button")
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("@kenzieBlog:token")
            localStorage.removeItem("@kenzieBlog:userId")
            
            window.location.assign("../../index.html")
        })
    }

    static async domInfoUsuario() {
        const divUsuario = document.querySelector(".infoUsuario")
        const idUsuario = localStorage.getItem("@kenzieBlog:userId")
        const infoUsuario = await ApiRequest.infoUsuarioLogin(idUsuario)

        const avatarUsuario = document.createElement("img")
        const apelidoUsuario = document.createElement("h2")

        avatarUsuario.src = infoUsuario.avatarUrl
        avatarUsuario.alt = `Avatar do usuario`
        apelidoUsuario.innerText = infoUsuario.username

        divUsuario.append(avatarUsuario, apelidoUsuario)
    }
}
const listaPost = await ApiRequest.homePage()
Postagens.listarPosts(listaPost)
Postagens.newPost()
Modal.mostraModal()
Modal.fecharModal()
Modal.mostrarDeleteModal()
Modal.fecharDeleteModal()
Postagens.deletePostagem()
Postagens.editar()
Postagens.logout()
Postagens.domInfoUsuario()

