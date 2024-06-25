import About from 'views/About/About';
import HowItWorks from 'views/HowItWorks/HowItWorks';
import Reviews from 'views/Reviews/Reviews';

import './Main.css';

export default function Main() {
  return (
    <main className="main">
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
      <div className="wrapper" style={{ marginTop: '152px', marginBottom: '122px' }}>
        <Reviews />
      </div>
    </main>
  );
}
