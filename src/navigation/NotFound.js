import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { notfound, snap, error } from 'src/assets/images';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FourOFour = styled.img`
  height: 500px;
  width: 100%;

  @media only screen and (max-width: 996px) {
    height: 400px;
  }
`;
const OhSnap = styled.img`
  height: 125px;
  width: 100%;
`;
const Error404 = styled.img`
  height: 125px;
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  height: 59.7px;
  margin: 15.9px 0px 31.7px 0px;
  background-color: #f0f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: PoppinsRegular;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.61;
  letter-spacing: 0.54px;
  color: #464646;
`;

const LinkWrapper = styled.div`
  max-width: 250px;
  min-width: 250px
  width: 100%;
  margin-left: 75px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 520px) {
    margin-left: unset;
    padding: 0px 10px;
    max-width: unset;
  }
`;

const Links = styled(Link)`
  font-family: PoppinsRegular;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.61;
  letter-spacing: 0.54px;
  text-align: left;
  color: #1f4bb1;
  text-decoration: underline;
`;

const ContentContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 996px) {
    margin: 3.45rem 0;
  }
`;

const ImageContainer = styled.div`
  padding: 1.45rem 0;
`;
const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <ContentContainer>
          <OhSnap src={snap} />
          <Error404 src={error} />
          <Content>
            <Text>Page not found</Text>
          </Content>
          <LinkWrapper>
            <Links to="#">Reload</Links>
            <Links to="/">Go to homepage</Links>
          </LinkWrapper>
        </ContentContainer>
        <ImageContainer>
          <FourOFour src={notfound} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
