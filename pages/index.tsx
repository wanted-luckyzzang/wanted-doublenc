import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Category } from 'src/components/category/Category';
import { INIT } from 'src/store/category';
import { PaletteType } from 'src/types';

const Main = ({ categoryData, ddangData }: PaletteType): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INIT, payload: { data: categoryData } });
  }, []);

  return (
    <>
      <div>메인 페이지 입니다!</div>
      <Category />
    </>
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
