import type { AppRouteLink, ClassnameProp } from '@/types';

export interface HeaderProps extends ClassnameProp {}

export interface HeaderLink {
  link: AppRouteLink;
  title: string;
}
