import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import qs from "qs";
import getToken from "utils/spotify";

interface SongsNextApiRequest extends NextApiRequest {
  query: {
    limit: string;
    type: "tracks" | "artist";
  };
}

export default async (req: SongsNextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const token = await getToken();

      const { limit = "3", type = "tracks" } = req.query;

      const { data } = await axios(
        `https://api.spotify.com/v1/me/top/${type}?limit=${limit}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const songs = data.items.map((item) => ({
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
      }));

      return res.json(songs);
    }
    return res
      .status(405)
      .json({ message: "Only GET methods are authorized." });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};
