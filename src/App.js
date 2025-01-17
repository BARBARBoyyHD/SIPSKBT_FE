import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LandingPages from "./pages/user/LandingPages";
import DashboardPages from "./pages/user/DashboardPages";
import LoginPages from "./pages/user/LoginPages";
import RegisterPages from "./pages/user/RegisterPages";
import ProfilePages from "./pages/user/ProfilePages";
import AdminLoginPages from "./pages/admin/AdminLoginPages";
import DashboardAdminPages from "./pages/admin/DashboardAdminPages";
import RegisterAdminPages from "./pages/admin/RegisterAdminPages";
import PengajuanBaru from "./pages/user/PengajuanBaru";
import RiwayatUserPages from "./pages/user/RiwayatUserPages";
import AdminListValidasiPages from "./pages/admin/AdminListValidasiPages";
import AdminEditValPages from "./pages/admin/AdminEditValPages";
import AdminGetSingleRiwayatpages from "./pages/admin/AdminGetSingleRiwayatPages";
import AdminCheckFilePages from "./pages/admin/AdminCheckFilePages";
import AdminRegisterPages from "./pages/admin/AdminRegisterPages";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* user pages */}
          <Route path="/" element={<LandingPages />} />
          <Route path="/pages/user/dashboard" element={<DashboardPages />} />
          <Route path="/pages/user/login" element={<LoginPages />} />
          <Route path="/pages/user/register" element={<RegisterPages />} />
          <Route path="/pages/user/profile" element={<ProfilePages />} />
          <Route
            path="/pages/user/pengajuan/baru"
            element={<PengajuanBaru />}
          />
          <Route
            path="/pages/user/riwayat/pengajuan"
            element={<RiwayatUserPages />}
          />
          <Route
            path="/pages/admin/show/all/validasi"
            element={<AdminListValidasiPages />}
          />
          {/* admin pages */}
          <Route path="/pages/admin/login" element={<AdminLoginPages />} />
          <Route path="/pages/admin/register" element={<AdminRegisterPages />} />
          <Route
            path="/pages/admin/dashboard"
            element={<DashboardAdminPages />}
          />
          <Route
            path="/pages/admin/register"
            element={<RegisterAdminPages />}
          />
          <Route
            path="/pages/admin/edit/validasi/:validasi_id"
            element={<AdminEditValPages />}
          />
          <Route
            path="/pages/admin/riwayat/single/:riwayat_id"
            element={<AdminGetSingleRiwayatpages />}
          />
          <Route path="/pages/admin/check/user/pengajuan/:pengajuan_id" element={<AdminCheckFilePages/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
