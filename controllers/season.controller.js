import { seasonServices } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const seasonController = {
  add: async (req, res) => {
    try {
      const data = await seasonServices.add(req.body);
      console.log(data);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await seasonServices.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const data = await seasonServices.getOne(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },
  update: async (req, res) => {
    try {
      const data = await seasonServices.update(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const data = await seasonServices.delete(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getAllEpisodeById: async (req, res) => {
    try {
      const data = await seasonServices.getAllEpisodeById(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
