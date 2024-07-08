import { useAppSelector } from 'hooks/redux';

import Aside from 'views/Aside/Aside';
import AsideTitle from 'views/AsideTitle/AsideTitle';
import AsideSection from 'components/AsideSection/AsideSection';
import TransparentArrowIcon from 'views/TransparentArrowIcon/TransparentArrowIcon';
import DirectionInform from 'components/DirectionInform/DirectionInform';
import PassengerIcon from 'views/PassengerIcon/PassengerIcon';
import PassengersInform from 'components/PassengersInform/PassengersInform';
import AsideTotalAmount from 'components/AsideTotalAmount/AsideTotalAmount';

import './AsideTripInfo.css';

export default function AsideTripInfo() {
  const { route } = useAppSelector((state) => state.activeRoute);

  return (
    <Aside
      children={[
        <AsideTitle key={'aside-title'} text="детали поездки" />,
        <AsideSection
          key={'aside-direction-to'}
          icon={<TransparentArrowIcon width={32} direction={'to'} />}
          isActive={true}
          title={'Туда'}
          children={<DirectionInform direction={'to'} />}
        />,
        <AsideSection
          key={'aside-direction-from'}
          icon={<TransparentArrowIcon width={32} direction={'from'} />}
          title={'Обратно'}
          children={<DirectionInform direction={'from'} />}
          isActive={!!route?.arrival}
        />,
        <AsideSection
          key={'aside-passenger'}
          icon={<PassengerIcon />}
          title={'Пассажиры'}
          children={<PassengersInform />}
          isActive={true}
        />,
        <AsideTotalAmount key={'aside-total-amount'} />,
      ]}
    />
  );
}
