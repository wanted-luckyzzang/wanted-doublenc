import { C, FS, FW } from 'src/constants';
import { Col, Text } from '../common';

const MenuTitle = (): JSX.Element => {
  return (
    <Col sx={{ marginLeft: '17px', marginTop: '29px', marginBottom: '14px' }}>
      <Text sx={{ ...FS.SUBHEAD, ...C.POINTRED, marginBottom: '5px' }}>
        놓치지 마세요
      </Text>
      <Text sx={{ ...FS.HEAD, ...FW.BIG }}>오늘의 땡처리콘!</Text>
    </Col>
  );
};

export default MenuTitle;
