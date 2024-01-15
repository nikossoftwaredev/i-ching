import "./global.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "components/Footer";
import Header from "@/components/header/Header";
import AppointmentForm from "components/AppointmentForm";
import { PageProps } from "types/general";

const RootLayout = async ({ children }: PageProps): Promise<JSX.Element> => {
  return (
    <html lang="el" data-theme="light">
      <body className="text-base-content bg-gradient-to-b to-25% from-primary to-base-300 ">
        <Header />
        <main className="px-4">
          {children}
          <AppointmentForm />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
