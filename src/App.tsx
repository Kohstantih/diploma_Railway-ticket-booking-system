import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Main from 'pages/Main/Main';
import TicketPurchaseProgress from 'components/TicketPurchaseProgress/TicketPurchaseProgress';
import Page from 'views/Page/Page';
import AsideSearchOptions from 'pages/AsideSearchOptions/AsideSearchOptions';
import TrainsSearchPage from 'pages/TrainsSearchPage/TrainsSearchPage';
import TicketsPage from 'pages/TicketsPage/TicketsPage';
import AsideTripInfo from 'pages/AsideTripInfo/AsideTripInfo';
import PassengersPage from 'pages/PassengersPage/PassengersPage';
import PaymentPage from 'pages/PaymentPage/PaymentPage';
import VerificationPage from 'pages/VerificationPage/VerificationPage';
import SuccessfulOrderPage from 'pages/SuccessfulOrderPage/SuccessfulOrderPage';

import './App.css';

function App() {
  return (
    <BrowserRouter
      basename={
        process.env.NODE_ENV === 'production' ? '/diploma_railway-ticket-booking-system/' : '/'
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="/trains"
            element={
              <>
                <TicketPurchaseProgress stage={1} />
                <Page aside={<AsideSearchOptions />} content={<TrainsSearchPage />} />
              </>
            }
          />
          <Route
            path="/tickets"
            element={
              <>
                <TicketPurchaseProgress stage={1} />
                <Page aside={<AsideSearchOptions />} content={<TicketsPage />} />
              </>
            }
          />
          <Route
            path="/passengers"
            element={
              <>
                <TicketPurchaseProgress stage={2} />
                <Page aside={<AsideTripInfo />} content={<PassengersPage />} />
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
