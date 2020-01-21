import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import { HomePageContainer } from './homepage.styled';
import FatchedElement from '../../components/fatchedElement/fatchedElement.component';

class HomePage extends React.Component{
  state = {
    queriedData:[]
  }
  componentDidMount(){
      const getData = async (collection) =>{
      const userRef = firestore.collection(collection);
      const snapShot = await userRef.get();
      const fiecareSnap = await snapShot.docs.map(doc => doc.data())
      this.setState({
        queriedData: fiecareSnap
      })
  }
  getData('infoteca')
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