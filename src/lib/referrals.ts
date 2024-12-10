import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "./firebase"


export interface DataType{
  name:string
  createdAt:Date,
  country:string,
  num:number

}

export const getReferrals=async()=>{
  try {
    const userId=auth.currentUser?.uid
    if (userId) {
      const q = query(collection(db, "users"), where("referralId", "==", userId),orderBy('createdAt','desc'));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
         return []
      }else{
        let result:DataType[]=[]
        querySnapshot.docs.map((v,i)=>{
          result.push({
            num:i+1,
            name:v.data().nickName,
            createdAt:v.data().createdAt,
            country:v.data().country
          })
        })
       return result

      }
  }
  } catch (err:any) {
    console.log(err)
  }
}