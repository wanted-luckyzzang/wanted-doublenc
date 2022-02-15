import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from 'src/components/category/Category';
import { Col } from 'src/components/common';
import DDang from 'src/components/ddang';
import Header from 'src/components/Header';
import SlickSlider from 'src/components/slickSlider';
import { BC } from 'src/constants';
import { INIT } from 'src/store/category';
import { PaletteType, Root } from 'src/types';
import styled from 'styled-components';

interface MainProps {
  categoryData: PaletteType;
  ddangData: Root;
}

const Main = ({ categoryData, ddangData }: MainProps): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: INIT, payload: { data: categoryData } });
  }, []);

  return (
    <Col sx={{ width: '100%', ...BC.GRAY }}>
      <Col sx={{ width: '375px', margin: '0 auto', ...BC.LIGHTGRAY }}>
        <Header imageUrl="/images/hamberger.svg" text="니콘내콘" />
        <SlickSlider />
        <Category />
        <DDang data={ddangData} />
      </Col>
    </Col>
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
