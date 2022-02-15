import styled from 'styled-components';
import { Row } from '../common';

interface ButtonProps {
  state: number;
  setState: (state: number) => void;
}

interface DotProps {
  focus: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <Row sx={{ position: 'absolute', bottom: '15px', right: '5px' }}>
      <Dot
        onClick={() => props.setState(1)}
        focus={props.state === 1 && true}
      />
      <Dot
        onClick={() => props.setState(2)}
        focus={props.state === 2 && true}
      />
      <Dot
        onClick={() => props.setState(3)}
        focus={props.state === 3 && true}
      />
    </Row>
  );
};

const Dot = styled.div`
  background-color: ${(props: DotProps) => (props.focus ? 'black' : 'white')};
  margin-right: 7px;
  border-radius: 50%;
  width: 9px;
  height: 9px;
`;
