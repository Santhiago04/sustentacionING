import { config } from "dotenv";
import express from "express";
import path from "path";
import { __dirname } from "./util/__dirname.js";
import { connectDatabase } from "./config/database.js";
import artistaRoutes from "./routes/artistaRoutes.js";
import albumRoutes from "./routes/albumRoutes.js";
import { artistaModel } from "./model/artistaModel.js";
import { albumModel } from "./model/albumModel.js";


config();


connectDatabase()
  .then(() => {
    console.log("Conexión Base de Datos Exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la Base de Datos:", error);
    process.exit(1);
  });


const server = express();
const PORT = process.env.PORT || 3000;
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));


server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const usuarios = await artistaModel.find(); 
    res.render("index", { usuarios }); 
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).send("Error al obtener los usuarios");
  }
});


server.use(artistaRoutes);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));