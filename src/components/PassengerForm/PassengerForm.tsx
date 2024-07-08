import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setPassengerData, setPassengerStatus } from 'state/reducers/setPassengersSlice';

import SelectFormData from 'components/SelectFormData/SelectFormData';
import FullNameInputs from 'components/FullNameInputs/FullNameInputs';
import GenderSelection from 'components/GenderSelection/GenderSelection';
import InputData from 'views/InputData/InputData';
import Checkbox from 'views/Checkbox/Checkbox';
import ValidationFormSuccessInfo from 'views/ValidationFormSuccessInfo/ValidationFormSuccessInfo';
import ValidationFormFailInfo from 'views/ValidationFormFailInfo/ValidationFormFailInfo';

import { TPassengerForm } from 'types/TPassengerForm';

import './PassengerForm.css';

const statuses = [
  {
    value: 'adult',
    name: 'Взрослый',
  },
  {
    value: 'children',
    name: 'Детский',
  },
];

const documents = [
  {
    value: 'passport',
    name: 'Паспорт РФ',
  },
  {
    value: 'certificate',
    name: 'Свидетельство о рождении',
  },
];

export default function PassengerForm({ passengerId }: { passengerId: string }) {
  const [isLimitedMobility, setIsLimitedMobility] = useState(false);
  const { passengers } = useAppSelector((state) => state.passengers);
  const dispatch = useAppDispatch();
  const passenger = passengers.find((p) => p.id === passengerId);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<TPassengerForm>();

  const isFillingForm = useMemo(() => {
    if (Object.keys(errors).length !== 0) return false;
    if (
      passenger?.data.birthday === '' ||
      passenger?.data.birthday === '' ||
      passenger?.data.documentData === '' ||
      passenger?.data.firstName === '' ||
      passenger?.data.lastName === '' ||
      passenger?.data.patronymic === ''
    )
      return false;

    return true;
  }, [
    errors,
    passenger?.data.birthday,
    passenger?.data.documentData,
    passenger?.data.firstName,
    passenger?.data.lastName,
    passenger?.data.patronymic,
  ]);

  const onSubmit: SubmitHandler<TPassengerForm> = useCallback(
    (data) => {
      if (!passenger) return;
      const documentData =
        passenger.data.documentType === 'passport'
          ? `${data.series} ${data.passport}`
          : data.certificate;

      dispatch(setPassengerData({ id: passengerId, option: 'lastName', value: data.surname }));
      dispatch(setPassengerData({ id: passengerId, option: 'firstName', value: data.name }));
      dispatch(setPassengerData({ id: passengerId, option: 'patronymic', value: data.patronymic }));
      dispatch(setPassengerData({ id: passengerId, option: 'birthday', value: data.birthday }));
      dispatch(setPassengerData({ id: passengerId, option: 'documentData', value: documentData }));
    },
    [dispatch, passenger, passengerId]
  );

  const onChange = useCallback(
    (event: SyntheticEvent) => {
      const { target } = event;
      const { name } = target as HTMLInputElement;

      if (isFillingForm || Object.keys(errors).length !== 0)
        trigger(name as keyof TPassengerForm, { shouldFocus: true });

      if (name === 'surname')
        dispatch(setPassengerData({ id: passengerId, option: 'lastName', value: '' }));
      if (name === 'name')
        dispatch(setPassengerData({ id: passengerId, option: 'firstName', value: '' }));
      if (name === 'patronymic')
        dispatch(setPassengerData({ id: passengerId, option: 'patronymic', value: '' }));
      if (name === 'birthday')
        dispatch(setPassengerData({ id: passengerId, option: 'birthday', value: '' }));
      if (name === 'series' || name === 'passport' || name === 'certificate')
        dispatch(setPassengerData({ id: passengerId, option: 'documentData', value: '' }));
    },
    [dispatch, errors, isFillingForm, passengerId, trigger]
  );

  const handleChangeDateInput = useCallback(
    (event: SyntheticEvent) => {
      const { target } = event;
      const { value } = target as HTMLInputElement;
      let result = value;
      const lastCharacter = value.slice(-1);

      if (value.length > 10) result = value.slice(0, 10);

      if (/[0-9]/.test(lastCharacter) || lastCharacter === '.') {
        if (value.startsWith('.')) result = value.slice(1);
        if (value.length === 2 && lastCharacter === '.') result = `0${value}`;
        if (value.length === 5 && lastCharacter === '.')
          result = `${value.slice(0, 3)}0${value.slice(-2)}`;
        if (value.slice(-2) === '..') result = value.slice(0, -1);
        if ((value.length === 3 || value.length === 6) && lastCharacter !== '.')
          result = `${value.slice(0, -1)}.${lastCharacter}`;
      } else {
        result = value.slice(0, -1);
      }

      setValue('birthday', result, { shouldValidate: false });
    },
    [setValue]
  );

  const validationFormWidget = useCallback((errorsObject: FieldErrors<TPassengerForm>) => {
    const { surname, name, patronymic, birthday, series, passport, certificate } = errorsObject;
    let errorObject: null | {
      reason: string;
      example: string;
    } = null;

    if (surname) {
      errorObject = {
        reason: 'Фамилия указана некорректно',
        example: 'Петров',
      };
    } else if (name) {
      errorObject = {
        reason: 'Имя указано некорректно',
        example: 'Александр',
      };
    } else if (patronymic) {
      errorObject = {
        reason: 'Отчество указано некорректно',
        example: 'Николаевич',
      };
    } else if (birthday) {
      errorObject = {
        reason: 'Дата рождения указана некорректно',
        example: '12.08.1973',
      };
    } else if (series) {
      errorObject = {
        reason: 'Серия паспорта указана некорректно',
        example: '1234',
      };
    } else if (passport) {
      errorObject = {
        reason: 'Номер паспорта указан некорректно',
        example: '123456',
      };
    } else if (certificate) {
      errorObject = {
        reason: 'Номер свидетельства о рождении указан некорректно',
        example: 'VIII-ЫП-123456',
      };
    }

    if (!errorObject) return null;

    return <ValidationFormFailInfo objectInfo={errorObject} />;
  }, []);

  useEffect(() => {
    dispatch(setPassengerStatus({ id: passengerId, option: 'isValid', value: isFillingForm }));
  }, [dispatch, isFillingForm, passengerId]);

  if (!passenger) return null;

  return (
    <form onChange={onChange} onSubmit={handleSubmit(onSubmit)} className="passenger-form">
      <div className="data__container">
        <div className="data__box">
          <div className="data-status__wrapper">
            <SelectFormData
              optionList={statuses}
              activeOption={passenger.statuses.isAdult ? statuses[0] : statuses[1]}
              setActiveOption={(value) => {
                if (value === 'adult') {
                  dispatch(setPassengerStatus({ id: passengerId, option: 'isAdult', value: true }));
                  dispatch(
                    setPassengerStatus({ id: passengerId, option: 'isChild', value: false })
                  );
                } else {
                  dispatch(setPassengerStatus({ id: passengerId, option: 'isChild', value: true }));
                  dispatch(
                    setPassengerStatus({ id: passengerId, option: 'isAdult', value: false })
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="data__box">
          <FullNameInputs
            defaultValues={{
              name: passenger.data.firstName,
              surname: passenger.data.lastName,
              patronymic: passenger.data.patronymic,
            }}
            register={register}
            setValue={setValue}
            errors={errors}
          />
        </div>
        <div className="data__box">
          <div className="gender-date__wrapper">
            <GenderSelection passengerId={passengerId} />
            <div className="input-date__wrapper">
              <InputData
                tittle={'Дата рождения'}
                id={'date'}
                defaultValue={passenger.data.birthday}
                register={register('birthday', {
                  required: true,
                  onChange: handleChangeDateInput,
                  pattern: /^[0-3][0-9][.][0,1][0-9][.][1,2][0-9]{3}$/gm,
                })}
                placeholder="дд/мм/гггг"
                isError={!!errors.birthday}
              />
            </div>
          </div>
        </div>
        <div style={{ fontSize: '18px' }} className="data__box">
          <Checkbox
            tittle={'ограниченная подвижность'}
            status={isLimitedMobility}
            setStatus={(status) => setIsLimitedMobility(status)}
          />
        </div>
      </div>
      <div className="document__wrapper">
        <div className="data__box document__container">
          <div className="document-checker">
            <p className="document-checker__title">Тип документа</p>
            <SelectFormData
              optionList={documents}
              activeOption={
                passenger.data.documentType === 'passport' ? documents[0] : documents[1]
              }
              setActiveOption={(value: string) => {
                let result = value;
                if (passenger.statuses.isAdult === true && value === 'certificate')
                  result = 'passport';

                dispatch(
                  setPassengerData({ id: passengerId, option: 'documentType', value: result })
                );

                if (result !== passenger.data.documentType) {
                  dispatch(
                    setPassengerData({ id: passengerId, option: 'documentData', value: '' })
                  );
                  setValue('series', '');
                  setValue('passport', '');
                  setValue('certificate', '');
                }
              }}
            />
          </div>
          {passenger.data.documentType === 'passport' && (
            <>
              <div className="document-input__wrapper">
                <InputData
                  tittle={'Серия'}
                  id={'series'}
                  defaultValue={passenger.data.documentData.slice(0, 4)}
                  register={register('series', {
                    required: true,
                    pattern: /^\d{4}$/gm,
                  })}
                  type="number"
                  isError={!!errors.series}
                />
              </div>
              <div className="document-input__wrapper">
                <InputData
                  tittle={'Номер'}
                  id={'passport'}
                  defaultValue={passenger.data.documentData.slice(-6)}
                  register={register('passport', {
                    required: true,
                    pattern: /^\d{6}$/gm,
                  })}
                  type="number"
                  isError={!!errors.passport}
                />
              </div>
            </>
          )}
          {passenger.data.documentType === 'certificate' && (
            <div className="document-input__wrapper">
              <InputData
                tittle={'Номер'}
                id={'certificate'}
                defaultValue={passenger.data.documentData}
                register={register('certificate', {
                  required: true,
                  pattern: /^[V,I,X]{1,4}[ |-][а-яёА-ЯЁ]{2}[ |-][0-9]{6}$/gm,
                  onChange: ({ target }) =>
                    setValue('certificate', target.value.toUpperCase(), { shouldValidate: false }),
                })}
                isError={!!errors.certificate}
              />
            </div>
          )}
        </div>
      </div>

      <div className="data-add__container">
        {validationFormWidget(errors) === null && (
          <div
            className={`data-add__box${passenger.statuses.isValid ? ' data-add__box_success' : ''}`}
          >
            {passenger.statuses.isValid && <ValidationFormSuccessInfo />}
            <button type="submit" className="passenger-form__btn">
              Следующий пассажир
            </button>
          </div>
        )}
        {validationFormWidget(errors)}
      </div>
    </form>
  );
}
