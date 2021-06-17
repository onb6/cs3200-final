import React from 'react';
import { useHistory } from 'react-router';
import ContentContainer from '../components/ContentContainer';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography;

const HomeContentContainer = styled(ContentContainer)` 
    text-align: center;
`;

function Home() {

  const history = useHistory();

  return (
    <HomeContentContainer>
        <Title style={{ marginTop:'75px', fontSize: '50pt'}}>Music Around The World</Title>
        <Paragraph style={{ marginTop:'75px'}}>Fill in description of project here</Paragraph>
        <Button onClick={() => history.push('/explore')} size='large'>Continue<RightOutlined /></Button>
    </HomeContentContainer>
  );
}

export default Home;
