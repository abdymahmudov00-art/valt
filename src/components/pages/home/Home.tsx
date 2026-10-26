import Benefits from "./benefits/Benefits";
import Drops from "./drops/Drops";
import Hero from "./hero/Hero";
import Panels from "./panels/Panels";

const Home = () => {
  return (
    <>
      <Hero />
      <Panels />
      <Drops />
      <Benefits />
    </>
  );
};

export default Home;
