// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

    //populate drop down

    var select = document.getElementById("planets");

    planets.forEach(pullDown);

    function pullDown(item) {
        var option = document.createElement("option");
        option.innerHTML = item[0];
        select.appendChild(option);
    }
    
      

  function calculateWeight(weight, planetName) {
      var weight = document.getElementById("user-weight").value;
      var planetName = planets[select.selectedIndex][0];
        for( var i=0; i < planets.length; i++) {
            if(planetName == planets[i][0]) {
                var result = weight * planets[i][1];
                return result;
            }
        }
      }

        
  function handleClickEvent() {
  //   // 3. Create a variable called userWeight and assign the value of the user's weight.
          var userWeight = document.getElementById("user-weight").value;
  //   // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
          var planetName = planets[select.selectedIndex][0];
  //   // 5. Create a variable called result and assign the value of the new calculated weight.
          var result = calculateWeight(userWeight, planetName);
  //   // 6. Write code to display the message shown in the screenshot.
          document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  }

  document.getElementById('calculate-button').onclick = () => handleClickEvent();
