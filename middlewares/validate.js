const validate = (schema) => (req, res, next) => {
	const error = new schema(req.body).validateSync();
	if (error) {
		res.status(400).send(error);
	} else {
		next();
	}
};

export default validate;