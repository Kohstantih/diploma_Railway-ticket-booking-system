import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';
import { useSendOrderMutation } from 'state/services/orderApi';

import TrainInfo from 'views/TrainInfo/TrainInfo';
import ButtonEdit from 'views/ButtonEdit/ButtonEdit';
import ButtonNext from 'views/ButtonNext/ButtonNext';
import CostWidget from 'components/CostWidget/CostWidget';
import PassengerCardList from 'components/PassengerCardList/PassengerCardList';

import { TOrderQuerySeat } from 'types/TOrderQueryArgs';

import './VerificationPage.css';

export default function VerificationPage() {
  const navigator = useNavigate();
  const { route } = useAppSelector((state) => state.activeRoute);
  const { total } = useAppSelector((state) => state.price);
  const { isOnline, user } = useAppSelector((state) => state.user);
  const { departure: departureSeats, arrival: arrivalSeats } = useAppSelector(
    (state) => state.seatsChecked
  );
  const { passengers } = useAppSelector((state) => state.passengers);
  const { childrenWithoutSeatCount } = useAppSelector((state) => state.ticketsCount);

  const [send, { data }] = useSendOrderMutation();

  const createDirectionArgs = useCallback(
    (direction: 'departure' | 'arrival') => {
      if (!route || !route![direction]) return undefined;

      const objectSeats = direction === 'departure' ? departureSeats : arrivalSeats;

      const seats: TOrderQuerySeat[] = [];

      objectSeats!.seats.forEach((item, index) => {
        const { data, statuses } = passengers[index];

        seats.push({
          coach_id: item.coachId,
          person_info: {
            is_adult: statuses.isAdult,
            first_name: data.firstName,
            last_name: data.lastName,
            patronymic: data.patronymic,
            gender: statuses.gender,
            birthday: data.birthday,
            document_type:
              data.documentType === 'passport' ? 'паспорт' : 'свидетельство о рождении',
            document_data: data.documentData,
          },
          seat_number: item.seatNumber,
          is_child: statuses.isChild,
          include_children_seat: !!childrenWithoutSeatCount,
        });
      });
      return {
        route_direction_id: objectSeats!.id,
        seats,
      };
    },
    [arrivalSeats, childrenWithoutSeatCount, departureSeats, passengers, route]
  );

  const handleClick = useCallback(() => {
    if (!route || !route.departure) return;

    send({
      user: {
        first_name: user.name,
        last_name: user.surname,
        patronymic: user.patronymic,
        phone: user.phone,
        email: user.mail,
        payment_method: isOnline ? 'online' : 'cash',
      },
      departure: createDirectionArgs('departure'),
      arrival: createDirectionArgs('arrival'),
    });
  }, [
    createDirectionArgs,
    isOnline,
    route,
    send,
    user.mail,
    user.name,
    user.patronymic,
    user.phone,
    user.surname,
  ]);

  useEffect(() => {
    if (data?.status) navigator('/successful-order');
  }, [data?.status, navigator]);

  if (!route) return null;

  return (
    <div className="verification__container">
      <ul className="verification__list">
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Поезд</h4>
          </div>
          <TrainInfo
            objectInfo={route}
            button={<ButtonEdit tittle={'Изменить'} onClick={() => navigator('/trains')} />}
          />
        </li>
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Пассажиры</h4>
          </div>
          <div className="verification__body">
            <div className="verification__content">
              <PassengerCardList />
            </div>
            <div className="verification__aside">
              <div className="verification__total-cost">
                <p>Всего</p>
                <CostWidget
                  value={total}
                  valueColor={'#292929'}
                  valueFont={30}
                  valutaWidth={20}
                  valutaColor={'#928F94'}
                />
              </div>
              <ButtonEdit tittle={'Изменить'} onClick={() => navigator('/passengers')} />
            </div>
          </div>
        </li>
        <li className="verification__item">
          <div className="verification__header">
            <h4 className="verification__tittle">Способ оплаты</h4>
          </div>
          <div className="verification__body">
            <div className="verification__content">
              <p className="verification__payment-method">{isOnline ? 'Онлайн' : 'Наличными'}</p>
            </div>
            <div className="verification__aside">
              <ButtonEdit tittle={'Изменить'} onClick={() => navigator('/payment')} />
            </div>
          </div>
        </li>
      </ul>
      <div className="verification__btn-wrapper">
        <ButtonNext tittle={'подтвердить'} isActive={true} onClick={handleClick} />
      </div>
    </div>
  );
}
