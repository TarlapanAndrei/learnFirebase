import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import { HomePageContainer } from './homepage.styled';
import FatchedElement from '../../components/fatchedElement/fatchedElement.component';

class HomePage extends React.Component{
  state = {
    queriedData:[]
  }
  unsubscribeFromBase = null;
  componentDidMount(){
      const userRef = firestore.collection('infoteca');
      this.unsubscribeFromBase = userRef.onSnapshot(doc =>{
       const dataForState = doc.docs.map(doc => doc.data())
       this.setState({
        queriedData: dataForState
       })
        console.log(dataForState)
      })

}
componentWillUnmount(){
  this.unsubscribeFromBase()
}
  render(){
    const {queriedData} = this.state;
  const marca = queriedData.map((data) => <FatchedElement key={data.infoToAdd} infoToAdd={data.infoToAdd} name={data.name} imgUrl={data.imgUrl}/>)
    console.log(queriedData)
    return(
    <HomePageContainer>
      {marca}    
    </HomePageContainer>
  )
  }
}

export default HomePage;