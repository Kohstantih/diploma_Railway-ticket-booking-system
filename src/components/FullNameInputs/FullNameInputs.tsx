import { SyntheticEvent, useCallback, useMemo } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

import capitalizedString from 'funcs/capitalizedString';

import InputData from 'views/InputData/InputData';

import './FullNameInputs.css';

export default function FullNameInputs<T extends FieldValues>({
  defaultValues,
  register,
  setValue,
  errors,
}: {
  defaultValues: {
    name: string;
    surname: string;
    patronymic: string;
  };
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  errors: FieldErrors<T>;
}) {
  const inputsArr: {
    title: string;
    name: Path<T>;
  }[] = useMemo(
    () => [
      {
        title: 'Фамилия',
        name: 'surname' as Path<T>,
      },
      {
        title: 'Имя',
        name: 'name' as Path<T>,
      },
      {
        title: 'Отчество',
        name: 'patronymic' as Path<T>,
      },
    ],
    []
  );

  const handleOnChange = useCallback(
    (name: Path<T>) => (event: SyntheticEvent) => {
      const { target } = event;
      const { value } = target as HTMLInputElement;

      let result = value
        .split('')
        .filter((o) => /[а-яёА-ЯЁ-]/.test(o))
        .join('');

      if (result.search('-')) {
        result = result
          .split('-')
          .map((s) => capitalizedString(s))
          .join('-');
      } else {
        result = capitalizedString(result);
      }

      setValue(name, result as PathValue<T, Path<T>>);
    },
    [setValue]
  );

  return (
    <div className="fullname-inputs__container">
      {inputsArr.map((i) => (
        <div key={i.name} className="fullname-input__wrapper">
          <InputData
            tittle={i.title}
            id={i.name}
            defaultValue={defaultValues[i.name as 'name' | 'surname' | 'patronymic']}
            register={register(i.name, {
              required: true,
              onChange: handleOnChange(i.name),
              pattern: /^[а-яёА-ЯЁ]{1,}[-]{0,1}[а-яёА-ЯЁ]{1,}$/gm,
            })}
            isError={!!errors[i.name]}
          />
        </div>
      ))}
    </div>
  );
}
