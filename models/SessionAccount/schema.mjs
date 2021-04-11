const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");
export const schema = new mongoose.Schema({
	userId: mongoose.ObjectId,
	providerAccountId: Int32,
});
