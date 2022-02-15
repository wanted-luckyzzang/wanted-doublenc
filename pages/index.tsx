import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DDang from 'src/components/ddang/Ddang';
import { Category } from 'src/components/category/Category';
import { Col } from 'src/components/common';
import Header from 'src/components/Header';
import { BC } from 'src/constants';
import { INIT } from 'src/store/category';
import { PaletteType } from 'src/types';
import styled from 'styled-components';

const Main = ({ categoryData, ddangData }: PaletteType): JSX.Element => {
  const dispatch = useDispatch();
  console.log('main', ddangData);
  useEffect(() => {
    dispatch({ type: INIT, payload: { data: categoryData } });
  }, []);

  return (
    <>
      <div>메인 페이지 입니다!</div>
      <DDang data={ddangData} />
    </>
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
