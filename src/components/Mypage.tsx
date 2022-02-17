import { useRouter } from 'next/router';
import { BC, C, FS, FW } from 'src/constants';
import { Col, Img, Row, Text } from './common';

const Mypage = () => {
  const router = useRouter();
  return (
    <Col sx={{ width: '100%', ...BC.GRAY }}>
      <Col sx={{ width: '375px', margin: '0 auto', ...BC.LIGHTGRAY }}>
        <Row
          sx={{
            width: '375px',
            height: '50px',
            ...BC.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <Text
            sx={{
              ...FW.BIG,
              ...FS.TITLE,
              ...C.BLACK,
              height: '26px',
              width: '100px',
              textAlign: 'center',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              ...BC.WHITE,
            }}
          >
            마이페이지
          </Text>
        </Row>
        <Row
          sx={{
            padding: '16px 17px 16px 17px',
            justifyContent: 'space-between',
            width: '375px',
            ...BC.WHITE,
            marginBottom: '10px',
          }}
        >
          <Text sx={{ ...FW.SMALL, ...FS.TITLE, ...C.BLACK }}>고객센터</Text>
          <Img
            src="/images/Enter.svg"
            alt="enter"
            sx={{ cursor: 'pointer' }}
            onClick={() => router.push('/qas')}
          />
        </Row>
      </Col>
      <Col sx={{ ...BC.WHITE, height: '100vh' }} />
    </Col>
  );
};

export default Mypage;
