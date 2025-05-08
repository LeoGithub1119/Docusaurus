// src/theme/DocPage/Layout.tsx
import React from 'react';
import OriginalLayout from '@theme-original/DocPage/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Layout(props) {
  const customHomeHref = useBaseUrl('/docs/service_intro/home'); // 根據 sidebar 的起始頁面設定

  return <OriginalLayout {...props} homeHref={customHomeHref} />;
}
