import Article from "@/features/Article/Article";
import Facilities from "@/features/Facilities/Facilities";
import Service from "@/features/Service/Service";
import States from "@/features/States/States";

const Home = () => {
  return (
    <section>
      <Article id="articles" />

      <Service id="services" />

      <Facilities id="facilities" />

      <States />

      <div className="h-200"></div>
    </section>
  );
};

export default Home;
