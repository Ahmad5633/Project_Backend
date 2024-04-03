import { GenreModel } from "../models/index.js";

export const genresServices = {
  add: async (data) => {
    return GenreModel.create(data);
  },
  getAll: async () => {
    return GenreModel.find();
  },
  getOne: async (id) => {
    return GenreModel.findById(id);
  },
  update: async (id, data) => {
    return GenreModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return GenreModel.findByIdAndDelete(id);
  },
};
