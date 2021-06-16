import React from 'react';
import ContentContainer from '../components/ContentContainer';
import { Typography, Image} from 'antd';

const { Title, Paragraph } = Typography;

function Team() {

  return (
    <ContentContainer>
        <Title>Meet the Team!</Title>
        <Image src='/Users/oliviablier/Documents/classes-summer21/database/final_project/vita.jpeg' width={200}/>
    </ContentContainer>
  );
}

export default Team;