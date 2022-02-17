import axios from 'axios';
import Link from 'next/link';
import { Col, Img, Row, Text } from 'src/components/common';
import { BC, C, FS, FW, IS } from 'src/constants';
import styled from 'styled-components';

const Qas = (props) => {
  return (
    <Col sx={{ width: '100%', ...BC.GRAY }}>
      <Col
        sx={{
          ...BC.WHITE,
          width: '375px',
          margin: '0 auto',
        }}
      >
        <Col
          sx={{
            marginLeft: '17px',
            marginRight: '17px',
            height: '165px',
            marginBottom: '5px',
          }}
        >
          <Row sx={{ ...BC.WHITE, height: '20px' }} />
          <Row
            sx={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Text></Text>
            <Text sx={{ ...FW.BIG, ...FS.EXPLAIN, ...C.BLACK }}>고객센터</Text>
            <Link
              href={{
                pathname: '/',
              }}
              as={'/'}
            >
              <a>
                <Img
                  src="/images/close.svg"
                  alt="close"
                  sx={{ ...IS.BIGMENU, cursor: 'pointer' }}
                />
              </a>
            </Link>
          </Row>
          <Row sx={{ ...BC.WHITE, height: '30px' }} />
          <Row>
            <Text
              sx={{ ...FW.SMALL, ...FS.HEAD, ...C.BLACK, marginBottom: '5px' }}
            >
              상담시간 안내
            </Text>
          </Row>

          <Text
            sx={{ ...FW.SMALL, ...FS.EXPLAIN, ...C.BLACK, marginBottom: '5px' }}
          >
            평일 10:00 ~ 18:00
          </Text>
          <Text sx={{ ...FS.EXPLAIN, ...C.LIGHTGRAY }}>
            점심시간 12:30 ~ 13:30 /토 일 공휴일 휴무
          </Text>
        </Col>

        <Col>
          <Row sx={{ padding: '16px 0 15px 17px' }}>
            <Text sx={{ ...FW.SMALL, ...FS.HEAD, ...C.BLACK }}>
              자주 묻는 질문
            </Text>
          </Row>
          <Row
            sx={{
              padding: '0 17px 0 17px',
              borderBottom: '1px solid #c4c4c4',
              marginBottom: '5px',
            }}
          >
            <BuyWrapper>
              <BuyText>구매</BuyText>
            </BuyWrapper>
            <SellWrapper>
              <SellText>판매</SellText>
            </SellWrapper>
          </Row>
        </Col>
      </Col>
    </Col>
  );
};

const BuyWrapper = styled.div`
  cursor: pointer;
  height: 25px;
  width: 170px;
  text-align: center;
  border: none;
`;

const SellWrapper = styled.div`
  cursor: pointer;
  height: 25px;
  width: 170px;
  text-align: center;
  border: none;
`;

const BuyText = styled.span``;

const SellText = styled.span``;
export default Qas;

export async function getServerSideProps() {
  const { data: data } = await axios.get('https://api2.ncnc.app/qa-types');
  return {
    props: {
      data,
    },
  };
}
