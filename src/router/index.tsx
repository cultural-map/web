import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { HomeRoutes } from "_pages/home/routes/routes";

export const Router = (): ReactElement => <Routes>{HomeRoutes}</Routes>;
