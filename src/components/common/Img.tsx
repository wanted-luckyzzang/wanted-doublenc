import { StyleParams } from 'src/types';

interface ImgParams extends StyleParams {
  src: string;
  alt: string;
}

const Img = ({ src, alt, sx }: ImgParams): JSX.Element => {
  return <img src={src} alt={alt} style={{ ...sx }} />;
};

export default Img;
