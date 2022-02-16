import { useSelector } from 'react-redux';
import { BC, C, FS, FW } from 'src/constants';
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
        <Col sx={{ paddingBottom: '100px' }}>
          <Text
            sx={{
              ...FS.EXPLAIN,
              ...FW.SMALL,
              ...BC.LIGHTGRAY,
              height: '49px',
              padding: '17px 0 16px 17px',
            }}
          >
            옵션 선택하기
          </Text>

          {props.data.options.map((el: ObjStringStyle, idx: number) => (
            <Row key={idx} sx={{ alignItems: 'center' }}>
              <Col
                sx={{
                  height: '61px',
                  padding: '12px 0 12px 17px',
                  marginRight: '10px',
                }}
              >
                <Text
                  sx={{
                    ...FS.ICON,
                    ...C.LIGHTGRAY,
                    ...BC.WHITE,
                    marginBottom: '5px',
                  }}
                >
                  유효기간
                </Text>
                <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY, ...BC.WHITE }}>
                  할인가
                </Text>
              </Col>
              <Col sx={{ justifyContent: 'center', marginRight: '60px' }}>
                <Text sx={{ ...FS.TITLE, marginBottom: '5px' }}>
                  {formatDate(el.expireAt)}
                </Text>
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
