import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Posts from "./components/screens/Posts";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/posts" Component={Posts} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
