import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import {
  Pagination as RsPagination,
  PaginationItem,
  PaginationLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DotsContainer = styled.div`
  margin-right: 7px;
  display: flex;
`;
const Dots = styled.span`
  width: 3px;
  height: 3px;
  margin: 13px 2px;
  background-color: #1f4bb1;
`;
const Link = styled(PaginationLink)`
  padding: 8px 11px 8px 11px;
  border: solid 0.3px #1f4bb1 !important;
  font-family: PoppinsRegular;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.27px;
  color: #1f4bb1;
  &:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none;
  }
  &:hover {
    z-index: 2;
    color: #fff;
    text-decoration: none;
    background-color: #1f4bb1;
    border-color: #1f4bb1;
  }
`;

const Item = styled(PaginationItem)`
  margin-right: 7px;
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);

  &.active .page-link {
    color: #fff !important;
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }

  .page-link {
    margin-left: unset !important;
    border-top-left-radius: unset !important;
    border-bottom-left-radius: unset !important;
    border-top-right-radius: unset !important;
    border-bottom-right-radius: unset !important;
  }
`;

const DropdownExp = styled(Dropdown)`
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);
  height: 31px;
  border: solid 0.3px #1f4bb1;
`;

const DropdownItemExp = styled(DropdownItem)`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.27px;
  text-align: left;
`;

const DropdownToggleExp = styled(DropdownToggle)`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.27px;
  text-align: left;
  background: none !important;
  line-height: 1.3;
  border: none;
  color: #1f4bb1 !important;
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
  &:hover {
    background: none;
  }
`;

const DropdownMenuExp = styled(DropdownMenu)`
  .dropdown-item.active,
  .dropdown-item:active {
    background-color: #f0f4ff;
    color: #1f4bb1;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: #f0f4ff;
  }
`;

const Pagination = ({
  count = 100,
  limit = 10,
  pageHandler,
  changeLimit,
  currentPage = 1
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const pagesCount = Math.ceil(count / limit);

  function paginationItem(index) {
    return (
      <Item active={index - 1 === currentPage} key={index}>
        <Link onClick={(e) => pageHandler(e, index)} href="#">
          {index}
        </Link>
      </Item>
    );
  }
  function dotsItem() {
    return (
      <DotsContainer key="">
        <Dots />
        <Dots />
        <Dots />
      </DotsContainer>
    );
  }

  function displayPagination() {
    let resultArray = [];
    if (pagesCount === 1) {
      resultArray.push(paginationItem(1));
    } else if (pagesCount < 8 && pagesCount > 1) {
      for (let i = 1; i <= pagesCount; i++) {
        resultArray.push(paginationItem(i));
      }
    } else if (pagesCount >= 8) {
      if (currentPage - 1 > 2 && currentPage + 2 < pagesCount - 1) {
        resultArray.push(
          paginationItem(1),
          dotsItem(),
          paginationItem(currentPage - 1),
          paginationItem(currentPage),
          paginationItem(currentPage + 1),
          paginationItem(currentPage + 2),
          dotsItem(),
          paginationItem(pagesCount)
        );
      } else if (currentPage <= 3) {
        resultArray.push(
          paginationItem(1),
          paginationItem(2),
          paginationItem(3),
          paginationItem(4),
          paginationItem(5),
          dotsItem(),
          paginationItem(pagesCount)
        );
      } else if (currentPage >= pagesCount - 3) {
        resultArray.push(
          paginationItem(1),
          dotsItem(),
          paginationItem(pagesCount - 4),
          paginationItem(pagesCount - 3),
          paginationItem(pagesCount - 2),
          paginationItem(pagesCount - 1),
          paginationItem(pagesCount)
        );
      }
    }
    return resultArray;
  }

  return (
    <Wrapper>
      <RsPagination aria-label="Page navigation ">
        <Item disabled={currentPage + 1 <= 1}>
          <Link
            onClick={(e) => pageHandler(e, currentPage)}
            previous
            href="#"
          />
        </Item>
        {pagesCount !== 0 ? displayPagination() : ''}
        <Item disabled={currentPage >= pagesCount - 1}>
          <Link
            onClick={(e) => pageHandler(e, currentPage + 2)}
            next
            href="#"
          />
        </Item>
      </RsPagination>
      {/* Temporary: i will be uncomment in future */}
      {pagesCount > 0
        ? displayPagination() && (
            <DropdownExp isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggleExp caret>{limit}/Page</DropdownToggleExp>
              <DropdownMenuExp>
                {[10, 20, 30, 40, 50].map((item, i) => (
                  <DropdownItemExp
                    key={i}
                    active={item === limit}
                    onClick={() => changeLimit(item)}>
                    {item}/pages
                  </DropdownItemExp>
                ))}
              </DropdownMenuExp>
            </DropdownExp>
          )
        : ''}
    </Wrapper>
  );
};

// Pagination.propTypes = {
//   count: PropTypes.number.isRequired,
//   limit: PropTypes.number.isRequired,
//   pageHandler: PropTypes.func.isRequired,
//   changeLimit: PropTypes.func.isRequired,
//   currentPage: PropTypes.number.isRequired
// };

export default Pagination;
