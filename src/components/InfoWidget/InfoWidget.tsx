import './InfoWidget.css';

export default function InfoWidget({
  status,
  title,
  text,
}: {
  status: 'error' | 'info';
  title: string;
  text: string;
}) {
  return (
    <div className="info-widget__container">
      <div
        style={{ backgroundColor: `${status === 'error' ? '#FF3D0061' : '#FFF5005C'}` }}
        className="info-widget__header"
      >
        <div className="info-widget__icon">
          {status === 'error' && (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 32C24.8365 32 32 24.8367 32 16C32 7.16333 24.8365 0 16 0C7.16345 0 0 7.16333 0 16C0 24.8367 7.16345 32 16 32ZM14.3657 19.7454H18.1575L18.7546 5.92603H13.7686L14.3657 19.7454ZM14.3657 22.3704C13.875 22.8057 13.6296 23.3657 13.6296 24.051C13.6296 24.7363 13.875 25.301 14.3657 25.7454C14.6333 25.9783 14.9353 26.1489 15.2717 26.2573C15.5641 26.3513 15.8824 26.3982 16.2268 26.3982C16.9677 26.3982 17.5834 26.1807 18.0741 25.7454C18.5741 25.301 18.8241 24.7363 18.8241 24.051C18.8241 23.3657 18.5741 22.8057 18.0741 22.3704C17.5834 21.926 16.9677 21.7039 16.2268 21.7039C15.4861 21.7039 14.8657 21.926 14.3657 22.3704Z"
                fill="white"
                fillOpacity="0.73"
              />
            </svg>
          )}
          {status === 'info' && (
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.30595 15.97C0.325962 7.12448 7.51043 -0.0199705 16.376 4.19404e-05C25.2014 0.0200544 32.3459 7.22454 32.3259 16.0901C32.2859 24.8755 25.1014 32.02 16.2959 32C7.4504 32 0.285938 24.8155 0.30595 15.97ZM17.8369 23.975C17.8369 20.7129 17.8369 17.571 17.8369 14.469C16.7762 14.469 15.7756 14.469 14.775 14.469C14.775 17.671 14.775 20.813 14.775 23.975C15.8156 23.975 16.8162 23.975 17.8369 23.975ZM14.795 8.04505C14.795 9.16575 14.795 10.1664 14.795 11.167C15.8556 11.167 16.8563 11.167 17.8569 11.167C17.8569 10.1063 17.8569 9.0857 17.8569 8.04505C16.7962 8.04505 15.8156 8.04505 14.795 8.04505Z"
                fill="#E4E0E9"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="info-widget__body">
        <p className="info-widget__text text_bold">{title}</p>
        <p className="info-widget__text">{text}</p>
      </div>
      <div className="info-widget__footer">
        <button type="button" className="info-widget__btn">
          Понятно
        </button>
      </div>
    </div>
  );
}
