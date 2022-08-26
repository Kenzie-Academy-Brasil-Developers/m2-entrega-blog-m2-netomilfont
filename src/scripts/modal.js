export class Modal {
    static mostraModal() {
        const modalBtn = document.querySelectorAll(".btnEdit")
        const modal = document.querySelector(".modal")
        const ul = document.querySelector("ul")
            
        console.log(modalBtn)

        ul.addEventListener("click", (event)=> {
            
            if(event.target.tagName == "INPUT" && event.target.classList == "btnEdit") {
                
                modal.classList.toggle("hidden")
            }
            
        })

    }
    static async fecharModal() {
        

    }
    static async modalEdit() {
    }
    static async modalDelete() {
    }
}

