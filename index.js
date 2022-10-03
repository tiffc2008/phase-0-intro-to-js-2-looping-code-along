const gifters = ["Tiff","Tina","Edward"]
const events = "surprise"

function writeCards(gifters, events){
    let cardArray = []
    for(let i = 0; i < gifters.length; i++){
    cardArray.push(`Thank you, ${gifters[i]}, for the wonderful ${events} gift!`);
    }
    return (cardArray)
}

writeCards(gifters,events)

function countDown(startNumber){
    while (startNumber >= 0) {
      console.log(startNumber--);
    }
  }
  countDown(10)