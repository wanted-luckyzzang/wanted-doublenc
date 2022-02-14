const styleReturn = (width: number, height: number) => {
  return { width: `${width}px`, height: `${height}px` };
};

const IconSize = {
  MAINLIST: styleReturn(43, 43),
  BRANDLIST: styleReturn(36, 36),
  ITEMLIST: styleReturn(70, 70),
  BIGMENU: styleReturn(30, 30),
  SMALLMENU: styleReturn(14, 7),
  QUESTION: styleReturn(14, 20),
};
export default IconSize;
