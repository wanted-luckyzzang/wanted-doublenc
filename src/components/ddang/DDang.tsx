import Card from './Card';
import MenuTitle from './MenuTitle';

const DDang = ({ data }: any): JSX.Element => {
  return (
    <>
      <MenuTitle />
      {data.map((el) => (
        <Card data={el} />
      ))}
    </>
  );
};

export default DDang;
