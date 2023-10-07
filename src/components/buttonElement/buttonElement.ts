import { customType } from "../../types/customType";
import { dispatch } from "../../store/index";
import { changeHead, changeBody, changeWeapon } from "../../store/actions";

const enum changeProperties {
    img = "img",
    id = "id",
    type = "type"
}

export class buttonElement extends HTMLElement {
    properties: Record<changeProperties, string> = {
        img: "",
        id: "",
        type: ""
    }
    
    static get observedAttributes() {
        const properties: Record<changeProperties, null> = {
            img: null,
            id: null,
            type: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: changeProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case changeProperties.img:
                this.properties.img = newValue
                break;
            case changeProperties.id:
                this.properties.id = newValue
                break;
            case changeProperties.type:
                this.properties.type = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/buttonElement/buttonElement.css")
        this.shadowRoot?.appendChild(link)

        const buttonUnit = this.ownerDocument.createElement("div")
        buttonUnit.classList.add("change-Button")
        this.shadowRoot?.appendChild(buttonUnit)

        const imgButton = this.ownerDocument.createElement("img")
        imgButton.setAttribute("src", `${this.properties.img}`)
        buttonUnit.appendChild(imgButton)
        
        buttonUnit.addEventListener("click", () => {
            if (this.properties.type === customType.head) {
                dispatch(
                    changeHead(this.properties.id)
                )
            }

            if (this.properties.type === customType.body) {
                dispatch(
                    changeBody(this.properties.id)
                )
            }

            if (this.properties.type === customType.weapon) {
                dispatch(
                    changeWeapon(this.properties.id)
                )
            }
        })
    }
}

customElements.define("change-button", buttonElement)