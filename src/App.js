import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { Home } from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // This function prevents the search button from reloading the page
  const handleSearch = (e) => {
    e.preventDefault(); 
    alert("Search functionality is not built yet, but the page didn't reload!");
  };

  return (
    <Router>
      <div className="App">
        
        {/* --- NAVBAR --- */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My Task App</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                {/* 1. HOME BUTTON */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                
                {/* 2. TO-DO LIST BUTTON (Renamed from 'Link') */}
                <li className="nav-item">
                  <Link className="nav-link" to="/todo">To-Do List</Link>
                </li>

              </ul>
              
              {/* --- SEARCH FORM (Fixed) --- */}
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoWrapper />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;