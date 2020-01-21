import React from 'react';
import FormInput from '../../components/inputForm/inputForm.component';
import { SignUpContainer, InputForm } from './signUp.styled';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  handleChange = (e) =>{
    const { name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = async e =>{
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert('password does not match');
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      console.log({displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(err){
      console.error('eroare la sign up',err.message)
    }
  }
  render(){
    const { displayName, email, password, confirmPassword} = this.state;
    return(
      <SignUpContainer>
        <InputForm >
        <FormInput 
        name = 'displayName'
        value = {displayName}
        onChange = {this.handleChange}
        label = 'Display Name'
        required
        />
        <FormInput 
        name = 'email'
        value = {email}
        onChange = {this.handleChange}
        label = "email"
        required
        />
        <FormInput 
        name = 'password'
        value = {password}
        onChange = {this.handleChange}
        label = "password"
        required
        />
        <FormInput 
        name = 'confirmPassword'
        value = {confirmPassword}
        onChange = {this.handleChange}
        label = "confirm Password"
        required
        />
        <button onClick={this.handleSubmit}> Submit </button>
        </InputForm>
      </SignUpContainer>
    )
  }
}
export default SignUp