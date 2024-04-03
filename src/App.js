import Header from "./components/Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const apiKey = "8190a6f6-fa28-4c67-8202-ae962008831d";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";

  const [videos, setVideos] = useState([]);
  const [heroVideo, setHeroVideo] = useState();
  const [heroVideoID, setHeroVideoID] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
        setVideos(response.data);
        setHeroVideoID(response.data[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        if (heroVideoID) {
          const response = await axios.get(
            `${baseUrl}/videos/${heroVideoID}?api_key=${apiKey}`
          );
          setHeroVideo(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchHeroVideo();
  }, [heroVideoID]);

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
                  heroVideoID={heroVideoID}
                  setHeroVideoID={setHeroVideoID}
                />
              }
            ></Route>
            <Route
              path="video/:heroVideoID"
              element={
                <Main
                  videos={videos}
                  heroVideo={heroVideo}
                  heroVideoID={heroVideoID}
                  setHeroVideoID={setHeroVideoID}
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
