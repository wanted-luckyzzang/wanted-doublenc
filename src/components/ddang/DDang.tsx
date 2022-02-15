import Link from 'next/link';
import { Root } from 'src/types';
import Card from './Card';
import MenuTitle from './MenuTitle';

const DDang = (props: { data: Root }): JSX.Element => {
  return (
    <>
      <MenuTitle />
      {props.data.map((el) => (
        <Link
          key={el.id}
          href={{
            pathname: `/items/${el.id}`,
            query: { data: JSON.stringify(props.data) },
          }}
          as={`/items/${el.id}`}
        >
          <a>
            <Card data={el} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default DDang;
