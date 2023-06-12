import { useState } from 'react'
import Message from './Messages'

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(true)
    const [successMessage, setSuccessMessage] = useState("You have succesfully created your account !")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length > 0 && email.includes('@') && password.length >= 6 && password.length <= 12 ) {
            setName("")
            setEmail("")
            setPassword("")
            return alert(successMessage)
        }
        return alert("Validation Error")
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        if (name.length <= 2) {
            setNameError("Name has to be more that 1 character")
            setError(true)
        } else {
            setNameError("")
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (!email.includes('@')) {
            setEmailError("Invalid Email!")
            setError(true)
        } else {
            setEmailError("")
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (password.length >= 6 && password.length <= 12) {
            setPasswordError("")
        } else {
            setPasswordError("Password needs to be 6 - 12 characters")
            setError(true)
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type="text" name="name" value={name} onChange={handleNameChange} />
            <Message errorStatus={nameError} />
            <br />
            <label htmlFor='email'>Email: </label>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
            <Message errorStatus={emailError} />
            <br />
            <label htmlFor='name'>Password: </label>
            <input type="text" name="password" value={password} onChange={handlePasswordChange} />
            <Message errorStatus={passwordError} />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form