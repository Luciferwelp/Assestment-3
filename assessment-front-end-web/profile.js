let favColorButton = document.querySelector(".color")
let favPlaceButton = document.querySelector(".place")
let favRitualButton = document.querySelector(".ritual")
 
          function favColor(){ 
            alert('My favorite color is red');
          }

        favColorButton.addEventListener('click', favColor)
        function favPlace(){ 
            alert('My Place in the whole world is Ireland');
          }

        favPlaceButton.addEventListener('click', favPlace)
        function favRitual(){ 
            alert('Satanic Rituals');
          }

        favRitualButton.addEventListener('click', favRitual)