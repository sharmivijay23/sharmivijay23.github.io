import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar flex flex-wrap align-center items-center text-xl list-none">{props.children}</ul>
);

export { Navbar };