interface ObjStringStyle {
  [key: string]: string;
}

interface StyleParams {
  sx?: { [key: string]: string };
}

interface CommonParams extends StyleParams {
  children: React.ReactNode;
}

export type { StyleParams, CommonParams, ObjStringStyle };
