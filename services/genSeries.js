import { GenreSeriesModel } from "../models/index.js";

export const genresSeries = {
  add: async (data) => {
    return GenreSeriesModel.create(data);
  },
  getAll: async () => {
    return GenreSeriesModel.find();
  },
  getOne: async (id) => {
    return GenreSeriesModel.findById(id);
  },
  update: async (id, data) => {
    return GenreSeriesModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
