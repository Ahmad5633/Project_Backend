import { httpResponse } from "../utils/index.js";
import { streamServices } from "../services/index.js";

export const streamController = {
  add: async (req, res) => {
    try {
      const data = await streamServices.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await streamServices.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getOne: async (req, res) => {
    try {
      const data = await streamServices.getOne(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  update: async (req, res) => {
    try {
      const data = await streamServices.update(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const data = await streamServices.delete(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  streamEpisode: async (req, res) => {
    try {
      const data = await streamServices.streamEpisode(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
  streamUser: async (req, res) => {
    try {
      const data = await streamServices.streamUser(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getSES: async (req, res) => {
    try {
      const data = await streamServices.getSES(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getSESS: async (req, res) => {
    try {
      const data = await streamServices.getSES(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getSESGG: async (req, res) => {
    try {
      const data = await streamServices.getSESGG(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
