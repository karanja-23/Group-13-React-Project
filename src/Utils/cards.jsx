// Import the suit images
import suitSpade from "../assets/suit.png";
import suitHeart from "../assets/suit.png";
import suitDiamond from "../assets/suit.png";
import suitClub from "../assets/suit.png";

function Cards({ image, number, width, height, fontSize, imageWidth, imageHeight, suit }) {
  // Map suit string to the corresponding image
  const suitImageMap = {
    "♠": suitSpade,
    "♥": suitHeart,
    "♦": suitDiamond,
    "♣": suitClub,
  };

  return (
    <div className="cards-container" style={{ width, height }}>
      {number === "" ? (
        <img src={image} style={{ width: "89%", height: "87%", marginTop: "9%" }} alt="Card back" />
      ) : (
        <>
          {/* Display the suit image inside the card */}
          <img
            style={{ width: imageWidth, height: imageHeight }}
            className="suit-image"
            src={suitImageMap[suit]} // Use the correct suit image
            alt="Suit"
          />
          <p style={{ fontSize }} className="rightside-up-number">
            {number}
          </p>
          <p style={{ fontSize }} className="upside-down-number">
            {number}
          </p>
        </>
      )}
    </div>
  );
}

Cards.defaultProps = {
  width: "98px",
  height: "150px",
  fontSize: "1.1em",
  imageWidth: "75%",
  imageHeight: "60%",
};

export default Cards;
