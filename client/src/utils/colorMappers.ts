import { Color, ProductType } from "../types/Models";

export const colorMapper = new Map<Color, Color>([
  [Color.GREEN, Color.WHITE],
  [Color.DARK_BLUE, Color.WHITE],
  [Color.BEIGE, Color.GREEN],
]);

export const productTextMapper = new Map<ProductType, string>([
  [ProductType.CARBON, "offsets"],
  [ProductType.TREES, "plants"],
  [ProductType.PLASTIC_BOTTLE, "collects"],
]);

export const amountTextMapper = new Map<ProductType, string>([
  [ProductType.CARBON, "kgs of carbon"],
  [ProductType.TREES, "tress"],
  [ProductType.PLASTIC_BOTTLE, "plastic bottles"],
]);
