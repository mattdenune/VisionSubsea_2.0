import React from 'react';
import { Routes, Route } from "react-router-dom";

import Landingpage from "./components/landingpage";
import About from './components/about';
import MarineCasualtyResponse from './components/marineCasualtyResponse';
import AssetInfrastructure from './components/assetInfrastructure';
import WaterTank from './components/waterTank';
import NearshoreMooring from './components/nearshoreMooring';
import SonarImaging from './components/sonarImaging';
import Consulting from './components/consulting';
import HabitatSurvey from './components/HabitatSurvey';
import PageNotFound from './components/PageNotFound';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/assetInfrastructure" element={<AssetInfrastructure />} />
      <Route path="/marineResponse" element={<MarineCasualtyResponse />} />
      <Route path="/waterTank" element={<WaterTank />} />
      <Route path="/nearshoreMooring" element={<NearshoreMooring />} />
      <Route path="/sonarImaging" element={<SonarImaging />} />
      <Route path="/habitatSurvey" element={<HabitatSurvey />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default PageRoutes;
