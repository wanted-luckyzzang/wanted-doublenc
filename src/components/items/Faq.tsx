import { useSelector } from 'react-redux';
import { C, FS } from 'src/constants';
import { StoreState } from 'src/store';
import { Root2 } from 'src/types';
import styled from 'styled-components';
import { Col, Row, Text } from '../common';

const Faq = (props: { data: Root2 }): JSX.Element => {
  const parsing = props.data.warning.split('\n');
  const part1 = [...parsing.slice(1, 4), ...parsing.slice(6, 7)];
  const part2 = parsing.slice(-2);
  const modalState = useSelector((state: StoreState) => state.modal);

  return (
    <Wrapper modal={modalState.value}>
      <Row sx={{ marginBottom: '20px' }}>
        <Text sx={{ ...FS.EXPLAIN }}>유의사항</Text>
      </Row>
      <Col sx={{ marginBottom: '10px' }}>
        {part1.map((e, idx) => {
          return (
            <Row key={idx} sx={{ marginBottom: '10px' }}>
              <Text>·</Text>
              <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>{e.substring(3)}</Text>
            </Row>
          );
        })}
      </Col>
      <Row sx={{ marginBottom: '20px' }}>
        <Text sx={{ ...FS.EXPLAIN }}>환불규정</Text>
      </Row>
      <div>
        {part2.map((e, idx) => {
          return (
            <Row key={idx} sx={{ marginBottom: '10px' }}>
              <Text>·</Text>
              <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>{e.substring(3)}</Text>
            </Row>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 21px;
  background-color: ${(props: { modal: boolean }) =>
    !props.modal ? 'white' : '#CCCCCC'};
`;

export default Faq;
