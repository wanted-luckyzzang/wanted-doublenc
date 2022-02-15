import { C, FS } from 'src/constants';
import { Root2 } from 'src/types';
import { Col, Text } from '../common';

const Faq = (props: { data: Root2 }): JSX.Element => {
  const parsing = props.data.warning.split('\n');
  const part1 = [...parsing.slice(1, 4), ...parsing.slice(6, 7)];
  const part2 = parsing.slice(-2);

  return (
    <Col>
      <div>
        <Text sx={{ ...FS.EXPLAIN }}>유의사항</Text>
      </div>
      <div>
        {part1.map((e, idx) => {
          return (
            <div key={idx}>
              <Text>·</Text>
              <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>{e.substring(3)}</Text>
            </div>
          );
        })}
      </div>
      <div>
        <Text sx={{ ...FS.EXPLAIN }}>환불규정</Text>
      </div>
      <div>
        {part2.map((e, idx) => {
          return (
            <div key={idx}>
              <Text>·</Text>
              <Text sx={{ ...FS.ICON, ...C.LIGHTGRAY }}>{e.substring(3)}</Text>
            </div>
          );
        })}
      </div>
    </Col>
  );
};

export default Faq;
