import { FunctionComponent } from 'react';

export type TCarriageClassNames = 'first' | 'second' | 'third' | 'fourth';

export type TCarriageTypesObject = {
  id: TCarriageClassNames;
  title: string;
  icon: FunctionComponent<{ isActive: boolean }>;
};

export type TCarriageTypesList = {
  first: TCarriageTypesObject;
  second: TCarriageTypesObject;
  third: TCarriageTypesObject;
  fourth: TCarriageTypesObject;
};
