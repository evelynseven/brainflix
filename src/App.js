import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Main />}></Route>
          <Route path="video/:heroVideoID" element={<Main />} />
        </Route>
        <Route path="upload" element={<UploadPage />} />
        <Route path="*" element={<h1>Opps, something went wrong.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
