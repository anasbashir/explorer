import React, { useState } from 'react';
import { PageContainer } from 'src/components';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import Overview from './components/Overview';
// import Comments from './components/Comments';

const NavLinkExp = styled(NavLink)`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
  color: #000000;
  border-bottom: 2px solid transparent !important;
  &.active {
    border-bottom-color: ${colors.primary} !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    border-bottom-color: ${colors.primary} !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    color: #1f4bb1;
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.6px;
  text-align: left;
  color: #1f4bb1;
  font-family: PoppinsMedium;
  padding: 16px 16px 20px;
`;

const CustomNav = styled(Nav)`
  background-color: #f0f4ff;
  padding-left: 16px;
  border-top: 1px solid #dee2e6;
`;

const CustomNavLinkExp = styled(NavLinkExp)`
  background-color: #f0f4ff !important;
  color: #1f4bb1 !important ;
  font-size: 12px;
  font-weight: 600;
  font-family: PoppinsBold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  padding: 14px 0px;
`;

const ViewBlock = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <PageContainer heading="">
      <Heading>Block Details</Heading>
      <CustomNav tabs>
        <NavItem>
          <CustomNavLinkExp
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Overview
          </CustomNavLinkExp>
        </NavItem>
        {/* <NavItem>
          <NavLinkExp
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            Comments
          </NavLinkExp>
        </NavItem> */}
      </CustomNav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Overview />
        </TabPane>
        {/* <TabPane tabId="2">
          <Comments />
        </TabPane> */}
      </TabContent>
    </PageContainer>
  );
};

export default ViewBlock;
