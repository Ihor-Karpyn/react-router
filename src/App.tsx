import React, { FC } from 'react';
import {
  Outlet, NavLink,
} from 'react-router-dom';
import './App.scss';
import cn from 'classnames';
import { NavLinkWithSearch } from './componets/NavLinkWithSearch';

export const App: FC = React.memo(() => {
  return (
    <div>
      <h1>Bookkeeper! App</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLinkWithSearch
          to="/invoices"
          className={({ isActive }) => cn({ isActive })}
        >
          Invoices
        </NavLinkWithSearch>
        {' '}
        |
        {' '}
        <NavLink
          to="/expenses"
          className={({ isActive }) => cn({ isActive })}
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
});
