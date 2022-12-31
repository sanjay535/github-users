

import React, { useState } from 'react';
import styled from 'styled-components';
import FollowersList from './FollowersList';
import ReposList from './ReposList';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #6521ff;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Followers', 'Repositories'];

function Tabs({followers, user_repos}) {
  const [active, setActive] = useState(types[0]);
  
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      {/* <p> Your payment selection: {active} </p> */}
     {active===types[0]?<FollowersList followers={followers}/>:<ReposList user_repos={user_repos}/>} 
    </>
  );
}

export default Tabs;