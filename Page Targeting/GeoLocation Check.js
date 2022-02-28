
(function () {
    let url = 'https://api.freegeoip.app/json/85.46.114.174?apikey=267daa30-8f41-11ec-a911-9591b89e48f4'; 
    fetch(url)
      .then((city) => {
          let cityJason = city.json();
          cityJason.then(data => {
                  if (data.city == "Luisago") {
                      console.log("evrika!");
                   targetingPassed();
                  }
                   else
                   {return null;}
          });
      });
})();