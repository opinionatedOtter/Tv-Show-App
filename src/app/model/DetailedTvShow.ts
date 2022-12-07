import {Ishow} from 'tvmaze-api-ts'

export type DetailedTvShow = Ishow & {
  uid: string;
};

export type DetailedTvShows = DetailedTvShow[];

export type TvShow = {
  uid: string,
  id: string,
  name: string;
}

export type TvShows = TvShow[];
