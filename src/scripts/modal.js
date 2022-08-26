export class Modal {
    static mostraModal() {
        const modal = document.querySelector("#modal__edit")
        const ul = document.querySelector("ul")
            
        ul.addEventListener("click", (event)=> {
            
            if(event.target.tagName == "INPUT" && event.target.classList == "btnEdit") {
                
                modal.classList.toggle("hidden")
            }
            
        })

    }
    static async fecharModal() {
        const btnEnviar = document.querySelector(".modalBtn")
        const modal = document.querySelector(".modal")

        btnEnviar.addEventListener("click", (event) => {
            event.preventDefault()

            modal.classList.toggle("hidden")
            
        })

    }

    static async mostrarDeleteModal() {
        const modal = document.querySelector("#modal__delete")
        const ul = document.querySelector("ul")
        

        ul.addEventListener("click", (event)=> {
            console.log(event.target)
            if(event.target.tagName == "INPUT" && event.target.classList == "btnDelete") {
                
                modal.classList.toggle("hidden")
            }
            
        })
    }

    static async fecharDeleteModal() {
    }
}

