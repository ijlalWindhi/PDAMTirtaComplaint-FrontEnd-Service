import { Routes, Route } from "react-router-dom";
import Beranda from "../../pages/Beranda/Beranda";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dukungan from "../../pages/Dukungan/Dukungan";
import PengaduanSarana from "../../pages/Pengaduan Sarana/PengaduanSarana";
import ReviewFeedback from "../../pages/Review Feedback/ReviewFeedback";
import HistoryReport from "../../pages/History Report/HistoryReport";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<Beranda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dukungan" element={<Dukungan />} />
            <Route
                path="/dukungan/pengaduanSarana"
                element={<PengaduanSarana />}
            />
            \
            <Route
                path="/dukungan/reviewFeedback"
                element={<ReviewFeedback />}
            />
            <Route path="/riwayatLaporan" element={<HistoryReport />} />
        </Routes>
    );
}
