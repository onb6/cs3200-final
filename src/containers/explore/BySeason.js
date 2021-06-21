import React, { useEffect, useState } from 'react';
import { 
  Row, 
  Col,
  Select,
  Space, 
  List, 
} from 'antd';
import { 
  getCountryBySeason, 
  getSongsBySeason, 
  getArtistsBySeason,
  getGenresBySeason, 
} from '../../api';
import { InfoCard, CountryCard } from './AllTime';
import { FontTitle } from './Explore';

const { Option } = Select;

function BySeason() {

    const [country1, setCountry1] = useState("");
    const [country2, setCountry2] = useState("");
    const [year, setYear] = useState("");
    const [season, setSeason] = useState("");
  
    const [country1Songs, setCountry1Songs] = useState([]);
    const [country2Songs, setCountry2Songs] = useState([]);
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const [topGenres, setTopGenres] = useState([]);
  
    useEffect(() => {
        async function setFields() {
            let song1 = await getCountryBySeason(country1, year, season);
            let song2 = await getCountryBySeason(country2, year, season);
            let topSongs = await getSongsBySeason(country1, country2, year, season);
            let topArtists = await getArtistsBySeason(country1, country2, year, season);
            let topGenres = await getGenresBySeason(country1, country2, year, season);
            setCountry1Songs(song1)
            setCountry2Songs(song2);
            setTopSongs(topSongs);
            setTopArtists(topArtists);
            setTopGenres(topGenres);
        }

      if (country1 !== "" && country2 !== "") {
        setFields();
      }
    }, [country1, country2, year, season]);

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
  
        <Select 
            defaultValue="Select Year" 
            style={{ width: 200, marginBottom: '20px' }} 
            onChange={value => setYear(value)}>
          <Option value="2021">2021</Option>
          <Option value="2020">2020</Option>
          <Option value="2019">2019</Option>
          <Option value="2018">2018</Option>
          <Option value="2017">2017</Option>
        </Select>
  
        <Select 
            defaultValue="Select Season" 
            style={{ width: 200, marginBottom: '20px' }} 
            onChange={value => setSeason(value)}>
          <Option value="summer">Summer</Option>
          <Option value="winter">Winter</Option>
        </Select> 
        </Space>
        </Row>
        {country1 && country2 && year && season &&
        <Row>
        <Space align="start">
        <Col > 
            <CountryCard>
                <List 
                size="large"
                header={<div><FontTitle level={3} style={{ color: '#595959' }}>Top Songs in {country1}</FontTitle></div>}
                borderless
                dataSource={country1Songs}
                renderItem={item => <List.Item style={{ color: '#652600'}}><b><a style={{color: '#652600'}} href={item.url}>{item.song_name}</a></b> by {item.artist}</List.Item>}/>
            </CountryCard>
          </Col>
          <Col >
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
              renderItem={item => <List.Item style={{ color: '#652600'}}><strong>{item.title}</strong> by {item.artist}</List.Item>}
            />
          </InfoCard>
          <InfoCard>
          <List
              size="large"
              header={<div><FontTitle level={2} style={{ color: '#595959' }}>Top Artists in Common</FontTitle></div>}
              borderless
              dataSource={topArtists}
              renderItem={item => <List.Item style={{ color: '#652600'}}><strong>{item.artist}</strong></List.Item>}
            />
          </InfoCard>
          <InfoCard>
            <List
              size="large"
              header={<div><FontTitle level={2} style={{ color: '#595959' }}>Top Genres in Common</FontTitle></div>}
              borderless
              dataSource={topGenres}
              renderItem={item => <List.Item style={{ color: '#652600'}}><strong>{item.genre}</strong></List.Item>}
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
  
export default BySeason;