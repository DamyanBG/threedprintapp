import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import UserCreate from "./UserCreate";

const Register = () => {
    const { setUser } = useContext(UserContext)

    return (
        <UserCreate
            fetchURL="https://printing-service-back-end.onrender.com/register"
            headers={{
                'Content-Type': 'application/json'
            }}
            setJson={setUser}
            fetchErrorMessage="Can not register!"
        />
    )
}

export default Register;