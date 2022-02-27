import { getImages } from "icloud-shared-album";

export default async function handler(req, res) {
  const data = await getImages("B0a5qXGF1GJgb4l");
  res.status(200).json(data);
}
