import classNames from 'classnames';

import { Header } from '@/components/layouts/Header/Header';

import type { DefaultLayoutProps } from './DefaultLayout.types';

import s from './DefaultLayout.module.scss';

export function DefaultLayout({ className, children }: DefaultLayoutProps) {
  return (
    <div className={classNames(s.layout, className)}>
      <div className={s.layout__heading}>
        <Header />
      </div>
      <div className={s.layout__content}>{children}</div>
    </div>
  );
}
