import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';

const Wrapper = styled.div`
  background-color: red;
`;

const Main = (): JSX.Element => {
  const modalState = useSelector((state: RootState) => state.modal);
  console.log(modalState);
  return <Wrapper>asdasda</Wrapper>;
};
export default Main;
