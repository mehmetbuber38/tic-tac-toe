import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from 'Components/Toast';
import App from 'App';
import Layout from 'Layout';
import About from 'Routes/About';
import 'i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>
);
