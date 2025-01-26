import { combineReducers } from "redux";
import adminLoginReducer from "./admin/login/adminLoginReducer";
import putRiwayatAdminReducer from "./admin/riwayat/put/putRiwayatReducer";
import riwayatSingleReducer from "./admin/riwayat/single/riwayatSingleReducer";
import {
  default as getSingleValReducer,
  default as getUserValReducer,
} from "./admin/validasi/get/validasiReducer";
import putValReducer from "./admin/validasi/put/valPutReducer";
import loginUserReducer from "./user/login/loginReducer";
import getUserRiwayatReducer from "./user/pengajuan/get/userPengReducer";
import postPengajuanReducer from "./user/pengajuan/post/pengajuanReducer";
import validasiUserReducer from "./user/validasi/get/validasiUserReducer";
import pengajuanSingleReducer from "./admin/pengajuan/single/pengajuanSingleReducer";
import userRegistReducer from "./user/register/userRegistReducer";
import adminRegistReducer from "./admin/register/registAdminReducer";
import getUserProfileReducer from "./user/profile/get/UserProfileReducer"
import updateUserReducer from "./user/profile/put/UserUpdateReducer";
import getAdminProfileReducer from "./admin/profile/get/AdminProfileReducer";
import adminEditProfileReducer from "./admin/profile/put/AdminEditReducer"

const rootReducer = combineReducers({
  postPengajuan: postPengajuanReducer,
  loginUser: loginUserReducer,
  getUserRiwayat: getUserRiwayatReducer,
  getValidasiUser: validasiUserReducer,
  getUserVal: getUserValReducer,
  getSingleValUser: getSingleValReducer,
  valPutAdmin: putValReducer,
  getSingleRiwayat: riwayatSingleReducer,
  putRiwayatAdmin: putRiwayatAdminReducer,
  adminLogin: adminLoginReducer,
  pengajuanSingle: pengajuanSingleReducer,
  userRegist: userRegistReducer,
  adminRegist: adminRegistReducer,
  getUserProfile:getUserProfileReducer,
  updateUser:updateUserReducer,
  getAdminProfile:getAdminProfileReducer,
  adminEditProfile:adminEditProfileReducer,
});

export default rootReducer;
