export enum AttributeCats {
    "facts" = "facts",
    "imagecat" = "imagecat"
}

export default class Card extends HTMLElement{
    facts: string = "";
    imagecat: string ="";

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        const attrs: Record<AttributeCats, null> = {
            facts: null,
            imagecat: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:AttributeCats, _:unknown, newValue:string){
        switch (propName) {
                            
            default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <h1>${this.facts}</h1>
                <img src="${this.imagecat}">

            </section>           
            
            `
        }
    }


}

customElements.define("my-card", Card)