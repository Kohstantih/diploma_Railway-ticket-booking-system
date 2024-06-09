

import './ValidationFormFailInfo.css';

export default function ValidationFormFailInfo({ objectInfo }: {objectInfo: { reason: string, example: string }}) {
    const { reason, example } = objectInfo;
    return (
        <div className="form-fail__container">
            <div className="form-fail__icon"></div>
            <div className="form-fail__info">
                <p className="form-fail__reason">{reason}</p>
                <p className="form-fail__example">Пример: <span className="form-fail__example-value">{example}</span></p>
            </div>
        </div>
    )
}
