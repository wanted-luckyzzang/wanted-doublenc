import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from 'src/components/category/Category';
import { Col } from 'src/components/common';
import Header from 'src/components/Header';
import { BC } from 'src/constants';
import { INIT } from 'src/store/category';
import { PaletteType } from 'src/types';
import styled from 'styled-components';

const Main = ({ categoryData, ddangData }: PaletteType): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INIT, payload: { data: categoryData } });
  }, []);

  return (
    <Col sx={{ width: '100%', alignItems: 'center' }}>
      <Col
        sx={{
          width: '375px',
          ...BC.LIGHTGRAY,
        }}
      >
        <Header imageUrl="/images/hamberger.svg" text="니콘내콘" />
        <Category />
      </Col>
    </Col>
  );
};

export async function getServerSideProps() {
  const {
    data: { conCategory1s: categoryData },
  } = await axios.get(`${process.env.BASE_URL}api/category`);

  const { data: ddangData } = await axios.get(
    `${process.env.BASE_URL}api/ddang`
  );

  return {
    props: {
      categoryData,
      ddangData,
    },
  };
}

export default Main;
