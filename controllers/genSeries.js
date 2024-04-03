import { genresSeries } from "../services/genSeries.js";
import { httpResponse } from "../utils/index.js";

export const genresSeriesController = {
  add: async (req, res) => {
    try {
      const data = await genresSeries.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await genresSeries.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
  getOne: async (req, res) => {
    try {
      const data = await genresSeries.getOne(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  update: async (req, res) => {
    try {
      const data = await genresSeries.update(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const data = await genresSeries.delete(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
