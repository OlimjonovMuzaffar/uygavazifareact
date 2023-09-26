let random = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function randomColor() {
  let card1 = "#";
  let card2 = "#";
  let card3 = "#";
  let card4 = "#";

  let newArr = []


    for (let i = 0; i < 6; i++) {
      let randomNumber1 = Math.trunc(Math.random() * random.length);
      let randomNumber2 = Math.trunc(Math.random() * random.length);
      let randomNumber3 = Math.trunc(Math.random() * random.length);
      let randomNumber4 = Math.trunc(Math.random() * random.length);
      card1 += random[randomNumber1];
      card2 += random[randomNumber2];
      card3 += random[randomNumber3];
      card4 += random[randomNumber4];
    }
    newArr.push(card1);
    newArr.push(card2);
    newArr.push(card3);
    newArr.push(card4);

 return newArr
}

export default randomColor;
