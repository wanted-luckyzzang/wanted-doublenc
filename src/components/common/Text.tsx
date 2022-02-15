import { CommonParams } from 'src/types';

const Text = (props: CommonParams): JSX.Element => {
  return <span style={{ ...props?.sx }}>{props.children}</span>;
};

export default Text;
