declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export module "*.svg";
  export module "*.jpg";
  export module "*.png";
  export module "*.webp";

  export module "*.json";
}

export {};
