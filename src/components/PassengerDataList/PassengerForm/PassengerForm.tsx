import { useMemo, useState } from 'react';

import SelectFormData from '../../SelectFormData/SelectFormData';
import FullNameInputs from '../../FullNameInputs/FullNameInputs';
import GenderSelection from '../../GenderSelection/GenderSelection';
import InputData from '../../InputData/InputData';
import Checkbox from '../../Checkbox/Checkbox';

import ValidationFormSuccessInfo from './ValidationFormSuccessInfo/ValidationFormSuccessInfo';
import ValidationFormFailInfo from './ValidationFormFailInfo/ValidationFormFailInfo';

import './PassengerForm.css';

export default function PassengerForm() {
  const statuses = useMemo(
    () => [
      {
        value: 'adult',
        name: 'Взрослый',
      },
      {
        value: 'children',
        name: 'Детский',
      },
    ],
    []
  );

  const documents = useMemo(
    () => [
      {
        value: 'passport',
        name: 'Паспорт РФ',
      },
      {
        value: 'certificate',
        name: 'Свидетельство о рождении',
      },
    ],
    []
  );

  const [activeStatus, setActiveStatus] = useState(statuses[0]);
  const [activeGender, setActiveGender] = useState<string | null>(null);
  const [isLimitedMobility, setIsLimitedMobility] = useState(false);
  const [activeDocument, setActiveDocument] = useState(documents[0]);

  const error = {
    reason: 'Номер свидетельства о рождении указан некорректно',
    example: 'VIII-ЫП-123456',
  };
  const success = false;

  return (
    <form className="passenger-form">
      <div className="data__container">
        <div className="data__box">
          <div className="data-status__wrapper">
            <SelectFormData
              optionList={statuses}
              activeOption={activeStatus}
              setActiveOption={setActiveStatus}
            />
          </div>
        </div>
        <div className="data__box">
          <FullNameInputs />
        </div>
        <div className="data__box">
          <div className="gender-date__wrapper">
            <GenderSelection setActive={setActiveGender} />
            <div className="input-date__wrapper">
              <InputData
                tittle={'Дата рождения'}
                id={'date'}
                setValue={console.log}
                placeholder="дд/мм/гг"
              />
            </div>
          </div>
        </div>
        <div className="data__box">
          <Checkbox
            tittle={'ограниченная подвижность'}
            status={isLimitedMobility}
            setStatus={setIsLimitedMobility}
            fontSize={18}
          />
        </div>
      </div>
      <div className="document__wrapper">
        <div className="data__box document__container">
          <div className="document-checker">
            <p className="document-checker__title">Тип документа</p>
            <SelectFormData
              optionList={documents}
              activeOption={activeDocument}
              setActiveOption={setActiveDocument}
            />
          </div>
          {activeDocument.value === 'passport' && (
            <>
              <div className="document-input__wrapper">
                <InputData tittle={'Серия'} id={'series'} setValue={console.log} />
              </div>
              <div className="document-input__wrapper">
                <InputData tittle={'Номер'} id={'passport'} setValue={console.log} />
              </div>
            </>
          )}
          {activeDocument.value === 'certificate' && (
            <div className="document-input__wrapper">
              <InputData tittle={'Номер'} id={'certificate'} setValue={console.log} />
            </div>
          )}
        </div>
      </div>

      <div className="data-add__container">
        {!error && (
          <div className={`data-add__box${success ? ' data-add__box_success' : ''}`}>
            {success && <ValidationFormSuccessInfo />}
            <button type="button" className="passenger-form__btn">
              Следующий пассажир
            </button>
          </div>
        )}
        {error && <ValidationFormFailInfo objectInfo={error} />}
      </div>
    </form>
  );
}
