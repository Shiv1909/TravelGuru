import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);



  return (
    <>
      <h1>Images</h1>
    </>
  );
};

export default FeaturedTourList
