export type TSeatsQueryArgs = {
  id: string; // Идентификатор направления (обязательный)
  have_first_class?: boolean; // Люкс (true/false)
  have_second_class?: boolean; // Купе (true/false)
  have_third_class?: boolean; // Плацкарт (true/false)
  have_fourth_class?: boolean; // Сидячее место (true/false)
  have_wifi?: boolean; // Имеется WiFi (true/false)
  have_air_conditioning?: boolean; // Имеется кондиционер (true/false)
  have_express?: boolean; // Экспресс (true/false)
};
