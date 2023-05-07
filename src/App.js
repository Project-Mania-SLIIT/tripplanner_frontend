import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContent from "./pages/admin/dashboardLayout";
import ContactUs from "./pages/user/contactUs";
import Login from "./pages/common/login";
import AboutUs from "./pages/user/aboutUs";
import Home from "./pages/user/home";
import Hotel from "./pages/user/hotel";
import Packages from "./pages/user/package";
import Place from "./pages/user/place";
import Hoteladmin from "./pages/admin/pages/hotel";
import Profile from "./pages/user/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* user routes */}
          <Route exact path="/seller">
            <Route exact path="/seller/*" element={<DashboardContent />} />
          </Route>
          <Route exact path="/admin" element={<DashboardContent />}>
          </Route>
          <Route exact path="/">
            <Route exact path="home" element={<Home />} />
          </Route>
          <Route exact path="login" element={<Login />} />

          <Route exact path="contactUs" element={<ContactUs />} />
          <Route exact path="aboutUs" element={<AboutUs />} />
          <Route exact path="hotel" element={<Hotel />} />
          <Route exact path="package" element={<Packages />} />
          <Route exact path="place" element={<Place />} />
          <Route exact path="hadmin" element={<Hoteladmin />} />
          <Route exact path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
