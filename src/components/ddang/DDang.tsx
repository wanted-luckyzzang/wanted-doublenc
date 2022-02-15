import { useRouter } from 'next/router';
import { Root } from 'src/types';
import { Col } from '../common';
import Card from './Card';
import MenuTitle from './MenuTitle';

const DDang = (props: { data: Root }): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <MenuTitle />
      {props.data.map((el) => (
        <Col key={el.id} onClick={() => router.push(`/items/${el.id}`)}>
          <Card data={el} />
        </Col>
      ))}
    </>
  );
};

export default DDang;
