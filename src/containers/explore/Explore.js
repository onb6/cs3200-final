import React, { useState } from 'react';
import ContentContainer from '../../components/ContentContainer';
import { 
  Typography, 
  Row, 
  Col,
  Radio, 
  Space, 
} from 'antd';
import AllTime from './AllTime';
import BySeason from './BySeason';
import styled from 'styled-components';

const { Title } = Typography;

export const FontTitle = styled(Title)`
  font-family: 'Playfair Display', serif;
`;

const RadioButton = styled(Radio.Button)`
  border-color: #fe9fa3;
  border-radius: 20px;
  color: #fe9fa3;
  width: 120px;
  height: 40px;
  font-size: 12pt;
  text-align: center;
  padding: 5px 0;

  :hover {
    color: white;
    background-color: #fe9fa3;
  }
  :active {
    color: white;
    background-color: #fe9fa3;
  }
`;

function Explore() {

  const [allTime, setAllTime] = useState(true)

  return (
    <ContentContainer>
      
      <FontTitle style={{textAlign: 'center', color: '#652600'}}>Compare Music Listening Between Countries!</FontTitle>
      
      <Col>
        <Row justify="center">
        <Space>
        <Radio.Group defaultValue="true" style={{marginBottom: '15px'}} buttonStyle="solid">
          <RadioButton value="true" onClick={() => setAllTime(true)}>All Time</RadioButton>
          <RadioButton value="false" onClick={() => setAllTime(false)}>By Season</RadioButton>
        </Radio.Group>
        </Space>
        </Row>
        
        <Row>
        {allTime ? <AllTime /> : <BySeason />}
        </Row>
        </Col>
        
    </ContentContainer>
  );
}

export default Explore;
