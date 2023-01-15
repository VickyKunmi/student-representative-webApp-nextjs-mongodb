import dbConnect from "../../../util/mongo";
import Faculty from "../../../models/Faculty";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const faculties = await Faculty.find();
      res.status(200).json(faculties);
    }catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const faculty = await Faculty.create(req.body);
      res.status(201).json(faculty);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
