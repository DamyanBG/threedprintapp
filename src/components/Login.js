import { useState } from "react";
import inMemoryJWTManager from "../managers/inMemoryJWTManager";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const fetchLoginInfo = () => {
        fetch(`http://localhost:5000/login`, {
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
                inMemoryJWTManager.setToken(json.token)
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
        <>
            <h1>Login</h1>
            <form
                style={{
                    background: "lightblue", 
                    padding: "10px",
                    marginLeft: "30%",
                    marginRight: "30%",
                    borderRadius: "6px"
                }}
                onSubmit={handleLoginSubmit}
            >
                <div>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        name="email"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                        value={loginInfo.email || ""}
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
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
        </>
    )
}

export default Login;