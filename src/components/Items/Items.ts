export enum AttributeItems {
    "img_item" = "img_item",
    "name_item" ="name_item", 
    "cost_item" ="cost_item",
    "amount_item" = "amount_item"     

}

export class Items extends HTMLElement{

    img_item?: string = "";
    name_item?: string = "";
    cost_item?: string = "";
    amount_item?: string = "";    


    static get observedAttributes(){
        const attrs: Record <AttributeItems, null> ={
            img_item: null,
            name_item: null,
            cost_item: null,
            amount_item: null,            

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeItems,
        _: unknown,
        newValue: string){

            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
        
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "../src/components/Items/Items.css")
            this.shadowRoot.appendChild(link)

            const itemContainer = this.ownerDocument.createElement("div")
            itemContainer.classList.add("item-container")
            
            const imgDiv = this.ownerDocument.createElement("div")
            imgDiv.classList.add("img-div")
                        
            const imgItem = this.ownerDocument.createElement("img")
            imgItem.classList.add("img-item")
            imgItem.setAttribute("src", `${this.img_item}`)
            itemContainer.appendChild(imgDiv)
            imgDiv.appendChild(imgItem)

            const titleItem = this.ownerDocument.createElement("h1")
            titleItem.classList.add("title-item")
            titleItem.innerText = `${this.name_item}`
            itemContainer.appendChild(titleItem)

            const costItem = this.ownerDocument.createElement("h2")
            costItem.classList.add("cost-item")
            costItem.innerText = `${this.cost_item}`
            itemContainer.appendChild(costItem)

            const amountItem = this.ownerDocument.createElement("p")
            amountItem.classList.add("amount-item")
            amountItem.innerText = `Amount: ${this.amount_item}`
            itemContainer.appendChild(amountItem)

            this.shadowRoot.appendChild(itemContainer)     



            
        }

       
    }
}

customElements.define('item-component', Items );