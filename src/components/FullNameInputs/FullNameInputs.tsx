import InputData from '../InputData/InputData';

import './FullNameInputs.css';

export default function FullNameInputs() {

  return (
    <div className="fullname-inputs__container">
      <div className="fullname-input__wrapper">
        <InputData tittle={'Фамилия'} id={'surname'} setValue={console.log} />
      </div>
      <div className="fullname-input__wrapper">
        <InputData tittle={'Имя'} id={'name'} setValue={console.log} />
      </div>
      <div className="fullname-input__wrapper">
        <InputData tittle={'Отчество'} id={'patronymic'} setValue={console.log} />
      </div>
    </div>
  );
}
