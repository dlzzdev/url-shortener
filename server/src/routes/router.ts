import { Router } from "express";
import { createShortUrl, getInfo, redirect } from "../controllers/UrlController";

const router = Router();

router.get("/:urlId", redirect);
router.get("/info/:urlId", getInfo);
router.post("/short", createShortUrl);

export default router;
