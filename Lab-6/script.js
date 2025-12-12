function myWeddingPlanner(){
var guests = parseInt (prompt ("How many guests do you have?"));
if(isNaN(guests) || guests<1){
  alert("Enter valid number that is greater than zero");
  return;
}
var tables = parseInt (prompt("How many tables do you want?"));
if( isNaN(tables)|| tables<1){
  alert("Enter valid number that is greater than zero");
  return;
}
var remainder = guests%tables;
if (remainder == 0) {
  var guests_at_each_table = guests/tables;
  txt = ("Your " + guests + " guests will be seated as follows: " + tables + " tables of " + guests_at_each_table + ".");
} 
else{
  var floor_guests = Math.floor (guests/tables);
  txt = ("Your " + guests + " guests will be seated as follows: " +
    remainder + " tables of " + (floor_guests + 1 )+ ", and " + (tables - remainder) + " table of " + floor_guests + "."
  )
}
document.getElementById("demo").innerHTML = txt
}











