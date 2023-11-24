import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Home({ token, user, setUser }) {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer token={token} user={user} setUser={setUser} />
      </div>
    </>
  );
}

export default Home;
