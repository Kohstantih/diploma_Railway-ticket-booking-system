export type TTimeState = 'now' | 'future' | 'past';

export type TDatePickerProps = {
  value: number;
  status: 'thisMonth' | 'otherMonth';
  today: number;
  timeState: TTimeState;
  checked: number;
  toggleChecked: (value: number) => void;
};
