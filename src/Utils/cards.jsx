

function Cards({ image, number, width, height, fontSize, imageWidth, imageHeight }) {
  return (
    <div className="cards-container" style={{ width, height }}>
      { number === "" ? (<img src={image} style={{width:"93%", height:"93%", marginTop:"2%"}}></img>): (<img style={{width: imageWidth, height: imageHeight}} className="suit-image" src={image} />)}
      <p style={{fontSize: fontSize}} className="rightside-up-number">{number}</p>
      <p style={{fontSize: fontSize}} className="upside-down-number">{number}</p>
    </div>
  );
}

Cards.defaultProps = {
  width: "98px",
  height: "150px",
  fontSize: "1.1em",
  imageWidth: "75%",
  imageHeight: "60%"
};

export default Cards;