import { SyntheticEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setIsCash, setIsOnline, setUSerData } from 'state/reducers/setUserInfoSlice';

import Checkbox from 'views/Checkbox/Checkbox';
import FullNameInputs from 'components/FullNameInputs/FullNameInputs';
import InputData from 'views/InputData/InputData';
import ButtonNext from 'views/ButtonNext/ButtonNext';

import { TUserForm } from 'types/TUserForm';

import './PaymentPage.css';

export default function PaymentPage() {
  const navigator = useNavigate();
  const { user, isOnline, isCash } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TUserForm>();

  const onSubmit: SubmitHandler<TUserForm> = useCallback(
    (data) => {
      dispatch(setUSerData({ option: 'surname', value: data.surname }));
      dispatch(setUSerData({ option: 'name', value: data.name }));
      dispatch(setUSerData({ option: 'patronymic', value: data.patronymic }));
      dispatch(setUSerData({ option: 'phone', value: data.phone }));
      dispatch(setUSerData({ option: 'mail', value: data.mail }));

      navigator('/verification');
    },
    [dispatch, navigator]
  );

  const handleOnchangePhone = useCallback(
    (event: SyntheticEvent) => {
      const { target } = event;
      const { value } = target as HTMLInputElement;

      let result = value
        .split('')
        .filter((c) => /[0-9]/.test(c))
        .join('');

      if (result.length > 0 && !result.startsWith('+')) result = `+${result}`;
      if (result.length > 1 && result.split('')[1] !== '7') result = `+7${result.slice(1)}`;

      const arr = result.split('');
      let string = '';

      for (let i = 0; i < arr.length; i += 1) {
        string += arr[i];
        if (
          string.length === 2 ||
          string.length === 6 ||
          string.length === 10 ||
          string.length === 13
        )
          string += ' ';
      }

      result = string.slice(0, 16);

      setValue('phone', result, { shouldValidate: false });
    },
    [setValue]
  );

  const handleOnchangeEmail = useCallback(
    (event: SyntheticEvent) => {
      const { target } = event;
      const { value } = target as HTMLInputElement;

      const result = value
        .toLowerCase()
        .split('')
        .filter((c) => /[a-z0-9@.]/.test(c))
        .join('');

      setValue('mail', result, { shouldValidate: false });
    },
    [setValue]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="payment">
      <div className="payment__container">
        <div className="payment__header">
          <h3 className="payment__tittle">Персональные данные</h3>
        </div>
        <div className="personal-data__body">
          <FullNameInputs
            defaultValues={{
              name: user.name,
              surname: user.surname,
              patronymic: user.patronymic,
            }}
            register={register}
            setValue={setValue}
            errors={errors}
          />
          <div className="payment-item__wrapper">
            <InputData
              tittle={'Контактный телефон'}
              id={'phone'}
              defaultValue={user.phone}
              register={register('phone', {
                required: true,
                onChange: handleOnchangePhone,
                pattern: /^\+7[-|\s]{0,1}\d{3}[-|\s]{0,1}\d{3}[-|\s]{0,1}\d{2}[-|\s]{0,1}\d{2}$/gm,
              })}
              placeholder="+7 __ __ _ _"
              isError={!!errors.phone}
            />
          </div>
          <div className="payment-item__wrapper">
            <InputData
              tittle={'E-mail'}
              id={'mail'}
              type="email"
              defaultValue={user.mail}
              register={register('mail', {
                required: true,
                onChange: handleOnchangeEmail,
                pattern: /^[a-z0-9]{1,}[.]{0,1}[a-z0-9]{1,}[@][a-z0-9]{2,}[.][a-z]{2,3}$/gm,
              })}
              placeholder="inbox@gmail.ru"
              isError={!!errors.mail}
            />
          </div>
        </div>
        <div className="payment__header">
          <h3 className="payment__tittle">Способ оплаты</h3>
        </div>
        <div className="payment-method__box">
          <Checkbox tittle={'Онлайн'} status={isOnline} setStatus={() => dispatch(setIsOnline())} />
          <ul className="payment-method__list">
            <li className="payment-method__item">Банковской картой</li>
            <li className="payment-method__item">PayPal</li>
            <li className="payment-method__item">Visa QIWI Wallet</li>
          </ul>
        </div>
        <div className="payment-method__box">
          <Checkbox tittle={'Наличными'} status={isCash} setStatus={() => dispatch(setIsCash())} />
        </div>
      </div>
      <div className="payment-btn__wrapper">
        <ButtonNext tittle={'Купить билеты'} type={'submit'} isActive={true} onClick={() => {}} />
      </div>
    </form>
  );
}
