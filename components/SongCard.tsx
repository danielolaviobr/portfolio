import Link from "next/link";
import React from "react";
import { Song } from "types/Song";
import Image from "next/image";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <Link href={song.link} >
      <a className="flex flex-1 min-w-full md:flex-none md:min-w-0 md:w-64">
        <div className="flex items-center justify-start flex-1 min-w-full p-2 mb-6 border border-gray-100 rounded-md md:w-64 hover:border-gray-300 xl:mb-0">
          <Link href={song.album.link}>
            <a>
              <Image
                src={song.album.cover}
                width={64}
                height={64}
                alt={song.album.name}
                className="rounded-full"
                layout="fixed"
              />
            </a>
          </Link>
          <div className="ml-4">
            <Link href={song.link}>
              <a>
                <h3 className="font-semibold text-green-500 hover:underline line-clamp-1">
                  {song.name}
                </h3>
              </a>
            </Link>
            <Link href={song.artist.link}>
              <a>
                <span className="font-medium text-gray-200 hover:underline line-clamp-1">
                  {song.artist.name}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
}
