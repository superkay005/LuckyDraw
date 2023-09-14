function drawNext() {
  var lastdraw = $("#luckyperson").html();
  var alllucky = $("#drawhistory").html();
  $("#drawhistory").html(lastdraw + '<br />' + alllucky);
  var personname = data[Math.floor(Math.random() * data.length)];
  $("#luckyperson").html(personname);

    // Delete all occurrences of the winner from the data array
  data = data.filter(function(item) {
    return item !== personname;
  });
}
