import Footer from 'ui/Footer';
import Header from 'ui/Header';

import './global.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Locale, i18n } from 'i18n-config';
import { getDictionary } from 'utils/get-dictionary';
import AppointmentForm from 'ui/AppointmentForm';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

const RootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}): Promise<JSX.Element> => {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <Header dictionary={dictionary} lang={params.lang} />
        <main className='bg-bgSecondary'>
          {children}
          <AppointmentForm />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
