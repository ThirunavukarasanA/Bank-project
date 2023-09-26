import { createContext } from "react";

let value = {
    users: [
        {
            name: "User",
            email: "user@gmail.com",
            password: "secret",
            role:"Admin",
            balance: 0
        },
    ],
    loginuser: []
}
const UserContext = createContext(value);
export default UserContext;
