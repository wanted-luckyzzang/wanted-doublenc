import { PaletteType } from 'src/types';
import styleReturn from 'src/utils/styleReturn';

const FontWeight: PaletteType = {
  SMALL: styleReturn('fontWeight', '500'),
  BIG: styleReturn('fontWeight', '600'),
};

export default FontWeight;
