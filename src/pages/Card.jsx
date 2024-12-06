
import styled from 'styled-components';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../firebase";
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Card = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  let navigate = useNavigate();
    return (
        <>
          <StyledWrapper style={{
            border:'2px solid',
                width: '100%',
                height: '100vh',
                backgroundColor:'#000',
                backgroundImage:'url(https://i.pinimg.com/736x/c7/01/da/c701da62d110fd08e9ce14bd5a4b4792.jpg)'
          }}>
      <div className="login wrap" style={{
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
      }}>
        <div className="h1">Login</div>
        <input placeholder="Email" id="email" name="email" type="text" onChange={(eo) => {
          setemail(eo.target.value)
        }} />
        <input placeholder="Password" id="password" name="password" type="password" onChange={(eo) => {
          setpassword(eo.target.value)
        }} />
        <input defaultValue="Login" className="btn" type="submit" onClick={(eo) => {
          eo.preventDefault()
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            // Signed up 
            navigate('/Companies')
            // ...
          })
          .catch(() => {
          
            // ..
          });
        }}/>
      </div>
    </StyledWrapper>
        </>
    );
}
const StyledWrapper = styled.div`
  .login {
    width: 340px;
    height: 400px;
    background: #2c2c2c;
    padding: 47px;
    padding-bottom: 57px;
    color: #fff;
    border-radius: 17px;
    padding-bottom: 50px;
    font-size: 1.3em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .login input[type="text"],
  .login input[type="password"] {
    opacity: 1;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    padding: 13px 18px;
    margin: 20px 0 0 0;
    font-size: 0.8em;
    border-radius: 100px;
    background: #3c3c3c;
    color: #fff;
  }

  .login input:focus {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=submit],
  .login input[type=button],
  .h1 {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 13px;
    margin: 40px 0 0 0;
    border-radius: 500px;
    font-weight: 600;
    animation: bounce2 1.6s;
  }

  .h1 {
    padding: 0;
    position: relative;
    top: -35px;
    display: block;
    margin-bottom: -0px;
    font-size: 1.3em;
  }

  .btn {
    background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    color: #fff;
    padding: 16px !important;
  }

  .btn:hover {
    background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
    color: rgb(255, 255, 255);
    padding: 16px !important;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .login input[type=text] {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=password] {
    animation: bounce1 1.3s;
  }

  .ui {
    font-weight: bolder;
    background: -webkit-linear-gradient(#B563FF, #535EFC, #0EC8EE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
    border-image-slice: 1;
    display: inline;
  }

  @media only screen and (max-width: 600px) {
    .login {
      width: 70%;
      padding: 3em;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-250px);
      opacity: 0;
    }
  }

  @keyframes bounce1 {
    0% {
      opacity: 0;
    }

    40% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  @keyframes bounce2 {
    0% {
      opacity: 0;
    }

    70% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }`;
export default Card;
