import Footer from "@/shared/footer/Footer";
import Header from "@/shared/header/Header";

export default async function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
