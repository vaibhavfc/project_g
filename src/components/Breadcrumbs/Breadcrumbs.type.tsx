import { Ref } from 'react';
import { BreadcrumbsProps as MuiBreadcrumbsProps, BreadcrumbsClassKey } from '@material-ui/core/Breadcrumbs';

export interface BreadcrumbsStylingProps extends Partial<Record<BreadcrumbsClassKey, string>> {

}

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  // innerRef: Ref<HTMLElement>;
  links: {href: string, linkText: string, active: boolean}[]
}
