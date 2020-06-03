/* eslint-disable import/no-unresolved */
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Universe from './Universe';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Aspire for zero config</>,
    imageUrl: 'img/rocket.png',
    description: (
      <>
        Standard Wix Flows like Out of iFrame app or Business-manager module
        require minimal configuration
      </>
    ),
  },
  {
    title: <>Yoshi ❤️ TypeScript</>,
    imageUrl: 'img/ts.png',
    description: <>You can use TypeScript with any of the flows</>,
  },
  {
    title: <>We have your back</>,
    imageUrl: 'img/lotusman.png',
    description: <>Stable, Reliable and Fully Supported #yoshi</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  return (
    <Layout
      title={'Toolkit for building applications @ Wix'}
      description="Toolkit for building applications @ Wix"
    >
      <Universe />
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
