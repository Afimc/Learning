import './LoginPage.scss'
import usersStore from '../Stores/usersStore'
import { useState } from 'react'





function LoginPage() {
    const [passwordValue,setPasswordValue] = useState('')
    const [userNameValue, setUserNameValue] = useState('')
    const logIn = usersStore((state) => state.logIn)
    const errorMessage = usersStore((state) => state.errorMessage)

    return (
        <div>
            <div className="Login">
                <input type="text" value={userNameValue} onChange={(event) => setUserNameValue(event.target.value)} placeholder='Username' />
                <input type="password" value={passwordValue} onChange={(event) => setPasswordValue(event.target.value)} placeholder='Password' />
                <button id='ButtonLogin' disabled={!passwordValue||!userNameValue} onClick={() => logIn(userNameValue,passwordValue)} >Login</button>
            </div>
            {
                errorMessage
                    ? <div>{errorMessage}</div>
                    : null
            }
        </div>
    )
}

export default LoginPage