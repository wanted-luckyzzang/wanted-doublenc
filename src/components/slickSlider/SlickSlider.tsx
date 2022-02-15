import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Slide } from './Slide';

interface WrapperProps {
  index: number;
}

export const SlickSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  console.log(slideIndex);

  return (
    <>
      <Container>
        <Wrapper index={slideIndex}>
          <Slide src="/images/sliderImage1.svg" alt="sliderImage1" />
          <Slide src="/images/sliderImage1.svg" alt="sliderImage1" />
          <Slide src="/images/sliderImage1.svg" alt="sliderImage1" />
        </Wrapper>
        <Button state={slideIndex} setState={setSlideIndex} />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 375px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  width: '300vw';
  overflow: 'hidden';
  ${(props: WrapperProps) =>
    props.index && `transform : translate(-${(props.index - 1) * 375}px);`}
  transition: transform .5s ease-in-out;
`;
