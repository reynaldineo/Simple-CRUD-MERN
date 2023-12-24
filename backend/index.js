import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";

const app = express();

app.use(cors()); // untuk menghandle cors origin
app.use(express.json()); // untuk menghandle request json
app.use(FileUpload()); // untuk menghandle file upload

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
