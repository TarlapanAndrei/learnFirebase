import React from 'react';
import { FatchedElementContainer, BoxForImage } from './fatchedElement.styled';


const FatchedElement = ({infoToAdd, name, imgUrl}) =>(
  <FatchedElementContainer>
  <p>{infoToAdd}</p>
  <h6>{name}</h6>
  <BoxForImage>
   <img src={imgUrl} alt='imageForEveryBox' title="every box image" />
  </BoxForImage>
  </FatchedElementContainer>
)

export default FatchedElement;