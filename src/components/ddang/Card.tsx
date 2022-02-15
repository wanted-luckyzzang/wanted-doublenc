import { C, FS, FW } from 'src/constants';
import styled from 'styled-components';
import { Col, Img, Row, Text } from '../common';

const Card = ({ data }: any): JSX.Element => {
  // console.log('card', data);
  return (
    <Container>
      <Row>
        <div>
          <Img
            src={data.imageUrl as string}
            alt="ddang-icon"
            sx={{ width: '70px', height: '70px' }}
          />
        </div>
        <Col>
          <div>
            <Text sx={{ ...FS.EXPLAIN, ...C.LIGHTGRAY }}>
              {data.conCategory2.name}
            </Text>
          </div>
          <div>
            <Text sx={{ ...FS.HEAD }}>{data.name}</Text>
          </div>
          <Row>
            <div>
              <Text
                sx={{ ...FS.HEAD, ...C.POINTRED }}
              >{`${data.discountRate}%`}</Text>
            </div>
            <div>
              <Text sx={{ ...FS.HEAD, ...FW.SMALL }}>
                {`${data.ncSellingPrice.toLocaleString()}원`}
              </Text>
            </div>
            <div>
              <Text
                sx={{
                  ...FS.EXPLAIN,
                  ...C.LIGHTGREY,
                  textDecoration: 'line-through',
                }}
              >
                {`${data.originalPrice.toLocaleString()}원`}
              </Text>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;

const Container = styled.div``;
