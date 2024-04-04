import { EpisodeModel, SeasonModel, StreamModel } from "../models/index.js";

export const episodeServices = {
  add: async (data) => {
    return EpisodeModel.create(data);
  },
  getAll: async () => {
    return EpisodeModel.find();
  },
  getOne: async (id) => {
    return EpisodeModel.findById(id);
  },
  update: async (id, data) => {
    return EpisodeModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return EpisodeModel.findByIdAndDelete(id);
  },
  getAllStream: async (id) => {
    return StreamModel.find({ episode_id: id });
  },
};
