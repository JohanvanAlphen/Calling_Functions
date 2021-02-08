// No arguments

const paintWallRed = function () {
  console.log("The wall has been painted red")
}
paintWallRed();

// Single argument

const paintWall = function (item) {
  console.log("The wall has been painted", item)
}
paintWall("green");
paintWall("blue");

// Multiple arguments

const northWall = "The north wall has been painted"
const southeastWall = "The south-east wall has been painted"
const paintWallOrange = function (item) {
  console.log(northWall, item);
}
const paintWallGrey = function (item) {
  console.log(southeastWall, item);
}

paintWallOrange("orange");
paintWallGrey("grey");
