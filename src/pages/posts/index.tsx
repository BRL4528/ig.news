import Head from 'next/head';
import styles from './styles.module.scss';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../service/prismic';
import { GetStaticProps } from 'next';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Modoihcfo sabhdisb</strong>
            <p>
              oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s
              dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Modoihcfo sabhdisb</strong>
            <p>
              oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s
              dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Modoihcfo sabhdisb</strong>
            <p>
              oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s
              dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Modoihcfo sabhdisb</strong>
            <p>
              oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s
              dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  );

  console.log(response);
  return {
    props: {},
  };
};
