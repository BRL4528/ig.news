import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../service/stripe';

import styles from './home.module.scss';

interface HomeProps {
  products: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContiner}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            New about the <span>React</span> World.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {products.amount} month</span>
          </p>

          <SubscribeButton priceId={products.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IdXJyHj7boZm8gcr1XCiFv7');

  const products = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
