import "../export"
import { state } from "../../store/index";

const enum resultElementsProperties {
    img = "img",
    id = "id"
}


export class resultElements extends HTMLElement {
    properties: Record<resultElementsProperties, string> = {
        img: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<resultElementsProperties, null> = {
            img: null,
            id: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: resultElementsProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case resultElementsProperties.img:
                this.properties.img = newValue
                break;
            case resultElementsProperties.id:
                this.properties.id = newValue
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
        link.setAttribute("href", "/src/components/resultElements/resultElements.css")
        this.shadowRoot?.appendChild(link)

        const image = this.ownerDocument.createElement("img")
        image.setAttribute("src", `${this.properties.img}`)
        this.shadowRoot?.appendChild(image)

        console.log(this.properties.id)

        if (state.head === this.properties.id || state.body === this.properties.id || state.weapon === this.properties.id) {
            if (image.classList.contains("hiddenPart")) {
                image.classList.remove("hiddenPart")
            }
            image.classList.add(`${this.properties.id}`)
        } else {
            if (image.classList.contains("hiddenPart")) {
                image.classList.remove(`${this.properties.id}`)
            }
            image.classList.add("hiddenPart")
        }


    }
}

customElements.define("result-elements", resultElements)