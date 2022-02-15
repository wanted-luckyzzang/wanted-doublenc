import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { StoreState } from 'src/store';
import styled from 'styled-components';
import { Col } from '../common';
import Card from './Card';

export const Category = () => {
  const categoryState = useSelector((state: StoreState) => state.category);
  const router = useRouter();

  return (
    <Wrapper>
      {categoryState?.data.map(({ imageUrl, name, id }) => (
        <Col key={id} onClick={() => router.push(`/categories/${id}`)}>
          <Card imgUrl={imageUrl} name={name} />
        </Col>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 375px;
  flex-wrap: wrap;
  margin-top: 16px;
`;
