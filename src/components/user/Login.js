import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const FieldComponent = React.memo(({
    labelText,
    type,
    name,
    value,
    handleOnChange
}) => {
    console.log(`render ${labelText}`)
    return (
        <div>
            <label>{labelText}</label>
            <input 
                type={type} 
                name={name}
                value={value || ""}
                onChange={handleOnChange}
            />
        </div>
    )
})

const ButtonComponent = React.memo(() => (
    <button
        type="submit"
    >
        Submit
    </button>
))

const HeaderComponent = React.memo(() => (
    <h1>Login</h1>
))

const FormComponent = ({
    handleOnSubmit,
    emailField,
    passwordField,
    formButton
}) => {
    return (
        <form
            onSubmit={handleOnSubmit}
        >
            {emailField}
            {passwordField}
            {formButton}
        </form>
    )
}

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const history = useNavigate();
    const { setUser } = useContext(UserContext)

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
                if (!json.token) {
                    throw Error()
                }
                setUser(json)
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
            <HeaderComponent />
            <FormComponent
                handleOnSubmit={handleLoginSubmit}
                emailField={
                    <FieldComponent
                        labelText="E-mail"
                        type="email"
                        name="email"
                        value={loginInfo.email}
                        handleOnChange={handleChangeInfo}
                    />
                }
                passwordField={
                    <FieldComponent
                        labelText="Password"
                        type="password"
                        name="password"
                        value={loginInfo.password}
                        handleOnChange={handleChangeInfo}
                    />
                }
                formButton={<ButtonComponent />}
            />
        </div>
    )
}

export default Login;