export type TTrainObject = {
  _id: string; // Идентификатор
  name: string; // Название
};

export type TCityObject = {
  _id: string; // Идентификатор
  name: string; // Название
};

export type TDirectionObject = {
  railway_station_name: string; // Название ж/д вокзала
  city: TCityObject; // Информация о городе
  datetime: number; // Время в секундах
};

export type TPriceClassInfo = {
  price: number; // Цена за место (в случае варианта люкс)
  top_price: number; // Цена верхнего места
  bottom_price: number; // Цена нижнего места
  side_price: number; // Цена бокового места
};

export type TPriceInfoObject = {
  first: TPriceClassInfo; // Информация о вагонах класса «Люкс»
  second: TPriceClassInfo; // Информация о вагонах класса «Купе»
  third: TPriceClassInfo; // Информация о вагонах класса «Плацкарт»
  fourth: TPriceClassInfo; // Информация о вагонах с сидячими местами
};

export type TSeatsInfoObject = {
  // Информация о количестве свободных мест в каждом типе вагонов
  first: number;
  second: number;
  third: number;
  fourth: number;
};

export type TRouteObjectDirection = {
  _id: string; // Идентификатор
  have_first_class: boolean; // В поезде есть вагоны класса «Люкс» (СВ)
  have_second_class: boolean; // В поезде есть вагоны класса «Купе»
  have_third_class: boolean; // В поезде есть вагоны класса «Плацкарт»
  have_fourth_class: boolean; // В поезде есть вагоны с сидячими местами
  have_wifi: boolean; // Есть Wi-Fi? (даже если этот флаг указан, Wi-Fi может быть не в каждом вагоне)
  have_air_conditioning: boolean; // Есть кондиционер? (даже если этот флаг указан, кондиционер может быть не в каждом вагоне)
  is_express: boolean; // Экспресс или нет
  train: TTrainObject; // Информация о поезде
  from: TDirectionObject; // Информация об отправлении
  to: TDirectionObject; // Информация о прибытии
  min_price: number; // Минимальная цена поездки (на 1 взрослого)
  duration: number; // Длительность поездки (в секундах)
  available_seats: number; // Количество свободных мест
  available_seats_info: TSeatsInfoObject; // Информация о количестве свободных мест в каждом типе вагонов
  price_info: TPriceInfoObject; // Информация о ценах в каждом типе вагонов
};

export type TRouteObject = {
  have_first_class: boolean; // В поезде есть вагон класса «Люкс» (СВ)
  have_second_class: boolean; // В поезде есть вагон класса «Купе»
  have_third_class: boolean; // В поезде есть вагон класса «Плацкарт»
  have_fourth_class: boolean; // В поезде есть вагон с сидячими местами
  have_wifi: boolean; // Есть Wi-Fi? (на всём направлении)
  have_air_conditioning: boolean; // Есть кондиционер? (на всём направлении)
  is_express: boolean; // Экспресс-маршрут (на всём направлении)
  min_price: number; // Минимальная цена поездки (на 1 взрослого)
  departure: TRouteObjectDirection; // Информация о поездке обратно
  arrival: TRouteObjectDirection; // Информация о поездке туда
  available_seats: number; // Количество свободных мест
  available_seats_info: TSeatsInfoObject; // Информация о количестве свободных мест в каждом типе вагонов
};

export type TRoutesDataObject = {
  total_count: number; // Количество найденных направлений
  items: TRouteObject[];
};
