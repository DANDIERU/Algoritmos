
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc } from 'firebase/firestore/lite';



export const firebaseConfig = {
  apiKey: "AIzaSyCoO6QgyXgzAyyOFfP0Q_VmNtYl6gOMSfY",
  authDomain: "dca-2023-501d7.firebaseapp.com",
  projectId: "dca-2023-501d7",
  storageBucket: "dca-2023-501d7.appspot.com",
  messagingSenderId: "761202219784",
  appId: "1:761202219784:web:7bd9b28f2140034b386abd"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


async function getUsers(db:any) {
  const UserRegister = collection(db, 'UserAsign');
  const UserSnapshot = await getDocs(UserRegister);
  const UserList = UserSnapshot.docs.map(doc => doc.data());
  return UserList;
}

//await setDoc(doc(db, "UserAsign"), data);

/*const AddUser = await addDoc(collection(db, "UserAsign"), {
  name: "Tokyo",
  country: "Japan"
});*/

export default{
  getUsers
}



