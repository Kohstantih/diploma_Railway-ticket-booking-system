import { facilitiesIconsClassesList } from '../facilitiesIconsClassesList';

import { TFacilitiesIconsProps } from '../../../../types/TFacilitiesIconsProps';

import '../FacilitiesIcons.css';

export default function FoodIcon({ status }: TFacilitiesIconsProps) {
  return (
    <div className={`facilities__wrapper ${facilitiesIconsClassesList[status]}`}>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.39887 0.526367C2.65965 0.526367 2.84931 0.526367 3.03897 0.526367C7.78042 0.526367 12.5219 0.526367 17.2633 0.526367C18.745 0.526367 19.4681 1.25024 19.4681 2.75733C19.4681 3.56428 19.48 4.38309 19.4681 5.19003C19.4562 6.37671 18.6739 7.15992 17.5004 7.17179C16.9077 7.18366 16.3269 7.17179 15.6868 7.17179C15.6868 8.0974 15.6868 8.95182 15.6868 9.81809C15.6749 12.1915 14.0747 13.8053 11.7158 13.8172C9.93778 13.8172 8.15973 13.8291 6.38169 13.8172C4.04652 13.8053 2.42258 12.2033 2.42258 9.87743C2.38702 6.78019 2.39887 3.70668 2.39887 0.526367ZM15.7223 2.43693C15.7223 3.36254 15.7223 4.30002 15.7223 5.2375C16.3387 5.2375 16.9314 5.2375 17.5241 5.2375C17.5241 4.28815 17.5241 3.36254 17.5241 2.43693C16.9077 2.43693 16.3387 2.43693 15.7223 2.43693Z"
          className="facilities__icon_color"
        />
        <path
          d="M17.5363 15.7515C17.5363 16.3685 17.5363 16.9619 17.5363 17.579C11.8584 17.579 6.20426 17.579 0.526367 17.579C0.526367 16.9619 0.526367 16.3804 0.526367 15.7515C6.18055 15.7515 11.8347 15.7515 17.5363 15.7515Z"
          className="facilities__icon_color"
        />
      </svg>
      <span className="facilities__clue">питание</span>
    </div>
  );
}
