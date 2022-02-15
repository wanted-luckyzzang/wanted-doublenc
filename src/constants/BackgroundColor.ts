import { PaletteType } from 'src/types';
import styleReturn from 'src/utils';

const BackgroundColor: PaletteType = {
  GRAY: styleReturn('backgroundColor', '#CCCCCC'),
  LIGHTGRAY: styleReturn('backgroundColor', '#F1F3F4'),
  POINTRED: styleReturn('backgroundColor', '#ff5757'),
  WHITE: styleReturn('backgroundColor', '#FFFFFF'),
};

export default BackgroundColor;
