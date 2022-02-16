import Link from 'next/link';
import { ObjStringStyle, PaletteType } from 'src/types';
import { Row } from '../common';
import Card from './Card';

export const Category = (props: { categoryData: ObjStringStyle[] }) => {
  return (
    <Row
      sx={{
        display: 'flex',
        width: '375px',
        flexWrap: 'wrap',
        marginTop: '16px',
        paddingLeft: '14px',
      }}
    >
      {props.categoryData?.map((el: ObjStringStyle, idx: number) => (
        <Link
          key={el.id}
          href={{
            pathname: `/categories/${el.id}`,
            query: { data: JSON.stringify(props.categoryData), idx },
          }}
          as={`/categories/${el.id}`}
        >
          <a>
            <Card imgUrl={el.imageUrl} name={el.name} />
          </a>
        </Link>
      ))}
    </Row>
  );
};
