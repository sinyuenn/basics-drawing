var main = function (input) {
  var myOutputValue = "";
  var counter = 0;

  while (counter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "👍";
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + "<br>";
    counter = counter + 1;
  }

  return myOutputValue;
};
