/* eslint-disable @typescript-eslint/no-explicit-any */
export type FormInputPayload = {
  field: string;
  value: any;
};

export type ListItem = {
  id: string | number;
  name: string;
};

export type YupObjectShapeOf<T> = {
  [property in keyof T]: T[property];
};
