import React from "react";
import Card from "../Components/CardType1";
import hage from "../Images/hage.jpg";
import "../CSS/LatestSection.css";
import CardHeader from "./CardHeader";
import LatestCard from "../Components/CardType1";

function LatestSection() {
  return (
    <>
    <div classnam="firstTwoSections">
    <CardHeader iconClass="fa-solid fa-tv" title=". Latest & Airing" />

      <div className="lines" style={{marginTop:'1.5em'}}>
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
      </div>

      <div className="lines" style={{marginBottom:'4em'}}>
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
      </div>
    </div>

    <div classnam="firstTwoSections">
    <CardHeader iconClass="fa-solid fa-tv" title=". Top Rated" />

      <div className="lines" style={{marginTop:'1.5em', marginBottom:'1.5em'}}>
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
        <LatestCard
          heading="Hover over me"
          hoverText="This is additional information revealed on hover."
          image={hage}
        />
      </div>
    </div>
    </>
  );
}

export default LatestSection;
