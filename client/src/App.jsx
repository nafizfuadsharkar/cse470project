import AuthPage from "./pages/auth"
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <Router>
      <AuthPage />
    </Router>
  );
}


export default App
