import Nav from "./components/Nav";
import {
  Hero,
  CustomerReview,
  SuperQuality,
  Footer,
  SpecialOffer,
  Subscribe,
  Service,
  PopularProduct,
} from "./sections";
export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue py-2">
        <CustomerReview />
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black paddding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
