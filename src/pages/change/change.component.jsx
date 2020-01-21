import React from 'react';
import FormInput from '../../components/inputForm/inputForm.component';
import { addInfo } from '../../firebase/firebase.utils';

class Changes extends React.Component{
  state = {
    info: '',
    nameOfOwner: '',
    imgUrl: ''
  }
  handleChange = e =>{
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }
  handleSubmit = async e =>{
    e.preventDefault();
    const { info, nameOfOwner, imgUrl } = this.state;
    try{
     await addInfo(info, nameOfOwner, imgUrl)
     this.setState({
       info: '',
       nameOfOwner: '',
       imgUrl: ''
     })
    } catch(err){
      console.error(err.message)
    }
  }
  render(){
    const { info, nameOfOwner, imgUrl } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <FormInput
          name = 'info'
          value = {info}
          onChange = {this.handleChange}
        />
         <FormInput
          name = 'nameOfOwner'
          value = {nameOfOwner}
          onChange = {this.handleChange}
        />
         <FormInput
          name = 'imgUrl'
          value = {imgUrl}
          onChange = {this.handleChange}
        />
        <button>Send</button>
        </form>
      </div>
    )
  }
}
export default Changes;