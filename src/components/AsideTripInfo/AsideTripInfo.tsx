import Aside from 'components/Aside/Aside';
import AsideTitle from 'components/AsideTitle/AsideTitle';
import AsideSection from 'components/AsideSection/AsideSection';
import TransparentArrowIcon from 'components/Icons/TransparentArrowIcon/TransparentArrowIcon';
import DirectionInform from 'components/DirectionInform/DirectionInform';
import PassengerIcon from 'components/Icons/PassengerIcon/PassengerIcon';
import PassengersInform from 'components/PassengersInform/PassengersInform';
import AsideTotalAmount from 'components/AsideTotalAmount/AsideTotalAmount';

import './AsideTripInfo.css';

export default function AsideTripInfo() {
  return (
    <Aside
      children={[
        <AsideTitle key={'aside-title'} text="детали поездки" />,
        <AsideSection
          key={'aside-direction-to'}
          icon={<TransparentArrowIcon width={32} direction={'to'} />}
          title={'Туда'}
          children={<DirectionInform direction={'to'} />}
        />,
        <AsideSection
          key={'aside-direction-from'}
          icon={<TransparentArrowIcon width={32} direction={'from'} />}
          title={'Обратно'}
          children={<DirectionInform direction={'from'} />}
        />,
        <AsideSection
          key={'aside-passenger'}
          icon={<PassengerIcon />}
          title={'Пассажиры'}
          children={<PassengersInform />}
        />,
        <AsideTotalAmount key={'aside-total-amount'} />,
      ]}
    />
  );
}
