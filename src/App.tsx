import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setServiceSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateService = (slug: string) => {
    setCurrentPage('service');
    setServiceSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage, serviceSlug]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onNavigateService={handleNavigateService} />;
      case 'about':
        return <AboutPage />;
      case 'treatments':
        return <TreatmentsPage onNavigate={handleNavigate} />;
      case 'packages':
        return <PackagesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'service':
        return serviceSlug ? <ServiceDetailPage slug={serviceSlug} onNavigate={handleNavigate} /> : null;
      default:
        return <HomePage onNavigate={handleNavigate} onNavigateService={handleNavigateService} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
