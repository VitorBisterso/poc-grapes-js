import { useEffect, useState } from "react"
import UnregisteredComponent from "../unregisteredComponent";
import CustomButton from "../button";
import Wrapper from "../wrapper";

interface User {
   id: number;
   name: string;
   username: string;
   email: string;
}

export default function WholePage() {
   const [isLoading, setIsLoading] = useState(false);
   const [users, setUsers] = useState<Array<User>>([])

   useEffect(() => {
      setIsLoading(true);
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json => {
            setUsers(json);
            setIsLoading(false);
         })
   }, [])

   return isLoading ?
      <p>Loading...</p> :
      <>
         {users.map(user =>
            <>
               <Wrapper />
               <div
                  key={user.id}
                  style={{
                     marginTop: 8,
                     marginBottom: 8,
                     border: '1px solid black',
                     borderRadius: 8,
                  }}
               >
                  <p>Nome: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Username: {user.username}</p>
                  <UnregisteredComponent />
                  <CustomButton text="but I am" testId="" onClick={() => undefined} />
               </div>
            </>
         )}
      </>
}