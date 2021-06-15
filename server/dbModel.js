import mongoose from "mongoose";
const tiktokSchema = mongoose.Schema({
    posterurl: String,
    vidurl: String,
    likes: String,
    comments: String,
    shares: String,
    channel: String,
    detail: String,
    tickertext: String,
});
export default mongoose.model("Videos", tiktokSchema);