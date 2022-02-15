import { FS, FW } from 'src/constants';
import { ObjStringStyle } from 'src/types';
import styled from 'styled-components';
import { Col, Img, Text } from '../common';

export const Card = (props: ObjStringStyle): JSX.Element => {
  return (
    <Container>
      <Col sx={{ alignItems: 'center' }}>
        <Img
          src={props.imgUrl}
          alt="category-icon"
          sx={{ width: '43px', height: '43px' }}
        />
        <Text
          sx={{
            ...FS.ICON,
            ...FW.SMALL,
            width: 'max-content',
            marginTop: '10px',
          }}
        >
          {props.name}
        </Text>
      </Col>
    </Container>
  );
};
const Container = styled.div`
  width: 112px;
  height: 93px;
  border-radius: 7px;
  padding: 17px 38px 41px 38px;
  box-sizing: border-box;
  margin: 2px;
`;
export default Card;
