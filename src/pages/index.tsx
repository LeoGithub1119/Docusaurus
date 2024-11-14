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
            to="/docs/home">
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
      title={` ${siteConfig.title}`}
      description="這是 RHAP 網站的首頁，提供大型語言模型的高效能 AI 平台服務。">
      <HomepageHeader />
      <main>
        <div className={styles.homepageSections}>
          <section className={styles.homepageSection}>
            <h2>特點 1</h2>
            <p>這是 RHAP 的主要特點之一。</p>
          </section>
          <section className={styles.homepageSection}>
            <h2>特點 2</h2>
            <p>這是 RHAP 的第二個主要特點。</p>
          </section>
          <section className={styles.homepageSection}>
            <h2>特點 3</h2>
            <p>這是 RHAP 的第三個主要特點。</p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
