import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export const InvoiceInfo: FC = React.memo(() => {
  const { invoiceId } = useParams<'invoiceId'>();
  const invoice = getInvoice(Number(invoiceId));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>
        Total Due:
        {invoice?.amount}
      </h2>
      <p>
        {invoice?.name}
        :
        {invoice?.number}
      </p>
      <p>
        Due Date:
        {invoice?.due}
      </p>
    </main>
  );
});
