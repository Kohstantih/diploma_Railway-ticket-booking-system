import { TDatePickerProps } from '../../../types/TDatePickerProps';

export default function DatePicker({
  value,
  status,
  today,
  timeState,
  checked,
  toggleChecked,
}: TDatePickerProps) {
  const thisDay = timeState === 'now' ? today : 0;

  if (timeState === 'past')
    return <td className={'date-picker date-picker_other-month'}>{value}</td>;

  if (status === 'thisMonth' && value < thisDay) {
    return (
      <td className={'date-picker date-picker_this-month this-month_last'}>
        {value}
      </td>
    );
  } else if (status === 'thisMonth' && value >= thisDay) {
    const classes = checked === value ? ' date-picker_active' : '';

    return (
      <td
        onClick={() => toggleChecked(value)}
        className={`date-picker date-picker_this-month this-moth_future${classes}`}
      >
        {value}
      </td>
    );
  } else {
    return <td className={'date-picker date-picker_other-month'}>{value}</td>;
  }
}
