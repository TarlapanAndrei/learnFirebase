import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #ACC8EA;
  height: 8vw;
  display:flex;
`;
export const ButtonDiv = styled(Link)`
  width: 20%;
  height: 100%;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6A716C;
  &:hover{
    background-color:#7589A0;
    color: white;
  }
`;