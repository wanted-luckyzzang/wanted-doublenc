import { PaletteType } from 'src/types';
import styleReturn from 'src/utils/styleReturn';

const Color: PaletteType = {
  BLACK: styleReturn('color', '#000000'),
  POINTRED: styleReturn('color', '#FF5757'),
  LIGHTGRAY: styleReturn('color', '#808080'),
  WHITE: styleReturn('color', '#FFFFFF'),
  GRAY: styleReturn('color', '#CCCCCC'),
};
export default Color;
