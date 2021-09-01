import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import { AddressTable } from '.';
import classNames from 'classnames';

const Wrapper = styled.div`
  border-top: 4px solid #1f4bb1;
  background-color: ${colors.white};
  min-height: 500px;
`;

const CustomNav = styled(Nav)`
  padding-left: 16px;
`;

const NavLinkExp = styled(NavLink)`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
  color: #1f4bb1 !important;
  border-bottom: 2px solid transparent !important;
  padding: 14px 0px;
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
const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Wrapper>
      <CustomNav tabs>
        <NavItem>
          <NavLinkExp
            className={classNames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Transactions
          </NavLinkExp>
        </NavItem>
      </CustomNav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AddressTable />
        </TabPane>
      </TabContent>
    </Wrapper>
  );
};

export default TabsSection;
