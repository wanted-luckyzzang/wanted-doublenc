import { StyleParams } from 'src/types';

interface ImgParams extends StyleParams {
  src: string;
  alt: string;
  onClick?: () => void;
}

const Img = (props: ImgParams): JSX.Element => {
  return (
    <img
      src={props.src}
      onClick={props?.onClick}
      alt={props.alt}
      style={{ ...props.sx }}
    />
  );
};

export default Img;
