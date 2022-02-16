import { BC, C, FS, FW, IS } from 'src/constants';
import { Img, Row, Text } from './common';

type HeaderProps = {
  imageUrl: string;
  text?: string;
  setMyPageOpen: (myPageOpen: boolean) => void;
};

const Header = (props: HeaderProps) => {
  return (
    <Row
      sx={{
        backgroundColor: '#FFFFFF',
        width: '375px',
        height: '40px',
        padding: '3px 0 7px 10px',
        alignItems: 'center',
      }}
    >
      <Img
        src={props.imageUrl}
        alt="HeaderIcon"
        onClick={() => props.setMyPageOpen(true)}
        sx={{
          ...IS.BIGMENU,
          marginRight: '98px',
          cursor: 'pointer',
          ...BC.WHITE,
        }}
      />
      <Text
        sx={{
          ...FW.BIG,
          ...FS.TITLE,
          ...C.BLACK,
          height: '26px',
          width: '100px',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          ...BC.WHITE,
        }}
      >
        {props.text}
      </Text>
    </Row>
  );
};

export default Header;
