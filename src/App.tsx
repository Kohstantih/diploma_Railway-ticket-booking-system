import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import TicketPurchaseProgress from './components/TicketPurchaseProgress/TicketPurchaseProgress';

import SearchTrainPage from './components/SearchTrainPage/SearchTrainPage';
import SelectionOfSeatsPage from './components/SelectionOfSeatsPage/SelectionOfSeatsPage';

import Page from './components/Page/Page';
import Aside from './components/Aside/Aside';

import './App.css';
import AsideTittle from './components/AsideTittle/AsideTittle';
import AsideSection from './components/AsideSection/AsideSection';
import TransparentArrowIcon from './components/Icons/TransparentArrowIcon/TransparentArrowIcon';
import DirectionInform from './components/DirectionInform/DirectionInform';
import PassengerIcon from './components/Icons/PassengerIcon/PassengerIcon';
import PassengersInform from './components/PassengersInform/PassengersInform';
import AsideTotalAmount from './components/AsideTotalAmount/AsideTotalAmount';
import PassengerDataList from './components/PassengerDataList/PassengerDataList';
import PaymentPage from './components/PaymentPage/PaymentPage';
import VerificationPage from './components/VerificationPage/VerificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="/trains"
            element={
              <>
                <TicketPurchaseProgress stage={1} />
                <SearchTrainPage />
                <Page aside={undefined} content={undefined} />
              </>
            }
          />
          <Route
            path="/tickets"
            element={
              <>
                <TicketPurchaseProgress stage={1} />
                <SelectionOfSeatsPage />
              </>
            }
          />
          <Route
            path="/passengers"
            element={
              <>
                <TicketPurchaseProgress stage={2} />
                <Page
                  aside={
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
                  }
                  content={<PassengerDataList />}
                />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <TicketPurchaseProgress stage={3} />
                <Page
                  aside={
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
                  }
                  content={<PaymentPage />}
                />
              </>
            }
          />
          <Route
            path="/verification"
            element={
              <>
                <TicketPurchaseProgress stage={4} />
                <Page
                  aside={
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
                  }
                  content={<VerificationPage />}
                />
              </>
            }
          />
          <Route path="/successful-order" element={<h1>HELLO</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
