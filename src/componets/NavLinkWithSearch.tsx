import React from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

// eslint-disable-next-line max-len
type NavLinkFunc = React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export const NavLinkWithSearch: NavLinkFunc = React.memo(({
  to, ...props
}) => {
  const { search } = useLocation();

  return <NavLink to={to + search} {...props} />;
});
