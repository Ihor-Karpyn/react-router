import React, { FC, useMemo } from 'react';
import {
  Outlet, useSearchParams, URLSearchParamsInit,
} from 'react-router-dom';
import cn from 'classnames';
import { getInvoices } from '../data';
import '../App.scss';
import { NavLinkWithSearch } from './NavLinkWithSearch';

export const Invoices: FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || '';

  const invoices = getInvoices();

  const changeHandler = (value: string) => {
    const newState: URLSearchParamsInit = value
      ? { filter: value }
      : {};

    setSearchParams(newState);
  };

  const filteredInvoices = useMemo(() => (
    invoices.filter(({ name }) => (
      name.toLowerCase().includes(filter.toLowerCase())
    ))
  ), [filter]);

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          type="text"
          value={filter}
          onChange={(e) => changeHandler(e.target.value)}
        />
        {filteredInvoices.map(({ number, name }) => (
          <NavLinkWithSearch
            key={number}
            to={`/invoices/${number}`}
            style={{ display: 'block', margin: '1rem 0' }}
            className={({ isActive }) => cn({ isActive })}
          >
            {name}
          </NavLinkWithSearch>
        ))}
      </nav>
      <Outlet />
    </div>
  );
});
