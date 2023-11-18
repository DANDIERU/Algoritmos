import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, getFirestore, serverTimestamp, query, onSnapshot} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCoO6QgyXgzAyyOFfP0Q_VmNtYl6gOMSfY",
    authDomain: "dca-2023-501d7.firebaseapp.com",
    projectId: "dca-2023-501d7",
    storageBucket: "dca-2023-501d7.appspot.com",
    messagingSenderId: "761202219784",
    appId: "1:761202219784:web:7bd9b28f2140034b386abd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPost = async (item: any) => {
    try {
      const commentData = collection(db, "Items");
      await addDoc(commentData, {
        ...item,
        createdAt: serverTimestamp(),
      });
      console.log("Se añadió un Item");
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Items"));
      const posted: any = [];
  
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        posted.push({
          id: doc.id,
          ...item,
        });
      });
  
      posted.sort((a: any, b: any) => (b.createdAt ? b.createdAt.toMillis() : 0) - (a.createdAt ? a.createdAt.toMillis() : 0));
  
      // Invierte el orden para que los más recientes estén primero
      return posted.reverse();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const tiempoRealProductos = async (contenedor: HTMLElement) => {
    const q = query(collection(db, "Items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posted: any = [];
  
      querySnapshot.forEach((doc:any) => {
        const item = doc.data();
        posted.push({
          id: doc.id,
          ...item,
        });
      });
  
      
      contenedor.innerHTML = "";
  
      
      posted.forEach((item: any) => {
        const itemCard = document.createElement("item-component");
        itemCard.setAttribute("img", item.imageUrl);
        itemCard.setAttribute("name", item.name);
        itemCard.setAttribute("quantity", item.quantity);
        itemCard.setAttribute("price", item.price);
  
        contenedor.appendChild(itemCard);
      });
    });
  
  
  };
  
  export default {
    getPost,
    addPost,
  };