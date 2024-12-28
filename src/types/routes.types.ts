import type { APP_ROUTES } from '@/const';

export type AppRouteLink = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
