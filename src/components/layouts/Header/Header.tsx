import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { APP_ROUTES } from '@/const';

import type { HeaderLink, HeaderProps } from './Header.types';

import s from './Header.module.scss';

export function Header({ className }: HeaderProps) {
  const links: HeaderLink[] = [
    {
      link: APP_ROUTES.todos,
      title: 'Todos',
    },
  ];

  return (
    <header className={classNames(s.header, className)}>
      <img className={s.header__logo} src="/logo.png" alt="Logo" />
      <nav className={s.header__nav}>
        {links.map((it) => (
          <Link key={it.link} to={it.link} className={s.header__link}>
            {it.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
