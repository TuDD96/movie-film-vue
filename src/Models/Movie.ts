import type { Category } from "./Category";
import type { Country } from "./Country";

export interface Movie {
  category: Category[];
  content: string;
  country: Country[];
  episode_current: string;
  lang: string;
  modified: {
    time: string;
  };
  name: string;
  origin_name: string;
  quality: string;
  slug: string;
  sub_docquyen: string;
  thumb_url: string;
  time: string;
  year: number;
  _id: string;
}

export interface Episodes {
  _id: string;
  episode: Episode[];
}

export interface Episode {
  server_name: string;
  server_data: LinkMovie[];
}

export interface LinkMovie {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
