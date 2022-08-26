import { ApiRequest } from "./script.js";

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
        const buttonEditar = document.createElement("button")
        const buttonDeletar = document.createElement("button")
        const imgEditar = document.createElement("img")
        const imgDeletar = document.createElement("img")

        li.key = objPostagem.id
        li.id = objPostagem.id

        pPostagem.classList.add("postagem")
        pData.classList.add("data")
        divBotoes.classList.add("container__botoes")
        buttonEditar.classList.add("editar")
        buttonDeletar.classList.add("delete")

        imgAvatar.src = objPostagem.user.avatarUrl
        imgAvatar.alt = "Avatar do Usuario"
        h2Usuario.innerText = objPostagem.user.username
        pPostagem.innerText = objPostagem.content
        pData.innerText = dataPostagem
        imgEditar.src = "../assets/edit 1.svg"
        imgEditar.alt = "editar"
        imgDeletar.src = "../assets/trash-bin 1.svg"
        imgDeletar.alt = "deletar"

        buttonEditar.append(imgEditar)
        buttonDeletar.append(imgDeletar)
        divBotoes.append(buttonEditar,buttonDeletar)

        divAvatar.append(imgAvatar, h2Usuario)

        li.append(divAvatar, pPostagem, pData)

        if(objPostagem.user.id == userId) {
            li.append(divBotoes)
        }

        return li
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
}
const listaPost = await ApiRequest.homePage()
Postagens.listarPosts(listaPost)
Postagens.newPost()
