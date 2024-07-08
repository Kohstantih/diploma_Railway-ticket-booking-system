export type TOrderQueryUser = {
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  email: string;
  payment_method: 'cash' | 'online';
};

export type TOrderQueryPersonInfo = {
  is_adult: boolean;
  first_name: string;
  last_name: string;
  patronymic: string;
  gender: boolean;
  birthday: string;
  document_type: string;
  document_data: string;
};

export type TOrderQuerySeat = {
  coach_id: string;
  person_info: TOrderQueryPersonInfo;
  seat_number: number;
  is_child: boolean;
  include_children_seat: boolean;
};

export type TOrderQueryDirection = {
  route_direction_id: string;
  seats: TOrderQuerySeat[];
};

export type TOrderQueryArgs = {
  user: TOrderQueryUser;
  departure?: TOrderQueryDirection;
  arrival?: TOrderQueryDirection;
};
