import About from '../About/About';
import HowItWorks from '../HowItWorks/HowItWorks';
import Reviews from '../Reviews/Reviews';



import './Main.css';

export default function Main() {
  return (
    <main className="main">
      {/* !!!!!!!! */}
      <div
        className="wrapper"
        style={{ margin: '20px auto', width: 'fit-content' }}
      >
      </div>
      {/* !!!!!!!! */}
      <div className="wrapper" style={{ marginTop: '144px' }}>
        <About />
      </div>
      <div className="manual__living" style={{ marginTop: '91px' }}>
        <div className="manual__container">
          <div className="wrapper">
            <HowItWorks />
          </div>
        </div>
        <div className="manual__living-mask"></div>
      </div>

      <div className="wrapper" style={{ marginTop: '152px' }}>
        <Reviews />
      </div>
    </main>
  );
}
