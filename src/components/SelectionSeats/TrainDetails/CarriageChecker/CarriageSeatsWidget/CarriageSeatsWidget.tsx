import CarriageEconom from './Carriages/CarriageEconom';
import CarriageSeat from './Carriages/CarriageSeat';
import CarriageCompartment from './Carriages/CarriageCompartment';

import './CarriageSeatsWidget.css';
import CarriageLuxury from './Carriages/CarriageLuxury';

export default function CarriageSeatsWidget({ number, type, seatsFree }) {
    const carriageImages = {
        seat: 'carriage-mask_seat',
        econom: 'carriage-mask_econom',
        compartment: 'carriage-mask_compartment',
        luxury: 'carriage-mask_luxury',
    }

    return (
        <div className={`carriage-widget__mask ${carriageImages[type as keyof typeof carriageImages]}`}>
            <div className="carriage__number">{number}</div>
            <div className="carriage-seats__container">
                {type === 'seat' && <CarriageSeat freeSeats={seatsFree} />}
                {type === 'econom' && <CarriageEconom freeSeats={seatsFree} />}
                {type === 'compartment' && <CarriageCompartment freeSeats={seatsFree} />}
                {type === 'luxury' && <CarriageLuxury freeSeats={seatsFree} />}
            </div>            
        </div>
    )
}
