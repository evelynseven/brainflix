import "./Main.scss";
import { useEffect, useState } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoComment from "../../components/VideoComment/VideoComment";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import axios from "axios";

function Main() {
  const apiKey = "8190a6f6-fa28-4c67-8202-ae962008831d";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";

  const [videos, setVideos] = useState([]);
  const [heroVideoID, setHeroVideoID] = useState();
  const [heroVideo, setHeroVideo] = useState();

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

  const { heroVideoID: newHeroID } = useParams();

  useEffect(() => {
    if (newHeroID !== heroVideoID) {
      setHeroVideoID(newHeroID);
    }
  }, [newHeroID]);

  return (
    videos &&
    heroVideo && (
      <main className="main">
        <HeroBanner heroVideo={heroVideo} />
        <div className="main__container">
          <div className="main__main-content">
            <VideoDetail heroVideo={heroVideo} />
            <VideoComment heroVideo={heroVideo} />
          </div>
          <VideoList videos={videos} heroVideoID={heroVideo.id} />
        </div>
      </main>
    )
  );
}

export default Main;
