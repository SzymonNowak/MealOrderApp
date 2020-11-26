import express from "express";
import { addAddon, getAllAddons } from "../controllers/addonController.js";
const router = express.Router();

router.get("/addAddon", addAddon);
router.get("/getAllAddons", getAllAddons);

export default router;