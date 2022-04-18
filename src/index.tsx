import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Invoices } from './componets/Invoices';
import { Expenses } from './componets/Expenses';
import { NotFoundPage } from './componets/NotFoundPage';
import { InvoiceInfo } from './componets/InvoiceInfo';
import { NotFoundIndex } from './componets/NotFoundIndex';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="invoices" element={<Invoices />}>
          <Route index element={<NotFoundIndex />} />
          <Route path=":invoiceId" element={<InvoiceInfo />} />
        </Route>

        <Route path="expenses" element={<Expenses />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
