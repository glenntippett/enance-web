import React from "react";

import { FeatureOne } from "../components/Features/FeatureOne";
import { FeatureTwo } from "../components/Features/FeatureTwo";
import { HeroTwo } from "../components/Hero/HeroTwo";

export const Homepage = () => {
  return (
    <>
      <HeroTwo />
      <FeatureOne />
      <FeatureTwo />
    </>
  );
};
