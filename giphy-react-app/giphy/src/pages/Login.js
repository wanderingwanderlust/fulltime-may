import { useState } from 'react'
// will include authorization
import { useNavigate, useLocation } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let { from } = location.state || {from: {pathname: '/'}}

    const login = (e) => {
        e.preventDefault();
        console.log(username, password)
        //create auth file to sign in our users
        navigate(from)
    }

    return(
        <div>
            <form onSubmit={login}>
                <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login