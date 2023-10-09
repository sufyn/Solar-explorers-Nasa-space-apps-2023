let elements = Array.from(document.querySelectorAll('.planet'));

elements.forEach(function (el) {
  el.addEventListener("click", () => {
    let list = document.getElementById("more-info");

    while (list.childNodes.length) {
      list.childNodes.forEach(node => {
        list.removeChild(node);
      })
    }

    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${el.__data__.id}?data=englishName,aphelion,perihelion,semimajorAxis,eccentricity,density,gravity,inclination,flattening`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let h1;
        let text;

        Object.entries(data).forEach(d => {
          switch (d[0]) {
            case "englishName":
              h1 = document.createElement("h1");
              h1.className = "more-info-title";
              text = document.createTextNode(d[1]);
              h1.appendChild(text);
              document.getElementById("more-info").appendChild(h1);
              break;
            case "semimajorAxis":
              li = document.createElement("li");
              text = document.createTextNode(`Semimajor Axis: ${d[1]} km`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "perihelion":
              li = document.createElement("li");
              text = document.createTextNode(`Perihelion: ${d[1]} km`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "aphelion":
              li = document.createElement("li");
              text = document.createTextNode(`Aphelion: ${d[1]} km`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "eccentricity":
              li = document.createElement("li");
              text = document.createTextNode(`Eccentricity: ${d[1]}`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "inclination":
              li = document.createElement("li");
              text = document.createTextNode(`Orbital Inclination: ${d[1]}°`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "density":
              li = document.createElement("li");
              text = document.createTextNode(`Density: ${d[1]} g/cm³`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "gravity":
              li = document.createElement("li");
              text = document.createTextNode(`Gravity: ${d[1]} m/s²`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
            case "flattening":
              li = document.createElement("li");
              text = document.createTextNode(`Ellipticity: ${d[1]}`);
              li.appendChild(text);
              document.getElementById("more-info").appendChild(li);
              break;
          }
        })
      });
  })
})

// API - Solar System OpenData
// https://api.le-systeme-solaire.net/en/
