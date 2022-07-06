import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../API';
//context
import { MyContext } from '../../context'
//styles
import { Wrapper } from './Login.styles';
//components
import Button from '../Button/button';


const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    //grab context with the useContext hook and pass in MyContext
    const [ user, setUser ] = useContext(MyContext);
    //hook for navigation to navigate programatically 
    const navigate = useNavigate();

    const handleInput = (e : any) => {
        const value = e.currentTarget.value;

        if(e.currentTarget.name === 'username') setUsername(value);
        if(e.currentTarget.name === 'password') setPassword(value);
    };

    const handleSubmit = async () => {
        setError(false);

        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken, username, password);
           
            //console.log(sessionId); 

            if(sessionId.success) {
                //set user with the context
                setUser({sessionId: sessionId.session_id, username});
                navigate('/');
            }
            else {
                setError(true);
                //TODO - handle errors 
            }
            
        } catch(error) {
            setError(true);
        }
    };

    return (
        <Wrapper>
            { error ? <div className='error'>There was an error logging you in</div> : null }

            <label>Username: </label>
            <input type='text' value={username} name='username' onChange={handleInput} />
            <label>Password: </label>
            <input type='password' value={password} name='password' onChange={handleInput}/>

            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    );
}

export default Login;