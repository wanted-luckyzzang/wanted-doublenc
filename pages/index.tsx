import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Row from 'src/components/common/Row';
import { C, FS, FW, IS } from 'src/constants';
import { RootState } from 'src/store';

const Wrapper = styled.div`
  background-color: red;
`;

const Main = (): JSX.Element => {
  const modalState = useSelector((state: RootState) => state.modal);
  console.log(modalState);
  return <Row sx={{ ...IS.BIGMENU }}>asdasda</Row>;
};
export default Main;
