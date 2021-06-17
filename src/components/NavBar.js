import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';

//const { Text } = Typography;

const NavBarButton = styled(Button)`
  color: black;
  padding-left: 1em;
  padding-right: 1em;
  :active {
    color: inherit;
  }
  :hover {
    color: #fe9fa3;
  }
`;

const ActiveNavBarButton = styled(NavBarButton)`
  color: #fe9fa3;
  font-weight: 500;
`;

// const Logo = styled(Image)`
//   width: 300px;
//   margin: 16px;
// `;

const NavBarContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 80px;
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: row-wrap;
  background-color: #f4ccccff;
`;

function NavBar() {
  const history = useHistory();
  const location = useLocation();
  const links = {
    Home: '/',
    Explore: '/explore',
    Data: '/data',
    Team: '/team'
  };

  return (
    <>
      <NavBarContainer>
          <Row justify="center" align="middle">
            <Col>
              <Row justify="space-between">
                {Object.entries(links).map(([link, path], i) => (
                  <Col key={i}>
                    {path === location.pathname ? (
                      <ActiveNavBarButton
                        type="link"
                        onClick={() => {
                          history.push(path);
                        }}
                      >
                        {link}
                      </ActiveNavBarButton>
                    ) : (
                      <NavBarButton
                        tab-index="0"
                        type="link"
                        onClick={() => {
                          history.push(path);
                        }}
                      >
                        {link}
                      </NavBarButton>
                    )}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
      </NavBarContainer>
    </>
  );
};


export default NavBar;