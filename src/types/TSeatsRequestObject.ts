export type TCoachObject = {
  _id: string; // Идентификатор
  name: string; // Идентификатор
  class_type: string; // Идентификатор
  have_wifi: boolean; // Имеется WiFi (true/false)
  have_air_conditioning: boolean; // Имеется кондиционер (true/false)
  have_express: boolean; // Экспресс (true/false)
  price: number; // Цена за место (Люкс)
  top_price: number; // Цена верхнего места
  bottom_price: number; // Цена нижнего места
  side_price: number; // Цена бокового места
  linens_price: number; // Цена постельного белья
  wifi_price: number; // Цена услуги Wi-Fi
  is_linens_included: boolean; // Стоимость белья включена в стоимость билета и не может быть исключена (true/false)
  available_seats: number; // Количество свободных мест в вагоне
  train: string; // Идентификатор поезда
};

export type TSeatsObject = {
  index: number; // Числовой номер места в вагоне
  available: boolean; // Место доступно для бронирования
};

export type TSeatsRequestObject = {
  coach: TCoachObject; // информация о вагоне
  seats: TSeatsObject[]; // информация о посадочных местах
};
