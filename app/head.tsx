import { BUSINESS_NAME } from "@/data/general";
import Head from "next/head";

const MainPage = () => {
  return (
    <Head>
      <title>{BUSINESS_NAME}</title>
      <meta property="og:title" content={BUSINESS_NAME} key="title" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="og:description"
        content="Στο I Ching : balance way παρέχουμε ένα πλήρες εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία του ανθρώπινου οργανισμού."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MainPage;
