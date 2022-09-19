import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdministratorLogin = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const history = useNavigate();

    const fetchLoginInfo = () => {
        fetch(`http://localhost:5000/admin/login`, {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                if (!json.token) {
                    throw Error()
                }
                localStorage.setItem("token", json.token)
                localStorage.setItem("role", "admin")
                history("/")
            })
            .catch(() => alert("Wrong email or password!"))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        fetchLoginInfo()
    }

    const handleChangeInfo = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="text-center">
            <h1>Login</h1>
            <form
                onSubmit={handleLoginSubmit}
            >
                <div>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        name="email"
                        value={loginInfo.email || ""}
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password"
                        value={loginInfo.password || ""}
                        onChange={handleChangeInfo}
                    />
                </div>
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AdministratorLogin;