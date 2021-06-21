import React from 'react';
import ContentContainer from '../components/ContentContainer';
import { Image} from 'antd';
import { FontTitle } from './explore/Explore';

function Team() {

  return (
    <ContentContainer>
        <FontTitle style={{ textAlign: 'center', color: '#652600'}}>Meet the Team!</FontTitle>
        <Image src='/Users/oliviablier/Documents/classes-summer21/database/final_project/vita.jpeg' width={200}/>
    </ContentContainer>
  );
}

export default Team;