import { C, FS, FW } from 'src/constants';
import { Text } from '../common';

const MenuTitle = (): JSX.Element => {
  return (
    <div>
      <div>
        <Text sx={{ ...FS.SUBHEAD, ...C.POINTRED }}>놓치지 마세요</Text>
      </div>
      <div>
        <Text sx={{ ...FS.HEAD, ...FW.BIG }}>오늘의 땡처리콘!</Text>
      </div>
    </div>
  );
};

export default MenuTitle;
