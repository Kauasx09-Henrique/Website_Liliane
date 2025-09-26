import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default App;