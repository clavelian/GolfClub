const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  let results = "";
  switch (true) {
    case strokes === 1:
      results = names[0];
      break;

    case strokes <= 2:
      results = names[1];
      break;

    case strokes === par - 1:
      results = names[2];
      break;

    case strokes === par:
      results = names[3];
      break;

    case strokes === par + 1:
      results = names[4];
      break;
    case strokes === par + 2:
      results = names[5];

    default:
      results = names[6];
  }

  // Only change code above this line
}

golfScore(5, 4);

/*
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
*/
