import { Root2 } from 'src/types';

const Button = (props: { data: Root2 }): JSX.Element => {
  console.log('butttt', props.data.options);
  return <></>;
};

export default Button;
