import React from 'react';
import ContentContainer from '../components/ContentContainer';
import { Typography, Button } from 'antd';
import { getArtists, getGenres, getCountries, getSongs } from '../api';

const { Title } = Typography;

function Explore() {

  return (
    <ContentContainer>
        <Title>Explore</Title>
        <Button onClick={() => getArtists()}>Get Artists</Button>
        <Button onClick={() => getGenres()}>Get Genres</Button>
        <Button onClick={() => getCountries()}>Get Countries</Button>
        <Button onClick={() => getSongs()}>Get Songs</Button>
    </ContentContainer>
  );
}

export default Explore;
