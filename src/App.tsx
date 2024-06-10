import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import TicketPurchaseProgress from './components/TicketPurchaseProgress/TicketPurchaseProgress';
import Page from './components/Page/Page';
import AsideSearchOptions from './components/AsideSearchOptions/AsideSearchOptions';
import TrainsFoundList from './components/TrainsFoundList/TrainsFoundList';
import SelectionSeats from './components/SelectionSeats/SelectionSeats';
import AsideTripInfo from './components/AsideTripInfo/AsideTripInfo';
import PassengerDataList from './components/PassengerDataList/PassengerDataList';
import PaymentPage from './components/PaymentPage/PaymentPage';
import VerificationPage from './components/VerificationPage/VerificationPage';
import SuccessfulOrderPage from './components/SuccessfulOrderPage/SuccessfulOrderPage';

import './App.css';

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
                <Page aside={<AsideSearchOptions />} content={<TrainsFoundList />} />
              </>
            }
          />
          <Route
            path="/tickets"
            element={
              <>
                <TicketPurchaseProgress stage={1} />
                <Page aside={<AsideSearchOptions />} content={<SelectionSeats />} />
              </>
            }
          />
          <Route
            path="/passengers"
            element={
              <>
                <TicketPurchaseProgress stage={2} />
                <Page aside={<AsideTripInfo />} content={<PassengerDataList />} />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <TicketPurchaseProgress stage={3} />
                <Page aside={<AsideTripInfo />} content={<PaymentPage />} />
              </>
            }
          />
          <Route
            path="/verification"
            element={
              <>
                <TicketPurchaseProgress stage={4} />
                <Page aside={<AsideTripInfo />} content={<VerificationPage />} />
              </>
            }
          />
          <Route path="/successful-order" element={<SuccessfulOrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
