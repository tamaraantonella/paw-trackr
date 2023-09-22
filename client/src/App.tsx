import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './Views/Landing/Landing.tsx'


function App() {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App
