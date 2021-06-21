import React, { useEffect, useState } from 'react';
import { 
  Select,
  Space, 
  Row, 
  Col,
  List,
  Card,
} from 'antd';
import { 
  getCountryAllTime, 
  getSongsAllTime, 
  getArtistsAllTime, 
  getGenresAllTime
} from '../../api';
import { FontTitle } from './Explore';
import styled from 'styled-components';

const { Option } = Select;

export const InfoCard = styled(Card)`
    width: 500px;
    background-color: #fe9fa3;
    border-radius: 40px;
`;

export const CountryCard = styled(Card)`
    width: 350px;
    background-color: #f4ccccff;
    border-radius: 40px;
`;

function AllTime() {

    const [country1, setCountry1] = useState("");
    const [country2, setCountry2] = useState("");
  
    const [country1Songs, setCountry1Songs] = useState([]);
    const [country2Songs, setCountry2Songs] = useState([]);
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topGenres, setTopGenres] = useState([]);

    useEffect(() => {
        async function setFields() {
            let song1 = await getCountryAllTime(country1);
            let song2 = await getCountryAllTime(country2);
            let topSongs = await getSongsAllTime(country1, country2);
            let topArtists = await getArtistsAllTime(country1, country2);
            let topGenres = await getGenresAllTime(country1, country2);
            setCountry1Songs(song1)
            setCountry2Songs(song2);
            setTopSongs(topSongs);
            setTopArtists(topArtists);
            setTopGenres(topGenres);
        }

      if (country1 !== "" && country2 !== "") {
        setFields();
      }
    }, [country1, country2]);
  
    return (
        <Col span={24}>
        <Row justify="center">
        <Space>
        <Select 
            defaultValue="Select First Country" 
            style={{ width: 240, marginBottom: '20px' }} 
            onChange={value => setCountry1(value)}>
          <Option value="Australia">Australia</Option>
          <Option value="Brazil">Brazil</Option>
          <Option value="India">India</Option>
          <Option value="Indonesia">Indonesia</Option>
          <Option value="Japan">Japan</Option>
          <Option value="Russia">Russia</Option>
          <Option value="South Africa">South Africa</Option>
          <Option value="Spain">Spain</Option>
          <Option value="USA">United States</Option>
          <Option value="UK">United Kingdom</Option>
        </Select>
  
        <Select 
            defaultValue="Select Second Country" 
            style={{ width: 240, marginBottom: '20px' }} 
            onChange={value => setCountry2(value)}>
          <Option value="Australia">Australia</Option>
          <Option value="Brazil">Brazil</Option>
          <Option value="India">India</Option>
          <Option value="Indonesia">Indonesia</Option>
          <Option value="Japan">Japan</Option>
          <Option value="Russia">Russia</Option>
          <Option value="South Africa">South Africa</Option>
          <Option value="Spain">Spain</Option>
          <Option value="USA">United States</Option>
          <Option value="UK">United Kingdom</Option>
        </Select>

      </Space>
        </Row>
        {country1 && country2 &&
        <Row>
        <Space align="start">
          <Col> 
            <CountryCard>
                <List 
                size="large"
                header={<div><FontTitle level={3} style={{ color: '#595959' }}>Top Songs in {country1}</FontTitle></div>}
                borderless
                dataSource={country1Songs}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b><a style={{color: '#652600'}} href={item.url}>{item.song_name}</a></b> by {item.artist}</List.Item>}/>
            </CountryCard>
          </Col>
          <Col>
            <CountryCard>
            <List 
                size="large"
                header={<div><FontTitle level={3} style={{ color: '#595959' }}>Top Songs in {country2}</FontTitle></div>}
                borderless
                dataSource={country2Songs}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b><a style={{color: '#652600'}} href={item.url}>{item.song_name}</a></b> by {item.artist}</List.Item>}/>
            </CountryCard>
          </Col>
          <Col >
        <Space direction="vertical">
            <InfoCard>
                <List
                size="large"
                header={<div><FontTitle level={2} style={{ color: '#595959' }}>Top Songs in Common</FontTitle></div>}
                borderless
                dataSource={topSongs}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b>{item.title}</b> by {item.artist}</List.Item>}
                />
            </InfoCard>
            <InfoCard>
                <List
                size="large"
                header={<div><FontTitle level={2} style={{ color: '#595959' }}>Top Artists in Common</FontTitle></div>}
                borderless
                dataSource={topArtists}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b>{item.artist}</b></List.Item>}
                />
            </InfoCard>
            <InfoCard>
                <List
                size="large"
                header={<div><FontTitle level={2} style={{ color: '#595959' }}>Top Genres in Common</FontTitle></div>}
                borderless
                dataSource={topGenres}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b>{item.genre}</b></List.Item>}
                />  
            </InfoCard>
         </Space>
          </Col>
          </Space>
          </Row>
        }
          </Col>
    )
  }

  export default AllTime;