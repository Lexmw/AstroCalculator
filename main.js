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
        option.value = item[1];
        select.appendChild(option);
    }
    
      

  function calculateWeight(weight, planetName) {
        for( var i=0; i < planets.length; i++) {
          // console.log('inside for loop');
          // console.log(planetName);
            if(planetName == planets[i][0]) {
                var result = weight * planets[i][1];
                // console.log(result);
                return result;
            }
        }
      }

        
  function handleClickEvent() {
  //   // 3. Create a variable called userWeight and assign the value of the user's weight.
          var userWeight = document.getElementById("user-weight").value;
  //   // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
          var planetName = planets[select.selectedIndex][0];
          // console.log(planetName)
  //   // 5. Create a variable called result and assign the value of the new calculated weight.
          var result = calculateWeight(userWeight, planetName);
          // console.log(result);
  //   // 6. Write code to display the message shown in the screenshot.
          document.getElementById('output').innerText = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  }

  document.getElementById('calculate-button').onclick = () => handleClickEvent();
