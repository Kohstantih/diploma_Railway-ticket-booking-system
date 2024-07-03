export type TFacilitiesItemStatus = 'active' | 'inactive' | 'disabled';

export type TTFacilitiesItem = {
  have: boolean;
  status: TFacilitiesItemStatus;
  priceName?: 'linens_price' | 'wifi_price';
};

export type TFacilitiesList = {
  conditioner: TTFacilitiesItem;
  wifi: TTFacilitiesItem;
  bedSheets: TTFacilitiesItem;
  food: TTFacilitiesItem;
};
