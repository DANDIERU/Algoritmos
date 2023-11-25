import "./components/export"
import "./screens/AsignUser"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const register = this.ownerDocument.createElement('app-asign');
        this.shadowRoot?.appendChild(register);
    }
}

customElements.define('app-container', AppContainer)