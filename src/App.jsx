import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="video/:heroVideoID" element={<Main />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
