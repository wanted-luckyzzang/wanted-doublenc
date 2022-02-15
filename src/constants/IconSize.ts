import { PaletteType } from 'src/types';
import styleReturn from 'src/utils';

const IconSize: PaletteType = {
  MAINLIST: styleReturn('width', '43px', 'height', '43px'),
  BRANDLIST: styleReturn('width', '36px', 'height', '36px'),
  ITEMLIST: styleReturn('width', '70px', 'height', '70px'),
  BIGMENU: styleReturn('width', '30px', 'height', '30px'),
  SMALLMENU: styleReturn('width', '14px', 'height', '7px'),
  QUESTION: styleReturn('width', '14px', 'height', '20px'),
};
export default IconSize;
