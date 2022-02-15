import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BrandsCategory from 'src/components/brandsCategory';
import Category from 'src/components/category';
import { Col, Row } from 'src/components/common';
import Header from 'src/components/Header';
import { BC, C, FS, FW } from 'src/constants';
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

  useEffect(() => {
    if (data) {
      setCategoryData(JSON.parse(data as string));
    } else {
      router.push('/');
    }
    setBrandData(props.brandData);
  }, []);
  console.log(brandData);

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
          {categoryData?.map((el: ObjStringStyle, idx: number) => (
            <Link
              key={el.id}
              href={{
                pathname: `/categories/${el.id}`,
                query: {
                  data: JSON.stringify(categoryData[Number(router.query.idx)]),
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

export async function getServerSideProps() {
  const {
    data: { conCategory1s: brandData },
  } = await axios.get(`${process.env.BASE_URL}/api/brand`);
  return {
    props: {
      brandData,
    },
  };
}

export default Categories;
