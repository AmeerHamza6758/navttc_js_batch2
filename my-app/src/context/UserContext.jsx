import { createContext, useState } from "react";


// Step-1
const UserContext = createContext()


// Step-2
function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        name: "Ameer Hamza",
        phone: "0300000000",
        email: 'meer@gmail.com',
        // profileImage :"http"
    })
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider, UserContext };