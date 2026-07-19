import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = lazy(() => import("@/pages/Home"));
const Listings = lazy(() => import("@/pages/Listings"));
const ListingDetail = lazy(() => import("@/pages/ListingDetail"));
const CurrentAuctions = lazy(() => import("@/pages/CurrentAuctions"));
const PastAuctions = lazy(() => import("@/pages/PastAuctions"));
const Videos = lazy(() => import("@/pages/Videos"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-[#F5F5F5]" />}>
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
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
