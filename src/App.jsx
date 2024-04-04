import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {
  fetchVideos,
  fetchHeroVideo,
  postComment,
  deleteComment,
} from "./Utils";

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

  if (!heroVideo) {
    return (
      <div className="app-loading">
        <h1>Loading the video...</h1>
      </div>
    );
  }

  return (
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
                deleteComment={deleteComment}
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
                deleteComment={deleteComment}
              />
            }
          />
        </Route>
        <Route path="upload" element={<UploadPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
