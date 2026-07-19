import { renderToString } from "react-dom/server";
import { Router, Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import CurrentAuctions from "./pages/CurrentAuctions";
import PastAuctions from "./pages/PastAuctions";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/not-found";

function makeStaticHook(url: string) {
  return function useStaticLocation(): [string, (to: string) => void] {
    return [url, () => {}];
  };
}

export function render(url: string): string {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <Router hook={makeStaticHook(url)}>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/listings" component={Listings} />
          <Route path="/listings/:id" component={ListingDetail} />
          <Route path="/current-auctions" component={CurrentAuctions} />
          <Route path="/past-auctions" component={PastAuctions} />
          <Route path="/videos" component={Videos} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}
