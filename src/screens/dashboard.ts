import { AttributeCats } from "../components/Card/Card";
import "../components/export"
import { getDataCatimg, getDataFact } from "../services/getData";
import { Datatype } from "../types/daticaType";
export default class Dashboard extends HTMLElement{  

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }  

    async connectedCallback(){
        
         
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            const buttonCat = this.ownerDocument.createElement("button");
            buttonCat.innerText = "Dame un gatito con una frase random"
            this.shadowRoot.appendChild(buttonCat)

            buttonCat.addEventListener( "click", async () => {
                
                const dataImg = await getDataCatimg()
                const dataFact = await getDataFact()

                const title = this.ownerDocument.createElement("h1");
                title.innerText = "CATS FACTS"
                this.shadowRoot?.appendChild(title)               

                const catCard = this.ownerDocument.createElement("my-card");
                
                catCard.setAttribute(AttributeCats.imagecat, dataImg.url )
                catCard.setAttribute(AttributeCats.facts, dataFact.fact )

                this.shadowRoot?.appendChild(catCard);
            },            
            
            )


            
        }
    }


}

customElements.define("app-dashboard", Dashboard)