import { ObjStringStyle } from "../../types";

interface ImgParams {
  iconSize: ObjStringStyle;
  src: string;
  alt: string;
}

const Img = ({ src, alt, iconSize }: ImgParams): JSX.Element => {
  return <img src={src} alt={alt} style={{ ...iconSize }} />;
};

export default Img;
