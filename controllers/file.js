
import FileModel from "../models/file.js";
import Authenticate from "../middlewares/authenticate.js";
const FileController = {

    getAll :async (req, res)=> {
        try {
            const files = await FileModel.find();
            res.send(files);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const file = await FileModel.findById(req.params.id);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    },
   
    create : async (req, res) => {
        try {
            const newFile = await FileModel.create(req.body);
            res.send(newFile);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateFileById :[Authenticate , async (req, res) => {
        try {
            const file = await FileModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteFileById : [Authenticate , async (req, res) => {
        try {
            const file = await FileModel.findByIdAndDelete(req.params.id);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default FileController ;