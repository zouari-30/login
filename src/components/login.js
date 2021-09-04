import React ,{useState}  from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../Features/userSlice'

export const Login = () => {


    const [name,setName]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch ();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
                name:name,
                email:email,
                password:password,
                loggedIn:true ,
            })) ;
    }
    

    return (
        <div className='login'>
            <form className='login_Form' onSubmit = {(e) => handleSubmit(e)}>
                <h1>login here</h1>
                <input type="name"
                 placeholder="name" 
                 value={name} 
                 onChange= {(e)=> setName(e.target.value)   
                 }/>
                <input type="email" placeholder="email" value={email} onChange= {(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange= {(e)=> setPassword(e.target.value)}/>
                <button type="submit" className="submit_btn" >submit</button>
            </form>
        </div>
    );
};
