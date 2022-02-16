import { useRouter } from 'next/router';
import { Img, Row, Text } from 'src/components/common';
import { BC, C, FS, FW, IS } from 'src/constants';

type CategoriesHeaderProps = {
  imageUrl: string;
  text?: string;
};

const CategoriesHeader = (props: CategoriesHeaderProps) => {
  const router = useRouter();
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
        onClick={() => router.push('/')}
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

export default CategoriesHeader;
