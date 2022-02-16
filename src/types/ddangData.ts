import { ObjStringStyle, PaletteType } from '.';

export type Root = Root2[];

export interface Root3 extends Root2 {
  options: PaletteType[] | ObjStringStyle;
}
export interface Root2 {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: any;
  tip: any;
  warning?: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;

  conCategory2: ConCategory2;
}

export interface ConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: any;
  imageUrl: string;
  conCategory1: ConCategory1;
}

export interface ConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}
