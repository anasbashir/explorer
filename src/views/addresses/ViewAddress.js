import React, { useEffect } from 'react';
import { PageContainer } from 'src/components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { AddressInfo, TabsSection } from './components';
// import { Alert, Badge } from 'reactstrap';
import {
  useDispatch
  // , useSelector
} from 'react-redux';
import { getAccountDetails } from 'src/redux/actions';
import { Copy } from 'src/components';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
const containerStyles = { paddingTop: 0, boxShadow: 'none' };

// const SubHeading = styled.h6`
//   color: ${colors.black10Alpha};
//   font-family: PoppinsMedium;
//   font-size: 15px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.33;
//   margin-bottom: 10px;
//   display: flex;
// `;
const SubHeading = styled.div`
  display: inline-block;
`;
const Icon = styled.h6`
  color: ${colors.black10Alpha};
  border: 1px solid ${colors.chipColor};
  background-color: ${colors.chipColor};
  font-family: PoppinsMedium;
  font-size: 12px;
  padding: 0px 15px;
  display: flex;
  line-height: 2;

  margin-bottom: 10px;
  width: auto;
  border-radius: 6px;
  @media (max-width: 576px) {
    width: auto !important;
    font-size: 2.5vw;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: 0.6px;
  text-align: left;
  color: #1f4bb1;
  margin: 2rem 0 1rem 0px;
  font-family: PoppinsMedium;
`;

const ViewAddress = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountDetails(address));
  }, [props.match.params]);
  const { address } = props.match.params;

  return (
    // <PageContainer style={containerStyles}>
    <Container>
      <Heading>Address</Heading>
      <SubHeading>
        <Icon>
          {address}
          <Copy id="address-copy" value={address} />
        </Icon>
      </SubHeading>
      <AddressInfo />
      <TabsSection />
    </Container>
    // </PageContainer>
  );
};

export default withRouter(ViewAddress);
