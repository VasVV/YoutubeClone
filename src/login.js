import './login.css';
import Button from '@material-ui/core/Button';
import {fb, auth, provider} from './firebase';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Login() {

    const dispatch = useDispatch();
    const [err, setErr] = useState('');


    const login = () => {
        fb.auth()
        .signInWithPopup(provider)
        .then(result => {
            dispatch({type: 'ADD_CURR_USER', payload: [result.credential, result.user] })
        })
        .catch(error => {
            setErr(error)
        })
    }

    return (
        <div className="login">
            <h1>Login with Google</h1>
            {err && 'Something went wrong. Please try again'}
            <Button variant="outlined" color="primary" onClick={() => login()}>Log in </Button>
        </div>
    )
}