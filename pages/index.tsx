import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'src/store';
import { INIT } from 'src/store/category';
import { PaletteType } from 'src/types';

const Main = ({ categoryData, ddangData }: PaletteType): JSX.Element => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state: StoreState) => state.category);

  useEffect(() => {
    !categoryState && dispatch({ type: INIT, payload: { data: categoryData } });
  }, []);

  console.log('categoryData: ', categoryData);
  console.log('ddangData: ', ddangData);

  return <div>메인 페이지 입니다!</div>;
};

export async function getServerSideProps() {
  const { conCategory1s: categoryData } = await (
    await fetch(`${process.env.BASE_URL}api/category`)
  ).json();

  const { conItems: ddangData } = await (
    await fetch(`${process.env.BASE_URL}api/ddang`)
  ).json();

  return {
    props: {
      categoryData,
      ddangData,
    },
  };
}

export default Main;
