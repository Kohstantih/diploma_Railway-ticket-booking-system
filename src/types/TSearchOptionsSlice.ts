export type TSearchOptionDate = {
  dateStart: string; // Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01)
  dateEnd: string; // Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
  dateStartArrival: string; // Дата прибытия туда (в формате YYYY-MM-DD; например 2030-03-01)
  dateEndArrival: string; // Дата прибытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
};

export type TSearchOptionHours = {
  startDepartureHourFrom: number | undefined; // Час отбытия от
  startDepartureHourTo: number | undefined; // Час отбытия до
  startArrivalHourFrom: number | undefined; // Час прибытия от
  startArrivalHourTo: number | undefined; // Час прибытия до
  endDepartureHourFrom: number | undefined; // Час отбытия назад от
  endDepartureHourTo: number | undefined; // Час отбытия назад до
  endArrivalHourFrom: number | undefined; // Час прибытия назад от (работает при установленном параметре date_end)
  endArrivalHourTo: number | undefined; // Час прибытия назад до (работает при установленном параметре date_end)
};

export type TSearchOptionFacilities = {
  isFirstClass: boolean; // Люкс
  isSecondClass: boolean; // Купе
  isThirdClass: boolean; // Плацкарт
  isFourthClass: boolean; // Сидячее место
  isWifi: boolean; // Имеется WiFi
  isExpress: boolean; // Экспресс
  isAirConditioning: boolean; // Имеется кондиционер (true/false)
};
export type TSearchOptionPrice = {
  priceFrom: number | undefined; // Цена от
  priceTo: number | undefined; // Цена до
};
export type TSearchOptionFilters = {
  limit: number; // Количество результатов на странице
  offset: number; // Количество результатов, которое необходимо пропустить в выдаче
};

export type TSearchOptionsSlice = {
  date: TSearchOptionDate;
  hours: TSearchOptionHours;
  facilities: TSearchOptionFacilities;
  price: TSearchOptionPrice;
  filters: TSearchOptionFilters;
  sort: 'date' | 'price' | 'duration';
};
