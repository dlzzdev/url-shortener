import { Request, Response } from "express";
import shortid from "shortid";
import Url from "../models/Url";
import { validateUrl } from "../utils/validateUrl";
import "dotenv/config";

export const redirect = async (req: Request, res: Response) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.hits++;
      url.save();
      return res.redirect(url.origUrl);
    } else {
      return res
        .status(404)
        .json("Página não encontrada em nosso banco de dados!");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Serviço indisponível no momento.");
  }
};

export const getInfo = async (req: Request, res: Response) => {
  const urlId = req.params.urlId;
  try {
    let url = await Url.findOne({ urlId });
    return res.status(200).json(url);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Serviço indisponível no momento.");
  }
};

export const createShortUrl = async (req: Request, res: Response) => {
  const { origUrl } = req.body;
  const base = process.env.BASE_URL;
  const urlId = shortid.generate();

  if (validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        return res.status(200).json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;
        url = new Url({
          origUrl,
          shortUrl,
          urlId,
        });

        await url.save();
        return res.status(201).json(url);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json("Serviço indisponível no momento.");
    }
  } else {
    return res.status(400).json("A URL informada é invalida.");
  }
};
