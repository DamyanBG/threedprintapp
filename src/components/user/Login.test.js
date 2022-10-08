import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../../context/UserProvider";
import { fireEvent } from "@testing-library/react";

import Login from "./Login";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const rendering = (
    <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </UserProvider>
);

it("initial rendering test", () => {
    act(() => {
        render(rendering, container);
    });
    expect(container.querySelector("input").value).toBe("");
    expect(container.querySelector("[data-testid='password']").value).toBe("");
    expect(container.querySelector("[data-testid='emailLabel']").textContent).toBe("E-mail");
});

it("make input", () => {
    act(() => {
        render(rendering, container);
    });
    const emailInput = container.querySelector("[data-testid='email']");
    const passwordInput = container.querySelector("[data-testid='password']");

    fireEvent.change(emailInput, { target: { value: "asen@abv.bg" } });
    expect(emailInput.value).toBe("asen@abv.bg");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(passwordInput.value).toBe("123456");
});

it("fetch check", async () => {
    const fakeUser = {
        token: "fergergergrg",
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser),
        }),
    );

    act(() => {
        render(rendering, container);
    });
    const emailInput = container.querySelector("[data-testid='email']");
    const passwordInput = container.querySelector("[data-testid='password']");
    const formButton = container.querySelector("[data-testid='submitButton']");

    fireEvent.change(emailInput, { target: { value: "asen@abv.bg" } });
    expect(emailInput.value).toBe("asen@abv.bg");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(passwordInput.value).toBe("123456");

    await act(async () => {
        fireEvent.click(formButton);
    });
    const storedToken = JSON.parse(localStorage.getItem("userInfo"));
    console.log(storedToken);
    expect(storedToken.token).toBe("fergergergrg");
});
