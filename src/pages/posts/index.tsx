import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
     <Head>
       <title>Posts | Ignews</title>
     </Head>


     <main className={styles.container}>
       <div className={styles.posts}>
         <a>
           <time>12 de março de 2021</time>
           <strong>Creating a Modoihcfo sabhdisb</strong>
           <p>oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma</p>
         </a>
         <a>
           <time>12 de março de 2021</time>
           <strong>Creating a Modoihcfo sabhdisb</strong>
           <p>oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma</p>
         </a>
         <a>
           <time>12 de março de 2021</time>
           <strong>Creating a Modoihcfo sabhdisb</strong>
           <p>oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma</p>
         </a>
         <a>
           <time>12 de março de 2021</time>
           <strong>Creating a Modoihcfo sabhdisb</strong>
           <p>oidewidfe dsoijisojc wejdiojwd d d edowijdosnd wsd sad pwqeojdsd s dsd wepqokd s wokdkmsamsd w dsapokzlsdxçlma</p>
         </a>
       </div>
     </main>
    </>
  )
}