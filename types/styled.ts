interface ObjStringStyle {
  [key: string]: string;
}

interface PaletteType {
  [key: string]: ObjStringStyle;
}

interface StyleParams {
  sx?: { [key: string]: string };
}

interface CommonParams extends StyleParams {
  children: React.ReactNode;
}

export type { StyleParams, CommonParams, ObjStringStyle, PaletteType };
