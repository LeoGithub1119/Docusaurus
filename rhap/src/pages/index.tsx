import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/service_intro/home">
            了解更多有關 RHAP 大型語言模型的資訊
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="這是 RHAP 網站的首頁，提供大型語言模型的高效能 AI 平台服務。">
      <HomepageHeader />
      <main>
    <div className={styles.homepageSections}>
        <section className={styles.homepageSection}>
            <h2>靈活擴展</h2>
            <p>私有、獨立、專用 : 助力百工百業輕鬆開啟AI應用新大門。</p>
            {/* <img src="/img/flexibility.png" alt="靈活擴展" /> */}
        </section>
        <section className={styles.homepageSection}>
            <h2>高效能 AI 平台</h2>
            <p>結合國家級運算設施與安全機制，提供穩定生成式 AI 解決方案。</p>
            {/* <img src="/img/high-performance.png" alt="高效能 AI 平台" /> */}
        </section>
        <section className={styles.homepageSection}>
            <h2>多層架構支持</h2>
            <p>整合前端網頁、API 代理及推論加速器，滿足多樣需求。</p>
            {/* <img src="/img/company_logo.jpg" alt="多層架構支持" /> */}
        </section>
    </div>
</main>


    </Layout>
  );
}
