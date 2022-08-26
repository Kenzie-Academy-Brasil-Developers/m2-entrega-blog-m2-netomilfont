import { ApiRequest } from "./script.js";

export class Postagens {
    static  listarPosts(arr) {
        const ul = document.querySelector("ul")

        arr.forEach((postagem) => {
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
}
const listaPost = await ApiRequest.homePage()
const data = listaPost.data
Postagens.listarPosts(data)

/** <li>
        <div>
            <img src="../assets/image 4.png" alt="">
            <h2>Gatinho Fofo</h2>
        </div>
        <p class="postagem">Lorem ipsum dolor sit amet. Et iste labore ut similique consequuntur et consequuntur harum est repellendus quia 33 tempore similique. Nam reprehenderit vero eos maxime consequatur At nihil facere vel quam nemo eum perspiciatis maiores qui atque quia. 
        </p>
        <p class="data">22/08/2022</p>
        <div class="container__botoes">
            <button class="editar"><img src="../assets/edit 1.svg" alt=""></button>
            <button class="delete"><img src="../assets/trash-bin 1.svg" alt=""></button>
        </div>
    </li> */
