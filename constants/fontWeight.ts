const styleReturn = (fontWeight: number) => {
  return { fontWeight: `${fontWeight}` };
};

const FontWeight = {
  SMALL: styleReturn(500),
  BIG: styleReturn(600),
};

export default FontWeight;
