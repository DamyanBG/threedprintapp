import { useState } from "react";

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState()

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
            >
                <div>
                    <label>First name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        style={{
                            marginLeft: "5px",
                            borderRadius: "5px"
                        }}
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