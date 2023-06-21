import React from "react";
import ImageGallery from "react-image-gallery";

import artworkAndMyFamily from "../images/artwork-and-my-family.jpg";
import bikestopnearhotel from "../images/bike-stop-near-hotel.jpg";
import commercialCenter from "../images/commercial-center.jpg";
import financialIndustryInCrowdedSingaporeArea from "../images/financial-industry-in-crowded-singapore-area.jpg";
import firstMealInSingapore from "../images/first-meal-in-singapore.jpg";
import graffiti from "../images/graffiti.jpg";
import manyGiantBuildings from "../images/many-giant-buildings.jpg";
import selfieInSingaporeFlyer from "../images/selfie-in-singapore-flyer.jpg";
import streetView from "../images/street-view.jpg";
import theStructureOfSingaporeFlyer from "../images/the-structure-of-singapore-flyer.jpg";

const images = [
  {
    original: artworkAndMyFamily,
    thumbnail: artworkAndMyFamily,
    description: "Artwork and My Family",
    originalHeight: "450px",
  },
  {
    original: bikestopnearhotel,
    thumbnail: bikestopnearhotel,
    description: "Bike Stop Near Hotel",
    originalHeight: "450px",
  },
  {
    original: commercialCenter,
    thumbnail: commercialCenter,
    description: "Commercial Center",
    originalHeight: "450px",
  },
  {
    original: financialIndustryInCrowdedSingaporeArea,
    thumbnail: financialIndustryInCrowdedSingaporeArea,
    description: "Financial Industry in Crowded Singapore Area",
    originalHeight: "450px",
  },
  {
    original: firstMealInSingapore,
    thumbnail: firstMealInSingapore,
    description: "First Meal in Singapore",
    originalHeight: "450px",
  },
  {
    original: graffiti,
    thumbnail: graffiti,
    description: "Graffiti",
    originalHeight: "450px",
  },
  {
    original: manyGiantBuildings,
    thumbnail: manyGiantBuildings,
    description: "Many Giant Buildings",
    originalHeight: "450px",
  },
  {
    original: selfieInSingaporeFlyer,
    thumbnail: selfieInSingaporeFlyer,
    description: "Selfie in Singapore Flyer",
    originalHeight: "450px",
  },
  {
    original: streetView,
    thumbnail: streetView,
    description: "Street View",
    originalHeight: "450px",
  },
  {
    original: theStructureOfSingaporeFlyer,
    thumbnail: theStructureOfSingaporeFlyer,
    description: "The Structure of Singapore Flyer",
    originalHeight: "450px",
  },
];

function GalleryPage() {
  return (
    <>
      <h2>Gallery</h2>
      <article className="gallery">
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage;