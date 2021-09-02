import React, { useState } from 'react';

const UserForm = props => {
    const [inputState, setInputState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: "",
    })

    const handleChange = event => {
        const { name, value } = event.target

        setInputState({
            ...inputState,
            [name]: value
        })
    }

    return (
        <fieldset>
            <form action="">
                <p>
                    First Name:
                    <input type="text" name="firstName" value={inputState.firstName} onChange={handleChange} id="" />
                </p>
                <p>
                    Last Name:
                    <input type="text" name="lastName" value={inputState.lastName} onChange={handleChange} id="" />
                </p>
                <p>
                    Email:
                    <input type="text" name="email" value={inputState.email} onChange={handleChange} id="" />
                </p>
                <p>
                    Password:
                    <input type="password" name="password" value={inputState.password} onChange={handleChange} id="" />
                </p>
                <p>
                    Confirm Password:
                    <input type="password" name="confPassword" value={inputState.confPassword} onChange={handleChange} id="" />
                </p>
            </form>
            <div>
                <p>First Name: {inputState.firstName}</p>
                <p>Last Name: {inputState.lastName}</p>
                <p>Email: {inputState.email}</p>
                <p>Password: {inputState.password}</p>
                <p>Confirm Password: {inputState.confPassword}</p>
            </div>
        </fieldset>
    )
}

export default UserForm