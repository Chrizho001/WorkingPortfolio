import Nav from "./components/Nav";
import PopularProducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import Hero from "./components/Hero";
import SpecialOffers from "./components/SpecialOffers";
import CustomerReviews from "./components/CustomerReviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Match from "./components/Match";

function App() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts />
      </section>

      <section className="sm:px-16 px-8 sm:py-24 py-8">
        <Match />
      </section>

      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
