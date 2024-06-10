import Aside from '../Aside/Aside';
import AsideTittle from '../AsideTittle/AsideTittle';
import AsideSection from '../AsideSection/AsideSection';
import TransparentArrowIcon from '../Icons/TransparentArrowIcon/TransparentArrowIcon';
import DirectionInform from '../DirectionInform/DirectionInform';
import PassengerIcon from '../Icons/PassengerIcon/PassengerIcon';
import PassengersInform from '../PassengersInform/PassengersInform';
import AsideTotalAmount from '../AsideTotalAmount/AsideTotalAmount';

import './AsideTripInfo.css';

export default function AsideTripInfo() {
  return (
    <Aside
      children={[
        <AsideTittle key={'aside-tittle'} text="детали поездки" />,
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
