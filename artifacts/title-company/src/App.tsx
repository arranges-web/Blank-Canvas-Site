import './index.css';

import { Route, Switch } from 'wouter';

import Nav from './site/layout/Nav';
import Footer from './site/layout/Footer';
import Concierge from './site/layout/Concierge';
import ScrollToTop from './site/layout/ScrollToTop';

import Home from './site/pages/Home';
import Services from './site/pages/Services';
import Realtors from './site/pages/Realtors';
import About from './site/pages/About';
import Locations from './site/pages/Locations';
import Contact from './site/pages/Contact';

import { ROUTES } from './site/data';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Nav />
      <main>
        <Switch>
          <Route path={ROUTES.home} component={Home} />
          <Route path={ROUTES.services} component={Services} />
          <Route path={ROUTES.realtors} component={Realtors} />
          <Route path={ROUTES.about} component={About} />
          <Route path={ROUTES.locations} component={Locations} />
          <Route path={ROUTES.contact} component={Contact} />
          <Route component={Home} />
        </Switch>
      </main>
      <Footer />
      <Concierge />
    </div>
  );
}
