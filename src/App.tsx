import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import PackagesPage from "@/pages/PackagesPage";
import VisaPage from "@/pages/VisaPage";
import ContactPage from "@/pages/ContactPage";
import RoutesPage from "@/pages/RoutesPage";
import SearchResults from "@/pages/SearchResults";
import DownloadAppPage from "@/pages/DownloadAppPage";
import NotFound from "@/pages/not-found";
import BookingPopup from "@/components/BookingPopup";
import FloatingContact from "@/components/FloatingContact";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/search" component={SearchResults} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/packages" component={PackagesPage} />
        <Route path="/visa" component={VisaPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/one-way-cabs" component={RoutesPage} />
        <Route path="/download-app" component={DownloadAppPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <BookingPopup />
      <FloatingContact />
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
