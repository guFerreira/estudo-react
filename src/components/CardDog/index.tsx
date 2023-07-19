
const dog = require('../../images/cachorro-pug.jpg')

type CardDogProp = {
  id:string
}

function CardDog({id}:CardDogProp) {
  return (
    <div id={id} className="cardDogContainer">
      <h1>
        teste
      </h1>

      <img className="imageDog" src={dog}></img>

    </div>
  );
}

export default CardDog;