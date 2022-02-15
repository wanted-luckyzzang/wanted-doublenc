import { C, FS, FW, IS } from 'src/constants';
import { Img, Row, Text } from './common';

type HeaderProps = {
  imageUrl: string;
  text?: string;
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
        sx={{ ...IS.BIGMENU, marginRight: '98px', cursor: 'pointer' }}
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
        }}
      >
        {props.text}
      </Text>
    </Row>
  );
};

export default Header;
