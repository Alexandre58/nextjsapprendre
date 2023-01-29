import fs from "fs";
import path from "path";
//recuperer une base donnée => dans ce cas la base est dans data mais pourrait provenir d'une autre base de donnée
//dans ce cas localhost:3000/api/apicreate
export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "pathsvoc.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
    console.log(data);
  }
}
