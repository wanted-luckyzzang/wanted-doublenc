import { CommonParams } from 'src/types';

const Col = (props: CommonParams): JSX.Element => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', ...props?.sx }}
      onClick={props?.onClick}
    >
      {props.children}
    </div>
  );
};

export default Col;
