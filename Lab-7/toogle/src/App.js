import React, { useState } from 'react';
import './App.css';
import UserInfo from './userinfo';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const toggleUserInfo = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="user-form">
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={user.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Address:</label>
            <input 
              type="text" 
              name="address" 
              value={user.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <UserInfo 
            name={user.name} 
            email={user.email} 
            address={user.address} 
          />
          <button onClick={toggleUserInfo} class="hi">Edit Info</button>
        </>
      )}
    </div>
  );
}

export default App;
