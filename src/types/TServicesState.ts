export type TServicesStateService = { name: string; price: number };

export type TServicesStateCarriage = {
  id: string;
  services: TServicesStateService[];
};

export type TServicesState = {
  carriages: TServicesStateCarriage[];
};
