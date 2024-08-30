// import Hero from "./sections/Hero";
// import Services from "./sections/Hero";
// import Footer from "./sections/Footer";

//  but you can import them in single line
import Nav from "./components/Nav";
import {
  Hero,
  Footer,
  SpecialOffer,
  Services,
  PopularProducts,
  Subscribe,
  CustomersReviews,
  SuperQuality,
} from "./sections";

const App = () => (
  <main>
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding-x py-10">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue  padding">
      <CustomersReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
