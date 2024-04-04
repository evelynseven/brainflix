import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { fetchVideos, fetchHeroVideo, postComment } from "./Utils";

function App() {
  const [videos, setVideos] = useState([]);
  const [heroVideo, setHeroVideo] = useState();

  useEffect(() => {
    fetchVideos().then((data) => {
      setVideos(data);
      const id = data[0].id;
      fetchHeroVideo(id).then((data) => {
        setHeroVideo(data);
      });
    });
  }, []);

  return (
    videos &&
    heroVideo && (
      <BrowserRouter>
        <Header heroVideoID={videos[0].id} />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Main
                  videos={videos}
                  heroVideo={heroVideo}
                  setHeroVideo={setHeroVideo}
                  fetchHeroVideo={fetchHeroVideo}
                  postComment={postComment}
                />
              }
            />
            <Route
              path="video/:heroVideoID"
              element={
                <Main
                  videos={videos}
                  heroVideo={heroVideo}
                  setHeroVideo={setHeroVideo}
                  fetchHeroVideo={fetchHeroVideo}
                  postComment={postComment}
                />
              }
            />
          </Route>
          <Route path="upload" element={<UploadPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
