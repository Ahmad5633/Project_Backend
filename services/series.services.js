import { SeriesModel, SeasonModel, EpisodeModel } from "../models/index.js";

export const seriesServices = {
  add: async (data) => {
    return SeriesModel.create(data);
  },
  getAll: async () => {
    return SeriesModel.find();
  },
  getOne: async (id) => {
    return SeriesModel.findById(id);
  },
  update: async (id, data) => {
    return SeriesModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return SeriesModel.findByIdAndDelete(id);
  },

  getSeasonSeries: async (id) => {
    return SeasonModel.find({ series_id: id });
  },

  getSeriesSeasonEpi: async (id) => {
    const season = await SeasonModel.findOne({ series_id: id });
    console.log(season);
    if (!season) {
      return "no season found";
    }
    const episode = await EpisodeModel.find({ season_id: season._id });
    console.log(episode);
    if (!episode) {
      return "no episode found";
    }
    return episode;
  },
};
