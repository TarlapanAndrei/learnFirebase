import React from 'react';
import FormInput from '../../components/inputForm/inputForm.component';
import {SignInContainer, SignInForm} from './signIn.styled';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) =>{
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }
  render(){
    const {email, password} = this.state;
    console.log(email)
    return(
  <SignInContainer>
    <SignInForm>
   <FormInput 
     name= 'email'
     value= {email}
     onChange={this.handleChange}
     label='email'
   />
      <FormInput 
     name= 'password'
     value= {password}
     onChange={this.handleChange}
     label='password'
   />
   <button>Sign In</button>
   <button type='button' onClick={()=>signInWithGoogle()}>Sign In With Google</button>
   </SignInForm>
  </SignInContainer>
    )
  }
}
export default SignIn;