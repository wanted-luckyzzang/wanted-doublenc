import { useDispatch, useSelector } from 'react-redux';
import { BC, C, FS, FW } from 'src/constants';
import { StoreState } from 'src/store';
import { modalClose, modalOpen } from 'src/store/modal';
import { Root2 } from 'src/types/ddangData';
import styled from 'styled-components';
import { Col, Row, Text } from '../common';

const Button = (props: { data: any }): JSX.Element => {
  const modalState = useSelector((state: StoreState) => state.modal);
  const dispatch = useDispatch();

  console.log('butttt', props.data.options);
  return (
    <Col
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: '0px',
        cursor: 'pointer',
      }}
      onClick={() => {
        console.log('click');
        modalState.value ? dispatch(modalClose()) : dispatch(modalOpen());
      }}
    >
      <Wrapper modal={modalState.value}>
        <Row
          sx={{
            height: '80px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text sx={{ ...FS.HEAD, ...FW.SMALL, ...C.WHITE }}>
            옵션 선택하기
          </Text>
        </Row>
      </Wrapper>
    </Col>
  );
};

const Wrapper = styled.div`
  background-color: ${(props: { modal: boolean }) =>
    props.modal ? '#CCCCCC' : '#FF5757'};
`;

export default Button;
