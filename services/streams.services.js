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
    // Find the stream by ID
    const stream = await StreamModel.findById(id);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    if (!episode) {
      return "this stream has no episode";
    }
    // Find the season associated with the episode
    const season = await SeasonModel.findById(episode.season_id);
    if (!season) {
      return "no season found";
    }
    // Return the season information
    return season;
  },
  getSESS: async (id) => {
    // Find the stream by ID
    const stream = await StreamModel.findById(id);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    if (!episode) {
      return "this stream has no episode";
    }
    // Find the season associated with the episode
    const season = await SeasonModel.findById(episode.season_id);
    if (!season) {
      return "no season found";
    }
    //Find the series associated with the season
    const series = await SeriesModel.findById(season.series_id);
    if (!series) {
      return "no season found";
    }
    // Return the season information
    return series;
  },
  getSESGG: async (id) => {
    // Find the stream by ID
    const stream = await StreamModel.findById(id);
    console.log(stream);
    if (!stream) {
      return "Stream not found";
    }
    const episode = await EpisodeModel.findById(stream.episode_id);
    console.log(episode);
    if (!episode) {
      return "this stream has no episode";
    }
    // Find the season associated with the episode
    const season = await SeasonModel.findById(episode.season_id);
    console.log(season);
    if (!season) {
      return "no season found";
    }
    //Find the genreSeries associated with the season
    const genreSeries = await GenreSeriesModel.findOne(season.series_id);
    console.log(genreSeries);
    if (!genreSeries) {
      return "no season found";
    }
    //Find the Genre associated with genreSeries
    const genre = await GenreModel.findById(genreSeries.genre_id);
    if (!genre) {
      return "no season found";
    }
    // Return the season information
    return genre;
  },
};
