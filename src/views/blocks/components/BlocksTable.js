import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  NoData,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableLoader
} from 'src/components';
import { UncontrolledTooltip } from 'reactstrap';
import { useMediaQuery } from 'src/hooks';
import { getAllBlocks } from 'src/redux/actions';
import styled from 'styled-components';
import moment from 'moment';
import history from '../../../utils/history';
import queryString from 'query-string';
const Wrapper = styled.div`
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: row;
  justify-content: space-between;
  padding: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const Text = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.36px;
  text-align: left;
`;
const Tooltip = styled(UncontrolledTooltip)`
  .tooltip-inner {
    font-size: 12px !important;
    font-family: PoppinsRegular;
    background-color: #000;
  }
`;

const LinkText = styled(Link)`
  color: #1f4bb1;
  &:hover {
    color: #1f4bb1;
`;

const TableHeaderRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;

  :hover {
    background-color: unset !important;
    border-left: 3px solid #1f4bb1;
  }
`;

const HeadeingContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const BlocksTable = (props) => {
  const matches = useMediaQuery('(min-width:996px)');
  const dispatch = useDispatch();

  // const supply = useSelector((state) => state.supply.totalSupply);
  const { location } = props;
  const { page = 1, limit = 10 } = queryString.parse(location.search);
  const [state, setState] = useState({ limit: limit, currentPage: page - 1 });
  const { allBlocks, allBlocksLoading } = useSelector((state) => state.blocks);

  const pageHandler = (e, index) => {
    e.preventDefault();

    history.push(`/blocks?page=${index}&&limit=${state.limit}`);

    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > allBlocks.data.total_count) {
      totalCount = allBlocks.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
    history.push(`/blocks?page=${currentPage}&&limit=${limit}`);
  };
  useEffect(() => {
    const { location } = props;
    const { page = 1, limit = 10 } = queryString.parse(location.search);
    console.log(location.search, 'chking');
    const filter = {
      page: page - 1,
      limit: limit
    };
    dispatch(getAllBlocks(filter));
  }, [page, limit]);

  return (
    <Wrapper>
      <Header>
        <HeadeingContainer>
          <Heading>All Blocks</Heading>

          {allBlocks && allBlocks.data.blocks.length >= 1 ? (
            <Text>
              Block #{allBlocks.data.blocks[0].block_meta.header.height} to #
              {
                allBlocks.data.blocks[allBlocks.data.blocks.length - 1]
                  .block_meta.header.height
              }{' '}
              ( Total of {allBlocks.data.blocks.length} blocks)
            </Text>
          ) : (
            <Text>Total of 0 blocks</Text>
          )}
        </HeadeingContainer>
        {allBlocks && allBlocks.data.blocks.length >= 1 ? (
          <>
            {matches && (
              <Pagination
                pageHandler={pageHandler}
                changeLimit={changeLimit}
                limit={limit}
                count={allBlocks && allBlocks.data.total_count}
                currentPage={page - 1}
              />
            )}
          </>
        ) : (
          ''
        )}
      </Header>

      <Table hover>
        <TableHead>
          <TableHeaderRow>
            <TableHeading>Height</TableHeading>
            <TableHeading>Block Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Txs</TableHeading>
            <TableHeading>Proposer</TableHeading>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {allBlocks &&
            !allBlocksLoading &&
            allBlocks.data.blocks.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <LinkText
                    to={`/blocks/${item.block_meta.header.height}`}
                    id={`height_exp_alpha${index}`}>
                    {item.block_meta.header.height}
                  </LinkText>
                  <Tooltip
                    placement="right"
                    target={`height_exp_alpha${index}`}>
                    view block by height!
                  </Tooltip>
                </TableCell>
                <TableCell>{item.block_meta.block_id.hash}</TableCell>
                <TableCell>
                  {moment(item.block_meta.header.time).fromNow()}
                </TableCell>
                <TableCell>{item.block_meta.header.num_txs}</TableCell>
                <TableCell>{item.block_meta.header.proposer_address}</TableCell>
              </TableRow>
            ))}

          {!allBlocksLoading && !allBlocks && (
            <NoData colSpan={6} height={360} />
          )}
          {allBlocksLoading && <TableLoader colSpan={6} height={360} />}
        </TableBody>
      </Table>
      {allBlocks && allBlocks.data.blocks.length >= 1 ? (
        <Footer>
          {' '}
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={allBlocks && allBlocks.data.total_count}
            limit={limit}
            currentPage={page - 1}
          />
        </Footer>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default withRouter(BlocksTable);
