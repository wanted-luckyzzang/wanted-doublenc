const styleReturn = (fontSize: number) => {
  return { fontSize: `${fontSize}px` };
};

const FontSize = {
  ICON: styleReturn(12),
  SUBHEAD: styleReturn(13),
  EXPLAIN: styleReturn(14),
  TITLE: styleReturn(15),
  HEAD: styleReturn(16),
};
export default FontSize;
