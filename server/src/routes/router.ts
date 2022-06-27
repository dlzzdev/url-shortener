import { Router, Request, Response } from "express";
import shortid from "shortid";
import Url from "../models/Url";
import { validateUrl } from "../utils/validateUrl";
import "dotenv/config";

const router = Router();

router.get("/:urlId", async (req: Request, res: Response) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.hits++;
      url.save();
      return res.redirect(url.origUrl);
    } else {
      res.status(404).json("Página não encontrada em nosso banco de dados!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

router.post("/short", async (req: Request, res: Response) => {
  const { origUrl } = req.body;
  const base = process.env.BASE_URL;
  const urlId = shortid.generate();

  if (validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.status(200).json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;
        url = new Url({
          origUrl,
          shortUrl,
          urlId,
        });

        await url.save();
        res.status(201).json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("A URL infrmada é invalida.");
  }
});

export default router;
