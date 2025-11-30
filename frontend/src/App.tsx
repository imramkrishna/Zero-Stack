import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { DocsPage } from '@pages/DocsPage';
import { AboutPage } from '@pages/AboutPage';
import { DeploymentsPage } from '@pages/DeploymentsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/*" element={<DocsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/deployments" element={<DeploymentsPage />} />
        <Route path="/analytics" element={<Navigate to="/deployments" replace />} />
        <Route path="/edge-functions" element={<Navigate to="/deployments" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
