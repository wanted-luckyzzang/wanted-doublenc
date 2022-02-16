import { useSelector } from 'react-redux';
import { C, FS, FW } from 'src/constants';
import { StoreState } from 'src/store';
import { ObjStringStyle } from 'src/types';
import formatDate from 'src/utils/formatDate';
import styled from 'styled-components';
import { Col, Row, Text } from '../common';

const Modal = (props: { data: any }): JSX.Element => {
  const modalState = useSelector((state: StoreState) => state.modal);
  return (
    <>
      {!modalState.value ? (
        <Empty />
      ) : (
        <Col>
          <div>
            <Text sx={{ ...FS.EXPLAIN, ...FW.SMALL }}>옵션 선택하기</Text>
          </div>
          {props.data.options.map((el: ObjStringStyle, idx: number) => (
            <Row key={idx}>
              <Col>
                <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>유효기간</Text>
                <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>할인가</Text>
              </Col>
              <Col>
                <Text sx={{ ...FS.TITLE }}>{formatDate(el.expireAt)}</Text>
                <Text sx={{ ...FS.TITLE }}>
                  {`${el.sellingPrice.toLocaleString()}원`}
                </Text>
              </Col>
              <Row>
                <Text sx={{ ...FS.TITLE, ...C.POINTRED }}>
                  {`${el.count}%`}
                </Text>
              </Row>
            </Row>
          ))}
        </Col>
      )}
    </>
  );
};

const Empty = styled.div`
  height: 300px;
`;

export default Modal;
