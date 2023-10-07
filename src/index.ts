import "./components/export"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            const stylesheetLink = this.ownerDocument.createElement("link")
            stylesheetLink.setAttribute("rel", "stylesheet")
            stylesheetLink.setAttribute("href", "/src/index.css")
            this.shadowRoot.appendChild(stylesheetLink)

            const buttonInterface = this.ownerDocument.createElement("button-interface")
            this.shadowRoot.appendChild(buttonInterface)

            const resultsContainer = this.ownerDocument.createElement("result-box")
            this.shadowRoot.appendChild(resultsContainer)
        }
    }
}

customElements.define("app-container", AppContainer)