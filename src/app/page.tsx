import Article from "@/features/Article/Article";
import Service from "@/features/Service/Service";

const Home = () => {
  return (
    <section>
      <Article id="articles" />

      <Service id="services" />

      <div className="h-200"></div>
    </section>
  );
};

export default Home;
