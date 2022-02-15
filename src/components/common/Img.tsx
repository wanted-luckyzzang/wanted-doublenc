import { StyleParams } from 'src/types';

interface ImgParams extends StyleParams {
  src: string;
  alt: string;
}

const Img = (props: ImgParams): JSX.Element => {
  return <img src={props.src} alt={props.alt} style={{ ...props.sx }} />;
};

export default Img;
