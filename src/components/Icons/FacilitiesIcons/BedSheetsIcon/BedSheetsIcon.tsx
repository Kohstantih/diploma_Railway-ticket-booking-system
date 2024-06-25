import { facilitiesIconsClassesList } from '../facilitiesIconsClassesList';

import { TFacilitiesIconsProps } from 'types/TFacilitiesIconsProps';

import '../FacilitiesIcons.css';

export default function BedSheetsIcon({ status }: TFacilitiesIconsProps) {
  return (
    <div className={`facilities__wrapper ${facilitiesIconsClassesList[status]}`}>
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.545 12.1613C20.6815 12.5772 20.8553 13.1645 21.0538 13.7395C21.3641 14.6815 20.7312 15.6235 19.7259 15.6235C14.4764 15.6357 9.21447 15.6357 3.96494 15.6113C2.19028 15.599 0.936843 14.7304 0.651408 13.2256C0.514895 12.5283 0.589357 11.7575 0.725869 11.0602C1.17264 8.68681 1.69387 6.32564 2.20269 3.95225C2.28956 3.53629 2.42607 3.12033 2.61222 2.74108C2.99694 1.9581 3.56781 1.43204 4.5234 1.28523C5.33007 1.16289 6.11191 0.857043 6.89375 0.600129C7.39016 0.428853 7.84934 0.404385 8.30852 0.698001C9.15242 1.24853 10.0708 1.38311 11.076 1.35864C13.3098 1.3097 15.5437 1.3464 17.7775 1.35864C18.5718 1.35864 18.5718 1.37087 18.7952 2.10491C19.0806 3.08363 19.3536 4.06235 19.6515 5.04107C19.7259 5.26129 19.8873 5.45703 20.0238 5.65277C20.334 6.08096 20.7436 6.44798 20.9421 6.91288C21.4758 8.13628 21.4882 9.45755 21.3393 10.7666C21.2896 11.1948 20.8925 11.574 20.545 12.1613ZM1.63182 10.1794C2.72392 9.33521 3.87807 9.27404 5.06945 9.28627C9.78534 9.29851 14.5012 9.28627 19.2047 9.29851C19.6639 9.29851 20.1355 9.35968 20.7312 9.39638C20.6195 8.72351 20.5574 8.09958 20.3961 7.50011C20.0486 6.20331 19.1923 5.70171 17.8644 6.03203C16.946 6.26448 16.0153 6.50916 15.1714 6.90064C12.6521 8.06287 10.0335 7.87936 7.40257 7.54905C7.11714 7.51234 7.00545 7.36554 7.04268 7.09639C7.07991 6.79054 7.11714 6.49692 7.14196 6.19107C7.21642 5.11448 7.30329 4.03789 7.36534 2.96129C7.39016 2.423 7.36534 1.87247 7.36534 1.24853C7.10473 1.33417 6.89375 1.39534 6.68278 1.45651C5.96299 1.65225 5.2556 1.8847 4.53581 2.03151C3.95253 2.14161 3.54299 2.43523 3.31961 2.94906C3.14586 3.34055 3.00935 3.74427 2.91007 4.16023C2.72392 4.9065 2.5874 5.66501 2.42607 6.42352C2.17787 7.63468 1.91725 8.83362 1.63182 10.1794ZM11.6593 14.9139C14.2034 14.9139 16.7475 14.9139 19.2916 14.9139C19.4529 14.9139 19.6267 14.9262 19.788 14.9017C20.1479 14.8527 20.4457 14.498 20.3961 14.1676C20.3464 13.8251 20.1355 13.6293 19.7632 13.6416C19.6018 13.6416 19.4281 13.6416 19.2668 13.6416C14.4888 13.6538 9.71088 13.666 4.93294 13.666C4.6475 13.666 4.34966 13.6905 4.06422 13.6538C3.46853 13.5926 3.03417 13.0788 3.04658 12.4671C3.05899 11.8799 3.4313 11.4884 4.05181 11.4517C4.68473 11.415 5.33007 11.3783 5.9754 11.3661C10.5424 11.3171 15.1093 11.2804 19.6763 11.2315C19.7756 11.2315 19.8873 11.2315 19.9865 11.2192C20.3464 11.1825 20.6443 10.9012 20.6567 10.6075C20.6567 10.2161 20.3713 10.0937 20.061 10.0081C19.9245 9.97138 19.7756 9.97138 19.6267 9.97138C14.4392 9.97138 9.23929 9.95915 4.05181 9.99585C3.51817 9.99585 2.9473 10.1916 2.47571 10.4485C0.998894 11.2682 0.874792 13.4091 2.20269 14.3634C2.74874 14.7549 3.40648 14.8772 4.07663 14.8772C6.60832 14.9139 9.14001 14.9139 11.6593 14.9139ZM8.14719 1.46874C8.0355 3.32831 7.9238 5.09001 7.81211 6.81501C11.1629 7.54905 14.191 6.79054 17.0826 5.37139C14.0172 4.45384 11.2001 2.85119 8.14719 1.46874ZM19.7135 11.9655C19.4529 11.9655 19.2295 11.9655 18.9937 11.9655C17.1322 11.99 15.2707 12.0389 13.4091 12.0512C10.5424 12.0756 7.6756 12.0756 4.79643 12.1001C4.54822 12.1001 4.28761 12.1001 4.06422 12.1857C3.94012 12.2347 3.77879 12.4426 3.7912 12.565C3.80361 12.6996 3.96494 12.8708 4.10145 12.9442C4.21314 13.0054 4.38689 12.9687 4.5234 12.9687C9.52472 12.9565 14.5385 12.9565 19.5398 12.9442C19.6887 12.9442 19.8376 12.9075 20.0114 12.8953C19.9493 12.6873 19.9121 12.5283 19.8624 12.3692C19.8252 12.2469 19.7756 12.1368 19.7135 11.9655ZM11.3242 2.06821C11.3118 2.10491 11.3118 2.15385 11.2994 2.19055C13.7318 3.35278 16.1518 4.53948 18.9193 5.11448C18.6462 4.14799 18.4104 3.24267 18.1126 2.36183C18.063 2.21502 17.7651 2.08044 17.579 2.08044C15.494 2.06821 13.4091 2.06821 11.3242 2.06821Z"
          className="facilities__icon_color"
        />
      </svg>
      <span className="facilities__clue">белье</span>
    </div>
  );
}
