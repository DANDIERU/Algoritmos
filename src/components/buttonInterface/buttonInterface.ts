import "../export"
import { addObserver } from "../../store/index"
import { customType } from "../../types/customType"
import { headTypes, bodyTypes, weaponTypes } from "../../types/store"

export class buttonInterface extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/buttonInterface/buttonInterface.css")
            this.shadowRoot?.appendChild(link)

            const interfaceCont = this.ownerDocument.createElement("section")
            this.shadowRoot?.appendChild(interfaceCont)

            const divRow1 = this.ownerDocument.createElement("div")
            divRow1.classList.add("div-row")
            interfaceCont.appendChild(divRow1)

            const button1 = this.ownerDocument.createElement("change-button")
            button1.setAttribute("img", "/src/resources/head1.png")
            button1.setAttribute("id", `${headTypes.head1}`)
            button1.setAttribute("type", `${customType.head}`)
            divRow1.appendChild(button1)

            const button2 = this.ownerDocument.createElement("change-button")
            button2.setAttribute("img", "/src/resources/head2.png")
            button2.setAttribute("id", `${headTypes.head2}`)
            button2.setAttribute("type", `${customType.head}`)
            divRow1.appendChild(button2)

            const button3 = this.ownerDocument.createElement("change-button")
            button3.setAttribute("img", "/src/resources/head3.png")
            button3.setAttribute("id", `${headTypes.head3}`)
            button3.setAttribute("type", `${customType.head}`)
            divRow1.appendChild(button3)

            const divRow2 = this.ownerDocument.createElement("div")
            divRow2.classList.add("div-row")
            interfaceCont.appendChild(divRow2)

            const button4 = this.ownerDocument.createElement("change-button")
            button4.setAttribute("img", "/src/resources/body1.png")
            button4.setAttribute("id", `${bodyTypes.body1}`)
            button4.setAttribute("type", `${customType.body}`)
            divRow2.appendChild(button4)

            const button5 = this.ownerDocument.createElement("change-button")
            button5.setAttribute("img", "/src/resources/body2.png")
            button5.setAttribute("id", `${bodyTypes.body2}`)
            button5.setAttribute("type", `${customType.body}`)
            divRow2.appendChild(button5)

            const button6 = this.ownerDocument.createElement("change-button")
            button6.setAttribute("img", "/src/resources/body3.png")
            button6.setAttribute("id", `${bodyTypes.body3}`)
            button6.setAttribute("type", `${customType.body}`)
            divRow2.appendChild(button6)

            const divRow3 = this.ownerDocument.createElement("div")
            divRow3.classList.add("div-row")
            interfaceCont.appendChild(divRow3)

            const button7 = this.ownerDocument.createElement("change-button")
            button7.setAttribute("img", "/src/resources/weapon1.png")
            button7.setAttribute("id", `${weaponTypes.weapon1}`)
            button7.setAttribute("type", `${customType.weapon}`)
            divRow3.appendChild(button7)

            const button8 = this.ownerDocument.createElement("change-button")
            button8.setAttribute("img", "/src/resources/weapon2.png")
            button8.setAttribute("id", `${weaponTypes.weapon2}`)
            button8.setAttribute("type", `${customType.weapon}`)
            divRow3.appendChild(button8)

            const button9 = this.ownerDocument.createElement("change-button")
            button9.setAttribute("img", "/src/resources/weapon3.png")
            button9.setAttribute("id", `${weaponTypes.weapon3}`)
            button9.setAttribute("type", `${customType.weapon}`)
            divRow3.appendChild(button9)
        }

    }
}

customElements.define("button-interface", buttonInterface)