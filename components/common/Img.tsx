type IconSizeType = {
  width: string;
  height: string;
};

interface ImgParams {
  iconSize: IconSizeType;
  src: string;
  alt: string;
}

const Img = ({ src, alt, iconSize }: ImgParams) => {
  return <img src={src} alt={alt} style={{ ...iconSize }} />;
};

export default Img;
