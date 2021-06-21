import React from 'react';
import { useHistory } from 'react-router';
import ContentContainer from '../components/ContentContainer';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { FontTitle } from './explore/Explore';

const { Paragraph } = Typography;

const HomeContentContainer = styled(ContentContainer)` 
    text-align: center;
    width: 1100px;
`;

const PinkButton = styled(Button)`
  background-color: #fe9fa3;
  font-size: 20pt;
  width: 250px;
  height: 75px;
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  font-family: 'Playfair Display', serif;
  :hover {
    color: #fe9fa3;
    border-color: #fe9fa3;
  }
`;

const LinkButton = styled(Button)`
  color: #fe9fa3;
  font-size: 12pt;
  padding: 0;
  :hover {
    color: #f4ccccff;
  }
`;

function Home() {

  const history = useHistory();

  return (
    <HomeContentContainer>
        <FontTitle style={{ marginTop:'75px', fontSize: '50pt', color: '#652600'}}>Music Around The World</FontTitle>
        <Paragraph style={{ marginTop:'50px', fontSize: '12pt', color: '#595959' }}>This website is a final project for CS3200 Database Design at 
        Northeastern University. Our goal for this project was to highlight connections between people from all over the world by using music 
        listening data from Spotify Charts. We utilized this data to find patterns, trends, and similarities in music tastes
         between people from different countries, and ultimately to fuel the exploration of different genres, languages, and cultures. 
         <br/><br/> You can <LinkButton type="link" onClick={() => history.push('/team')}>meet the creators</LinkButton> of this project or click Continue to begin exploring music trends!</Paragraph>
        <PinkButton onClick={() => history.push('/explore')} size='large'>Continue<RightOutlined /></PinkButton>
    </HomeContentContainer>
  );
}

export default Home;
