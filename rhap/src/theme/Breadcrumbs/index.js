import React from 'react';
import {useBreadcrumbs} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function BreadcrumbsItem({children, isActive, href}) {
  return (
    <li
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': isActive,
      })}>
      {href ? (
        <Link href={href} className="breadcrumbs__link">
          {children}
        </Link>
      ) : (
        <span className="breadcrumbs__link">{children}</span>
      )}
    </li>
  );
}

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      className="breadcrumbs"
      aria-label="breadcrumbs">
      <ul className="breadcrumbs__list">
        <BreadcrumbsItem href={useBaseUrl('/docs/rhap-docs/docs/service_intro/home')}>
          🏠
        </BreadcrumbsItem>
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem
            key={idx}
            isActive={idx === breadcrumbs.length - 1}
            href={item.href}>
            {item.label}
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
