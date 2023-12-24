import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors()); // untuk menghandle cors origin
app.use(express.json()); // untuk menghandle request json
app.use(FileUpload()); // untuk menghandle file upload
app.use(express.static("public")); // untuk menghandle static file
app.use(ProductRoute); // untuk menghandle route product

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
