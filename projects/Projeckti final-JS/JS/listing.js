const listingOne = [
  { id: 1 },
  { name: "cozzy five star aparments" },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  { price: "899" },
  { currency: "$" },
  {
    location: {
      city: "barcelona",
      country: "spain",
    },
  },
];
document.getElementById("deletelistOne").addEventListener("click", function () {
  const paragraphOne = document.querySelector(".first");
  if (paragraphOne) {
    paragraphOne.remove();
  }
});
document.getElementById("deletelistTwo").addEventListener("click", function () {
  const paragraphTwo = document.querySelector(".second");
  if (paragraphTwo) {
    paragraphTwo.remove();
  }
});
document.getElementById("deletelistThree").addEventListener("click", function () {
  const paragraphThree = document.querySelector(".third");
  if (paragraphThree) {
    paragraphThree.remove();
  }
});

const paragraphOne = document.querySelector('.d');

paragraphOne.addEventListener('click', function () {
  this.contentEditable = true;
  this.focus();
});

const paragraphTwo = document.querySelector('.e');

paragraphTwo.addEventListener('click',function () {
    this.contentEditable = true;
    this.focus();
})

let paragraphThree = document.querySelector('.f');

paragraphThree.addEventListener('click', function() {
    this.contentEditable = true;
    this.focus();
})

let paragraphFour = document.querySelector('.o');

paragraphFour.addEventListener('click', function () {
  this.contentEditable = true;
  this.focus();
});

let paragraphFive = document.querySelector('.k');

paragraphFive.addEventListener('click', function () {
  this.contentEditable = true;
  this.focus();
});

let paragraphSix = document.querySelector('.l');

paragraphSix.addEventListener('click', function () {
  this.contentEditable = true;
  this.focus();
});