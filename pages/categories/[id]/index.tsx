import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BrandsCategory from 'src/components/brandsCategory';
import Category from 'src/components/category';
import { Col, Row } from 'src/components/common';
import Header from 'src/components/Header';
import { BC, C, FS, FW } from 'src/constants';
import { StoreState } from 'src/store';
import { ObjStringStyle } from 'src/types';
import styled from 'styled-components';
import CategoriesHeader from './CategoriesHeader';

const Text = styled.span`
  ${(props: { active: boolean }) =>
    props.active
      ? {
          ...C.POINTRED,
          ...FS.EXPLAIN,
        }
      : {
          ...C.BLACK,
          ...FW.SMALL,
          ...FS.EXPLAIN,
        }}
  margin-right: 13px;
  cursor: pointer;
`;

const Categories = (props) => {
  const router = useRouter();
  const { data } = router.query;
  const [categoryData, setCategoryData] = useState<ObjStringStyle[] | []>([]);
  const [brandData, setBrandData] = useState();

  const getApi = async () => {
    const {
      data: {
        conCategory1: { conCategory2s: getData },
      },
    } = await axios.get(
      `https://api2.ncnc.app/con-category1s/${router.query.id}/nested`
    );
    setBrandData(getData);
  };

  useEffect(() => {
    if (data) {
      if (Array.isArray(JSON.parse(data as string))) {
        setCategoryData(JSON.parse(data as string));
      }
      getApi();
    } else {
      router.push('/');
    }
  }, [data]);

  return (
    <Col sx={{ width: '100%', ...BC.GRAY, height: '100vh' }}>
      <Col
        sx={{
          width: '375px',
          margin: '0 auto',
          ...BC.LIGHTGRAY,
          padding: '0 0 50px 0',
        }}
      >
        <Row
          sx={{ ...BC.WHITE, width: '375px', height: '30px', margin: '0 auto' }}
        />
        <Col>
          <CategoriesHeader imageUrl="/images/back.svg" text="카페" />
        </Col>
        <Row
          sx={{
            ...BC.WHITE,
            width: '375px',
            margin: '0 auto',
            padding: '0px 4px 0px 17px',
            whiteSpace: 'nowrap',
            overflowX: 'hidden',
            height: '40px',
            alignItems: 'center',
            borderBottom: '1px solid #F1F3F4',
          }}
        >
          {brandData &&
            categoryData?.map((el: ObjStringStyle, idx: number) => (
              <Link
                key={el.id}
                href={{
                  pathname: `/categories/${el.id}`,
                  query: {
                    data: JSON.stringify(
                      categoryData[Number(router.query.idx)]
                    ),
                    idx,
                  },
                }}
                as={`/categories/${el.id}`}
              >
                <a>
                  <Text
                    active={el.id === categoryData[Number(router.query.idx)].id}
                  >
                    {el.name}
                  </Text>
                </a>
              </Link>
            ))}
        </Row>
        <Col sx={{ width: '375px', margin: '0 auto' }}>
          <BrandsCategory categoryData={brandData} />
        </Col>
      </Col>
    </Col>
  );
};

<<<<<<< HEAD
=======
export async function getServerSideProps() {
  const {
    data: { conCategory1s: brandData },
  } = await axios.get(
    'https://api2.ncnc.app/con-category1s/$conCategory1Id/nested'
  );
  return {
    props: {
      brandData,
    },
  };
}

>>>>>>> 645d0336520b2005ad65feb11d2536145dbf5961
export default Categories;
