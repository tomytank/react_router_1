import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt="goods"
      />
      <button
        className="md-button shop-button"
        onClick={() => history.push("/items")}
      >
        Shop now!
      </button>
    </div>
  );
}

export default Home;
