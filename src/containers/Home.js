import React from 'react';
import ContentContainer from '../components/ContentContainer';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HomeContentContainer = styled(ContentContainer)` 
    text-align: center;
`;

function Home() {

  return (
    <HomeContentContainer>
        <Title style={{ marginTop:'75px', fontSize: '50pt'}}>Music Around The World</Title>
        <Paragraph style={{ marginTop:'75px'}}>Fill in description of project here</Paragraph>
    </HomeContentContainer>
  );
}

export default Home;
