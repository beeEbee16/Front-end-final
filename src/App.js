import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
import About from './pages/About';
import Login from './pages/Login';
import Nav from './Nav';
import QuizPage from './pages/quizPage';
import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Quizzes' Component={Quizzes}/>
          <Route path='/About' Component={About}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/QuizPage' Component={QuizPage}/>
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
