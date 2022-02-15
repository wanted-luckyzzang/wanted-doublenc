import { useSelector } from 'react-redux';
import { StoreState } from 'src/store';
import styled from 'styled-components';
import Card from './Card';

export const Category = () => {
  const categoryState = useSelector((state: StoreState) => state.category);

  return (
    <Wrapper>
      {categoryState?.data.map(({ imageUrl, name }) => (
        <Card imgUrl={imageUrl} name={name} />
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
