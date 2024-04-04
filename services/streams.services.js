import {
  SeasonModel,
  StreamModel,
  SeriesModel,
  GenreModel,
} from "../models/index.js";
import { EpisodeModel, GenreSeriesModel } from "../models/index.js";

export const streamServices = {
  add: async (data) => {
    return StreamModel.create(data);
  },
  getAll: async () => {
    return StreamModel.find();
  },
  getOne: async (id) => {
    return StreamModel.findById(id);
  },
  update: async (id, data) => {
    return StreamModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return StreamModel.findByIdAndDelete(id);
  },
  streamEpisode: async (id) => {
    return StreamModel.find({ episode_id: id }).populate("episode_id");
  },
  streamUser: async (id) => {
    return StreamModel.findById(id).populate("user_id");
  },
  getSES: async (id) => {
    const stream = await StreamModel.findById(id);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    if (!episode) {
      return "this stream has no episode";
    }
    const season = await SeasonModel.findById(episode.season_id);
    if (!season) {
      return "no season found";
    }
    return season;
  },
  getSESS: async (id) => {
    const stream = await StreamModel.findById(id);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    if (!episode) {
      return "this stream has no episode";
    }
    const season = await SeasonModel.findById(episode.season_id);
    if (!season) {
      return "no season found";
    }
    const series = await SeriesModel.findById(season.series_id);
    if (!series) {
      return "no season found";
    }
    return series;
  },
  getSESGG: async (id) => {
    const stream = await StreamModel.findById(id);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    if (!episode) {
      return "this stream has no episode";
    }
    const season = await SeasonModel.findById(episode.season_id);
    console.log(season);
    if (!season) {
      return "no season found";
    }
    const genreSeries = await GenreSeriesModel.findOne(season.series_id);
    console.log(genreSeries);
    if (!genreSeries) {
      return "no season found";
    }
    const genre = await GenreModel.findById(genreSeries.genre_id);
    if (!genre) {
      return "no season found";
    }
    return genre;
  },
};
