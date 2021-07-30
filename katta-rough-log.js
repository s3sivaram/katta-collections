/*
countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")

*/

function countCorrectCharacters(str1, str2) {
  let correctposition = 0;
  if (str1.length !== str2.length) {
    throw "strings are of different length";
  }
  for (let i = 1; i <= str1.length; i++) {
    if (i * str1.charCodeAt(i - 1) == i * str2.charCodeAt(i - 1)) {
      //   console.log("char matched,pos=", str1.substr(i - 1, 1), i);
      correctposition = correctposition + 1;
    }
  }
  return correctposition;
}

let str1 = "adoog";
let str2 = "aboog";

/*
try {
  console.log(countCorrectCharacters(str1, str2));
} catch (e) {
  console.error(e);
}

*/

// -------------use filter method
/*countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")
*/

const countCorrectCharacters1 = (correctWord, guess) =>
  correctWord.length === guess.length
    ? [...correctWord].filter((val, idx) => val === guess[idx]).length
    : (() => {
        throw new Error();
      })();

console.log(countCorrectCharacters(str1, str2));

// ------------------------------------------------------------------------------------
// katta:
/*  /* solved by s3sivaram@gmail.com on 30Jul21
guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]

*/
var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

// -------primary func(1)-----------
function guessGifts(wishlist, presents) {
  let gifts = [];
  presents.filter((present) => {
    for (let eachpresent in present) {
      wishlist.map((wisheditem) => {
        if (
          wisheditem.size == present.size &&
          wisheditem.clatters == present.clatters &&
          wisheditem.weight == present.weight
        ) {
          gifts.push(wisheditem.name);
        }
      });
    }
  });
  return Array.from(new Set(gifts));
}

// -------/primary func(1)-----------

// --------------------------------Main flow---------------

console.log(guessGifts(wishlist, presents));

/**********************************************************************************/
/* solved by s3sivaram@gmail.com on 30Jul21
Coloured Triangles-Katta

Colour here:        G G        B G        R G        B R
Becomes colour:      G          R          B          G
With a bigger example:

R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G   ==> answer

*/
/*
// ----(1) Prime func------------
function datafilter(a, b) {
  source = ["R", "G", "B"];
  let res = source.filter((e) => {
    return e !== a && e != b;
  });
  return res;
  console.log(res);
}

function triangle(data) {
  // Return the answer
  let result = "";
  let row = data;
  let res = "";
  if (data.length == 1) {
    return data;
  }

  do {
    for (let i = 0; i <= row.length - 2; i++) {
      let firstchar = row.substr(i, 1);
      let nextchar = row.substr(i + 1, 1);
      if (firstchar == nextchar) {
        res = res + firstchar;
      } else {
        res = res + datafilter(firstchar, nextchar);
      }
    }
    row = res;
    res = "";
  } while (row.length >= 2);
  // console.log(row);
  // res = datafilter(row.substr(0, 1), row.substr(1, 1)).toString();
  return row;
}

// -------/Prme func-------
// ----main flow

// let row = "RRGBRGBB";
// let row = "GB";
let row = "B";

console.log(triangle(row));

*******************************************************************END********************
*/
