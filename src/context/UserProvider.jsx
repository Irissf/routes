import { createContext,useState } from "react"

//a lo que llamamos para usar lo de context
export const UserContext = createContext()

const UserProvider = (props) => {

    const [user, setUser] = useState(false);

    const signIn = () => {
        setUser(true);
    }
    const singOut = () =>{
        setUser(false);        
    }

    return (
        <UserContext.Provider value={{user, signIn, singOut}}>
            {props.children}
        </UserContext.Provider>
    )
}

//para envolver la aplicación para poder acceder al context
export default UserProvider