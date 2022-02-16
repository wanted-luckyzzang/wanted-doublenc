import { PaletteType } from 'src/types';
import styleReturn from 'src/utils/styleReturn';

const FontSize: PaletteType = {
  ICON: styleReturn('fontSize', '12px'),
  SUBHEAD: styleReturn('fontSize', '13px'),
  EXPLAIN: styleReturn('fontSize', '14px'),
  TITLE: styleReturn('fontSize', '15px'),
  HEAD: styleReturn('fontSize', '16px'),
};
export default FontSize;
