import React from 'react' 
import {useSelector} from "react-redux"
import {Login} from './components/login.js'
import { Logout } from './components/logout.js';
import { selectUser } from './Features/userSlice.js';

function App() {
  const user = useSelector(selectUser)
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
    
 );
};

export default App;
