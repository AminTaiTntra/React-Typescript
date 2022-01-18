import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/button';
import FormData from './components/Form';
import Input from './components/input';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({username,userType}): JSX.Element => {
  
  const [time,setTime] = useState<Date>(() => new Date(Date.now()))
  const [message, setMessage] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  } 
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("click");
    
  }
    
  setInterval(() => {
    setTime(new Date(Date.now()));
  }, 1000);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };
  // console.log();
  
  return (
    <div className="App">
    Hi {username ? username : 'Amin Tai'} , your type is { username ? userType : "i do not know"}
    <p>
      {
        time.toUTCString()
      }
    </p>
    <input
        type='text'
        placeholder='Enter your message here'
        value={message}
        onChange={handleTextChange}
      />
      <p>
        Your message: {message || ''}
      </p>
      <Input type="text" onChange={handleChange}/>
      <Button type="submit" value="Submit" onClick={handleClick} className="bg-primary"/>

     <UseState />

     <UseEffect />

     {/* <UseRef />  */}

     <FormData />
    </div>
  );
}

export default App;
