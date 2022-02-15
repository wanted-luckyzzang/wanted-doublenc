import { Img } from 'src/components/common';

interface SlideProps {
  [key: string]: string;
}

export const Slide = (props: SlideProps) => {
  return (
    <div>
      <Img src={props.src} alt={props.alt} iconSize={{ objectFit: 'cover' }} />
    </div>
  );
};
