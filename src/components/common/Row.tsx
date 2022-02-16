import { CommonParams } from 'src/types';

const Row = (props: CommonParams): JSX.Element => {
  return (
    <div style={{ display: 'flex', ...props?.sx }} onClick={props?.onClick}>
      {props?.children}
    </div>
  );
};

export default Row;
