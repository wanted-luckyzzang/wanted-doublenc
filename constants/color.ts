const styleReturn = (color: string) => {
  return { color };
};

const Color = {
  BLACK: styleReturn("#000000"),
  POINTRED: styleReturn("#FF5757"),
  LIGHTGRAY: styleReturn("#808080"),
  WHITE: styleReturn("#FFFFFF"),
  GRAY: styleReturn("#CCCCCC"),
};
export default Color;
