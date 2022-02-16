import Link from 'next/link';
import { BC, C, FS, FW, IS } from 'src/constants';
import { Row, Img, Text } from '../common';

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
      <Link href={'/'}>
        <a>
          <Img
            src={props.imageUrl}
            alt="HeaderIcon"
            sx={{
              ...IS.BIGMENU,
              marginRight: '98px',
              cursor: 'pointer',
              ...BC.WHITE,
              width: '20px',
              height: '20px',
            }}
          />
        </a>
      </Link>
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
