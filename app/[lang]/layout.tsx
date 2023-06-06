import Footer from 'components/Footer';
import Header from 'components/Header';

import './global.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { i18n } from 'i18n-config';
import { getDictionary } from 'utils/get-dictionary';
import AppointmentForm from 'components/AppointmentForm';
import { PageProps } from 'types/general';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

const RootLayout = async ({ children, params }: PageProps): Promise<JSX.Element> => {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} data-theme='retro'>
      <body>
        <Header dictionary={dictionary} lang={params.lang} />
        <main className='bg-base-100'>
          {children}
          <AppointmentForm />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
