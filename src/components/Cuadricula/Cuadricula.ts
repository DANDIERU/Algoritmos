export enum AttributeCuadri {
    "color_user" = "color_user",
    "user_name" = "user_name",
    "letter_user" = "letter_user"
}

export default class Cuadricula extends HTMLElement{
    color_user?: string = "";
    user_name?: string ="";
    letter_user?: string ="";

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        const attrs: Record<AttributeCuadri, null> = {
            color_user: null,
            user_name: null,
            letter_user:null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:AttributeCuadri, _:unknown, newValue:string){
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
                
                

            </section>           
            
            `
        }
    }


}

customElements.define("cuadricula-component", Cuadricula)