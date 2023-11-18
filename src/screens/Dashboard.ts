import "../components/export"
import { AttributeItems } from "../components/Items/Items";
import firebase from "../utils/firebase";
import { Items } from "../components/Items/Items";

const propertiesPost = {
    imageUrl: "",    
    name:"",
    amount: "",
    cost: "",
}; 


export class Dashboard extends HTMLElement{


    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async uploadProperties() {
        console.log(propertiesPost)
        firebase.addPost(propertiesPost);
    }

    connectedCallback(){
        this.render();
    }

    changeimg(e: any) {
        propertiesPost.imageUrl = e.target.value; 
    }

    changename(e: any) {
        propertiesPost.name = e.target.value; 
    }

    changecost(e: any) {
        propertiesPost.cost = e.target.value; 
    }

    changeamount(e: any) {
        propertiesPost.amount = e.target.value; 
    }
    

    async render(){
        if(this.shadowRoot) {
        
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/Dashboard.css")
            this.shadowRoot.appendChild(link)

            const createNewItem = this.ownerDocument.createElement("div")
            createNewItem.classList.add("create-newitem")

            const addTitle = this.ownerDocument.createElement("h1")
            addTitle.classList.add("add-title")
            addTitle.innerText = "Add a product"
            createNewItem.appendChild(addTitle)

            const changeName = this.ownerDocument.createElement("input");
            changeName.placeholder = "Product Name";
            changeName.classList.add("change-name")
            changeName.addEventListener("change", this.changename);
            createNewItem.appendChild(changeName)

            const changeCost = this.ownerDocument.createElement("input");
            changeCost.placeholder = "Product Cost";
            changeCost.classList.add("change-cost")
            changeCost.addEventListener("change", this.changecost);
            createNewItem.appendChild(changeCost)

            const changeAmount = this.ownerDocument.createElement("input");
            changeAmount.placeholder = "Product Amount";
            changeAmount.classList.add("change-amount")
            changeAmount.addEventListener("change", this.changeamount);
            createNewItem.appendChild(changeAmount)

            const changeImg = this.ownerDocument.createElement("input");
            changeImg.placeholder = "Product Image";
            changeImg.classList.add("change-img")
            changeImg.addEventListener("change", this.changeimg);
            createNewItem.appendChild(changeImg)

            const bttnUpload = this.ownerDocument.createElement("button");
            bttnUpload.innerHTML = "Upload";
            bttnUpload.addEventListener("click", this.uploadProperties);
            bttnUpload.classList.add("upload-button");
            createNewItem.appendChild(bttnUpload)

            this.shadowRoot.appendChild(createNewItem)

            const itemsPostedDiv = this.ownerDocument.createElement("div");
            itemsPostedDiv.classList.add("items-postediv");
            console.log(firebase)
            const items = await firebase.getPost();
            items.forEach((itemsposts: any) => {
            const itemCard = this.ownerDocument.createElement("item-component") as Items;
            itemCard.setAttribute(AttributeItems.img_item, itemsposts.imageUrl);
            itemCard.setAttribute(AttributeItems.name_item, itemsposts.name);
            itemCard.setAttribute(AttributeItems.cost_item, itemsposts.cost);
            itemCard.setAttribute(AttributeItems.amount_item, itemsposts.amount);
            
      
            itemsPostedDiv.appendChild(itemCard);
            
            });

            this.shadowRoot?.appendChild(itemsPostedDiv);

            



            
        }

       
    }
}

customElements.define('dashboard-app', Dashboard );