import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const FieldComponent = ({ labelText, labelTestId, type, name, inputTestId, value, handleOnChange }) => {
    console.log(`render ${labelText}`);
    return (
        <div>
            <label data-testid={labelTestId}>{labelText}</label>
            <input type={type} name={name} data-testid={inputTestId} value={value || ""} onChange={handleOnChange} />
        </div>
    );
};

const ButtonComponent = React.memo(() => <button type="submit" data-testid="submitButton">Submit</button>);

const HeaderComponent = React.memo(() => <h1>Login</h1>);

const FormComponent = ({ handleOnSubmit, emailField, passwordField, formButton }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            {emailField}
            {passwordField}
            {formButton}
        </form>
    );
};

const TextCenter = ({children}) => (
    <div className="text-center">
        {children}
    </div>
)

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const fetchLoginInfo = () => {
        fetch(`https://printing-service-back-end.onrender.com/login`, {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((json) => {
                if (!json.token) {
                    throw Error();
                }
                setUser(json);
                navigate("/");
            })
            .catch(() => alert("Wrong email or password!"));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        fetchLoginInfo();
    };

    const handleChangeInfo = (e) => {
        setLoginInfo((previousInfo) => {
            const newInfo = {...previousInfo, [e.target.name]: e.target.value}
            return newInfo
        })
    };

    const emailComponent = useMemo(() => (
        <FieldComponent
            labelText="E-mail"
            labelTestId="emailLabel"
            type="email"
            name="email"
            inputTestId="email"
            value={loginInfo.email}
            handleOnChange={handleChangeInfo}
        />
    ), [loginInfo.email])

    const passwordComponent = useMemo(() => (
        <FieldComponent
            labelText="Password"
            labelTestId="passwordLabel"
            type="password"
            name="password"
            inputTestId="password"
            value={loginInfo.password}
            handleOnChange={handleChangeInfo}
        />
    ), [loginInfo.password])

    return (
        <TextCenter>
            <HeaderComponent />
            <FormComponent
                handleOnSubmit={handleLoginSubmit}
                emailField={emailComponent}
                passwordField={passwordComponent}
                formButton={<ButtonComponent />}
            />
        </TextCenter>
    );
};

export default Login;
