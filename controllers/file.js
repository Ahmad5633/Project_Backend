
import fileModel from "../models/file.js";
import authenticate from "../middlewares/authenticate.js";
const FileController = {

    getAll :async (req, res)=> {
        try {
            const files = await fileModel.find();
            res.send(files);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getById: [authenticate, async (req, res) => {
        try {
            const file = await fileModel.findById(req.params.id);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
   
    create : async (req, res) => {
        try {
            const newFile = await fileModel.create(req.body);
            res.send(newFile);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateFileById :[authenticate , async (req, res) => {
        try {
            const file = await fileModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    }],
    deleteFileById : [authenticate , async (req, res) => {
        try {
            const file = await fileModel.findByIdAndDelete(req.params.id);
            res.send(file);
        } catch (error) {
            res.status(500).send(error);
        }
    }]
};

export default FileController ;