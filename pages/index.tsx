import axios from 'axios';
import { useState } from 'react';
import { Category } from 'src/components/category/Category';
import { Col, Row } from 'src/components/common';
import DDang from 'src/components/ddang';
import Header from 'src/components/Header';
import Mypage from 'src/components/Mypage';
import SlickSlider from 'src/components/slickSlider';
import { BC } from 'src/constants';
import { ObjStringStyle, Root } from 'src/types';

interface MainProps {
  categoryData: ObjStringStyle[];
  ddangData: Root;
}

const Main = ({ categoryData, ddangData }: MainProps): JSX.Element => {
  const [myPageOpen, setMyPageOpen] = useState<boolean>(false);

  return (
    <Row>
      {myPageOpen ? (
        <Mypage />
      ) : (
        <Col sx={{ width: '100%', ...BC.GRAY }}>
          <Col
            sx={{
              width: '375px',
              margin: '0 auto',
              ...BC.LIGHTGRAY,
              overflow: 'hidden',
            }}
          >
            <Header
              imageUrl="/images/hamberger.svg"
              text="니콘내콘"
              setMyPageOpen={setMyPageOpen}
            />
            <SlickSlider />
            <Category categoryData={categoryData} />
            <DDang data={ddangData} />
          </Col>
        </Col>
      )}
    </Row>
  );
};

export async function getServerSideProps() {
  const {
    data: { conCategory1s: categoryData },
  } = await axios.get(`${process.env.BASE_URL}/api/category`);

  const {
    data: { conItems: ddangData },
  } = await axios.get(`${process.env.BASE_URL}/api/ddang`);
  return {
    props: {
      categoryData,
      ddangData,
    },
  };
}

export default Main;
