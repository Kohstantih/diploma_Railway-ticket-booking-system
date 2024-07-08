import { UseFormRegisterReturn } from 'react-hook-form';

import './InputData.css';

export default function InputData({
  tittle,
  id,
  defaultValue,
  register,
  type = 'text',
  placeholder = '',
  isError,
}: {
  tittle: string;
  id: string;
  defaultValue: string;
  register: UseFormRegisterReturn;
  type?: string;
  placeholder?: string;
  isError: boolean;
}) {
  return (
    <div className="input-data__box">
      <label htmlFor={id} className="input-data__label">
        {tittle}
      </label>
      <input
        defaultValue={defaultValue}
        id={id}
        {...register}
        type={type}
        className={`input-data${isError ? ' input-data_error' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
}
