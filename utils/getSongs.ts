import getToken from "./spotify";
import axios from "axios";
import { Song } from "types/Song";

const getSongs = async (limit = 4, type = "tracks"): Promise<Song[]> => {
  const token = await getToken();

  const { data } = await axios(
    `https://api.spotify.com/v1/me/top/${type}?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data.items.map(
    (item: any): Song => ({
      artist: {
        name: item.artists[0].name,
        link: item.artists[0].external_urls.spotify,
      },
      album: {
        name: item.album.name,
        link: item.album.external_urls.spotify,
        cover: item.album.images[2].url,
      },
      name: item.name,
      link: item.external_urls.spotify,
      id: item.id,
    })
  );
};

export default getSongs;
