import { useState } from "react";

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({})

    const fetchPostInfo = () => {
        fetch(`http://localhost:5000/register`, {
            method: "POST",
            body: JSON.stringify(registerInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                // TO DO store the JWT token
            })
    }

    const handleInfoChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitInfo = (e) => {
        e.preventDefault()
        fetchPostInfo()
    }

    return (
        <>
            <h1>Register</h1>
            <form
                style={{
                    background: "lightblue", 
                    padding: "10px",
                    marginLeft: "30%",
                    marginRight: "30%",
                    borderRadius: "6px"
                }}
                onSubmit={handleSubmitInfo}
            >
                <div>
                    <label>First name</label>
                    <input 
                        type="text" 
                        name="first_name"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                        value={registerInfo.first_name || ""}
                        onChange={handleInfoChange}
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input 
                        type="text" 
                        name="last_name"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                        value={registerInfo.last_name || ""}
                        onChange={handleInfoChange}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input 
                        type="number" 
                        name="phone"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                        value={registerInfo.phone || ""}
                        onChange={handleInfoChange}
                    />
                </div>
                <div>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        name="email"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                        value={registerInfo.email || ""}
                        onChange={handleInfoChange}
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
                        value={registerInfo.password || ""}
                        onChange={handleInfoChange}
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

export default Register;