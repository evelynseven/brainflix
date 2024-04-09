import axios from "axios";
// require("dotenv").config();

// const apiKey = "8190a6f6-fa28-4c67-8202-ae962008831d";
// const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const baseUrl = "http://localhost:8080";

const fetchVideos = async () => {
  try {
    const response = await axios.get(`${baseUrl}/videos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchHeroVideo = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/videos/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postVideo = async (video) => {
  try {
    const response = await axios.post(`${baseUrl}/videos/newVideo`, video);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postComment = async (comment, videoId) => {
  try {
    const response = await axios.post(
      `${baseUrl}/videos/${videoId}/comments`,
      comment
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deleteComment = async (videoId, commentId) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/videos/${videoId}/comments/${commentId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { fetchVideos, fetchHeroVideo, postVideo, postComment, deleteComment };
