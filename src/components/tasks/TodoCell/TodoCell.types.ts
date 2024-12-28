import type { CSSProperties, PropsWithChildren } from 'react';

import type { ClassnameProp } from '@/types';

export interface TodoCellProps extends ClassnameProp, PropsWithChildren {
  style?: CSSProperties;
}
