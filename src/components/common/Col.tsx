import { CommonParams } from 'src/types';

const Col = (props: CommonParams): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...props?.sx }}>
      {props.children}
    </div>
  );
};

export default Col;
