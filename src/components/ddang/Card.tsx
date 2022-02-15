import { BC, C, FS, FW } from 'src/constants';
import { Col, Img, Row, Text } from '../common';

const Card = ({ data }: any): JSX.Element => {
  return (
    <Row
      sx={{
        ...BC.WHITE,
        padding: '12px 0 16.5px 21px',
        borderBottom: `1px solid #F1F3F4`,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Img
        src={data.imageUrl as string}
        alt="ddang-icon"
        sx={{ width: '70px', height: '70px', marginRight: '17px' }}
      />
      <Col>
        <Text sx={{ ...FS.EXPLAIN, ...C.LIGHTGRAY, marginBottom: '7px' }}>
          {data.conCategory2.name}
        </Text>
        <Text sx={{ ...FS.HEAD, marginBottom: '13px' }}>{data.name}</Text>
        <Row sx={{ alignItems: 'center' }}>
          <Text
            sx={{ ...FS.HEAD, ...C.POINTRED, marginRight: '9px' }}
          >{`${data.discountRate}%`}</Text>
          <Text sx={{ ...FS.HEAD, ...FW.SMALL, marginRight: '6px' }}>
            {`${data.ncSellingPrice.toLocaleString()}원`}
          </Text>
          <Text
            sx={{
              ...FS.EXPLAIN,
              ...C.LIGHTGREY,
              textDecoration: 'line-through',
            }}
          >
            {`${data.originalPrice.toLocaleString()}원`}
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
