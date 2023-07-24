import './App.css';
import { Routes, Route } from 'react-router-dom';
import TableList from './components/pages/TableList.js'; 
import SingleTable from './components/pages/SingleTable.js'; 
import NotFound from './components/pages/NotFound.js'
import { Container } from 'react-bootstrap'
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<TableList />} />
        <Route path="/tables/:id" element={<SingleTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
      <Footer />
    </Container>
  );
}

export default App;
