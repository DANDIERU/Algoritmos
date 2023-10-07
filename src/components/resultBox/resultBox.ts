import "../export"
import { addObserver } from "../../store/index"

export class resultBox extends HTMLElement {
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
            link.setAttribute("href", "/src/components/resultBox/resultBox.css")
            this.shadowRoot?.appendChild(link)

            const resultsContainer = this.ownerDocument.createElement("div")
            resultsContainer.setAttribute("id", "results-cont")
            this.shadowRoot?.appendChild(resultsContainer)            

            const custom1 = this.ownerDocument.createElement("result-elements")
            custom1.setAttribute("img", "/src/resources/head1.png")
            custom1.setAttribute("id", "head1")
            resultsContainer.appendChild(custom1)

            const custom2 = this.ownerDocument.createElement("result-elements")
            custom2.setAttribute("img", "/src/resources/head2.png")
            custom2.setAttribute("id", "head2")
            resultsContainer.appendChild(custom2)

            const custom3 = this.ownerDocument.createElement("result-elements")
            custom3.setAttribute("img", "/src/resources/head3.png")
            custom3.setAttribute("id", "head3")
            resultsContainer.appendChild(custom3)

            const custom4 = this.ownerDocument.createElement("result-elements")
            custom4.setAttribute("img", "/src/resources/body1.png")
            custom4.setAttribute("id", "body1")
            resultsContainer.appendChild(custom4)

            const custom5 = this.ownerDocument.createElement("result-elements")
            custom5.setAttribute("img", "/src/resources/body2.png")
            custom5.setAttribute("id", "body2")
            resultsContainer.appendChild(custom5)

            const custom6 = this.ownerDocument.createElement("result-elements")
            custom6.setAttribute("img", "/src/resources/body3.png")
            custom6.setAttribute("id", "body3")
            resultsContainer.appendChild(custom6)

            const custom7 = this.ownerDocument.createElement("result-elements")
            custom7.setAttribute("img", "/src/resources/weapon1.png")
            custom7.setAttribute("id", "weapon1")
            resultsContainer.appendChild(custom7)

            const custom8 = this.ownerDocument.createElement("result-elements")
            custom8.setAttribute("img", "/src/resources/weapon2.png")
            custom8.setAttribute("id", "weapon2")
            resultsContainer.appendChild(custom8)

            const custom9 = this.ownerDocument.createElement("result-elements")
            custom9.setAttribute("img", "/src/resources/weapon3.png")
            custom9.setAttribute("id", "weapon3")
            resultsContainer.appendChild(custom9)
        }
    }
}

customElements.define("result-box", resultBox)