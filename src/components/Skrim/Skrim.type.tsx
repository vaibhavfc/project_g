import { Ref } from 'react';
import { ContainerProps as MuiContainerProps, ContainerClassKey } from '@material-ui/core/Container';

export interface SkrimStylingProps extends Partial<Record<ContainerClassKey, string>> {
}

export interface SkrimProps extends MuiContainerProps {
  innerRef: Ref<HTMLDivElement>;
  type: 'modal1' | 'modal2' | 'nonModal';
}
