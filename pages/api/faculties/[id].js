import dbConnect from "../../../util/mongo";
import Faculty from "../../../models/Faculty";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const faculty = await Faculty.findById(id);
      res.status(200).json(faculty);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const faculty = await Faculty.findByIdAndUpdate(req.body);
      res.status(201).json(faculty);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      const faculty = await Faculty.findByIdAndDelete(id);
      res.status(201).json("The faculty has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
