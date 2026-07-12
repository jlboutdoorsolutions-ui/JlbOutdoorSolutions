import { Route, Switch } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Estimator from "@/pages/Estimator";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/estimator" component={Estimator} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
