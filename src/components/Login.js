import React, { useState } from 'react'

function Login() {
    const [data, setDate] = useState({
        username: '',
        password: ''
    })
    const { username, password } = data;
    const changeHandler = e => {
        setDate({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className="container">
            <div className="card-header">
                <h1>Login Page</h1>
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                <label name="userName" className="form-label">Enter User Name</label><br/>
                    <input type="text" name="username" value={username} onChange={changeHandler} /><br /><br />
                    <label name="passWord" className="form-label">Enter User Password</label><br/>
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br /><br />
                    <input type="submit" name="submit" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default Login
