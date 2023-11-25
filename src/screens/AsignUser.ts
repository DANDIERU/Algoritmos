import firebaseConfig from "../firebaseConfig";
import firebase from "../firebaseConfig"



export default class AsignUser extends HTMLElement{  

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }  

    connectedCallback(){       
         
        this.render();
    }

    async render(){
        if(this.shadowRoot){

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/AsignUser.css")
            this.shadowRoot.appendChild(link)

            const formUser = this.ownerDocument.createElement("div")
            formUser.classList.add("form-user")

            const titleSection = this.ownerDocument.createElement("h1")
            titleSection.classList.add("title-section")
            titleSection.innerText = "Bienvenido, pon tu nombre y escoge un color y letra"
            formUser.appendChild(titleSection)

            const labelName = this.ownerDocument.createElement("p")
            labelName.innerText = "Nombre de Usuario"
            formUser.appendChild(labelName)

            const inputUserName = this.ownerDocument.createElement("input")
            inputUserName.classList.add("input-user")
            inputUserName.addEventListener("change",()=>{

            })
            formUser.appendChild(inputUserName)

            const labelColor = this.ownerDocument.createElement("p")
            labelColor.innerText = "Escribe tu color"
            formUser.appendChild(labelColor)

            const inputUserColor = this.ownerDocument.createElement("input")
            inputUserColor.classList.add("input-color")
            inputUserColor.addEventListener("change",()=>{

            })
            formUser.appendChild(inputUserColor)

            const labelLetter = this.ownerDocument.createElement("p")
            labelLetter.innerText = "Escribe tu letra"
            formUser.appendChild(labelLetter)

            const inputUserLetter = this.ownerDocument.createElement("input")
            inputUserLetter.classList.add("input-letter")
            inputUserLetter.addEventListener("change",()=>{

            })
            
            formUser.appendChild(inputUserLetter)

            
            const buttonReady = this.ownerDocument.createElement("button")
            buttonReady.classList.add("button-ready")
            buttonReady.innerText = "Listo"
            formUser.appendChild(buttonReady)

            buttonReady.addEventListener("click", ()=>{
                //firebaseConfig.getUsers()
            })


            this.shadowRoot.appendChild(formUser)

            
            


            
        }
    }


}

customElements.define("app-asign", AsignUser)