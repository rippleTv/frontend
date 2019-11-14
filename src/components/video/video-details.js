import React from "react";
import { View, StarRatings } from "../../common/svg";
import Button from "../../common/button";

export default function videoDetails() {
  return (
    <section className="video__details">
      <section className="video__info">
        <h2>Men's Club</h2>
        <div>
          <span className="views">
            <View></View>200
          </span>

          <Button
            buttonType="yellow-button"
            label="ADD TO LIST"
            width="143px"
          />
        </div>
      </section>
      <section className="video__stats">
        <StarRatings />|<span>Drama</span>|<span>Season 1</span>|
        <span>Episode 5</span>|<span>38 min</span>
      </section>
      <section className="description">
        <article>
          With Baaj Adebule, Ayoola Ayolola, Daniel Etim Effiong, Efa Iwara. the
          men's club takes us on a journey of 4 friends ... the men's club takes
          us on a journey of 4 friends surrounded by women, business and the
          hassles of the city.
        </article>
      </section>
    </section>
  );
}
