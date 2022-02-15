import { useSelector } from 'react-redux';
import { BC, FS, FW } from 'src/constants';
import { ObjStringStyle } from 'src/types';
import { Col, Img, Text } from '../common';

export const Card = (props: ObjStringStyle): JSX.Element => {
  return (
    <Col
      sx={{
        width: '112px',
        height: '93px',
        borderRadius: '7px',
        padding: '17px 38px 41px 38px',
        margin: '2px',
        cursor: 'pointer',
        ...BC.WHITE,
      }}
    >
      <Col
        sx={{
          alignItems: 'center',
        }}
      >
        <Img
          src={props.imgUrl}
          alt="category-icon"
          sx={{ width: '43px', height: '43px', ...BC.WHITE }}
        />
        <Text
          sx={{
            ...FS.ICON,
            ...FW.SMALL,
            ...BC.WHITE,
            width: 'max-content',
            marginTop: '10px',
          }}
        >
          {props.name}
        </Text>
      </Col>
    </Col>
  );
};

export default Card;
