import { Root } from 'src/types';
import Card from './Card';
import MenuTitle from './MenuTitle';

const DDang = (props: { data: Root }): JSX.Element => {
  return (
    <>
      <MenuTitle />
      {props.data.map((el) => (
        <Card data={el} key={el.id} />
      ))}
    </>
  );
};

export default DDang;
