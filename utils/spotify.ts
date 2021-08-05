import qs from "qs";
import axios from "axios";

const SPOTIFY_API = "https://accounts.spotify.com/api/token";

const getToken = async () => {
  const { data } = await axios(SPOTIFY_API, {
    method: "POST",
    data: qs.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
    headers: {
      Authorization: `Basic ${process.env.SPOTIFY_CLIENT_AUTH}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return data.access_token;
};

export default getToken;
