import { BC, C, FS, FW } from 'src/constants';
import { Root2 } from 'src/types';
import { Col, Img, Row, Text } from '../common';

const Card = (props: { data: Root2 }): JSX.Element => {
  return (
    <Row
      sx={{
        ...BC.WHITE,
        padding: '12px 0 16.5px 21px',
        borderTop: `1px solid #F1F3F4`,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Img
        src={props.data.imageUrl as string}
        alt="ddang-icon"
        sx={{ width: '70px', height: '70px', marginRight: '17px' }}
      />
      <Col>
        <Text sx={{ ...FS.EXPLAIN, ...C.LIGHTGRAY, marginBottom: '7px' }}>
          {props.data.conCategory2.name}
        </Text>
        <Text sx={{ ...FS.HEAD, marginBottom: '13px' }}>{props.data.name}</Text>
        <Row sx={{ alignItems: 'center' }}>
          <Text
            sx={{ ...FS.HEAD, ...C.POINTRED, marginRight: '9px' }}
          >{`${props.data.discountRate}%`}</Text>
          <Text sx={{ ...FS.HEAD, ...FW.SMALL, marginRight: '6px' }}>
            {`${props.data.ncSellingPrice.toLocaleString()}원`}
          </Text>
          <Text
            sx={{
              ...FS.EXPLAIN,
              ...C.LIGHTGREY,
              textDecoration: 'line-through',
            }}
          >
            {`${props.data.originalPrice.toLocaleString()}원`}
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
