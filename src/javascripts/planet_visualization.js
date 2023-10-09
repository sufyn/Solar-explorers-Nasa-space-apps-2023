let chartData = [
  { "category": "Semimajor", "planet": "Mercury", "total": 57909227, "color": "#b1adad" },
  { "category": "Semimajor", "planet": "Venus", "total": 108208475, "color": "#f4dca9" },
  { "category": "Semimajor", "planet": "Earth", "total": 149598262, "color": "#739ac4" },
  { "category": "Semimajor", "planet": "Mars", "total": 227943824, "color": "#ad0000" },
  { "category": "Semimajor", "planet": "Jupiter", "total": 778340821, "color": "#d2c39a" },
  { "category": "Semimajor", "planet": "Saturn", "total": 1426666422, "color": "#f4a587" },
  { "category": "Semimajor", "planet": "Uranus", "total": 2870658186, "color": "#b2b6c7" },
  { "category": "Semimajor", "planet": "Neptune", "total": 4498396441, "color": "#3f53ba" },

  { "category": "Perihelion", "planet": "Mercury", "total": 46001200, "color": "#b1adad" },
  { "category": "Perihelion", "planet": "Venus", "total": 107477000, "color": "#f4dca9" },
  { "category": "Perihelion", "planet": "Earth", "total": 147095000, "color": "#739ac4" },
  { "category": "Perihelion", "planet": "Mars", "total": 206700000, "color": "#ad0000" },
  { "category": "Perihelion", "planet": "Jupiter", "total": 740379835, "color": "#d2c39a" },
  { "category": "Perihelion", "planet": "Saturn", "total": 1349823615, "color": "#f4a587" },
  { "category": "Perihelion", "planet": "Uranus", "total": 2147483647, "color": "#b2b6c7" },
  { "category": "Perihelion", "planet": "Neptune", "total": 2147483647, "color": "#3f53ba" },

  { "category": "Aphelion", "planet": "Mercury", "total": 69816900, "color": "#b1adad" },
  { "category": "Aphelion", "planet": "Venus", "total": 108939000, "color": "#f4dca9" },
  { "category": "Aphelion", "planet": "Earth", "total": 152100000, "color": "#739ac4" },
  { "category": "Aphelion", "planet": "Mars", "total": 249200000, "color": "#ad0000" },
  { "category": "Aphelion", "planet": "Jupiter", "total": 816620000, "color": "#d2c39a" },
  { "category": "Aphelion", "planet": "Saturn", "total": 1503509229, "color": "#f4a587" },
  { "category": "Aphelion", "planet": "Uranus", "total": 2147483647, "color": "#b2b6c7" },
  { "category": "Aphelion", "planet": "Neptune", "total": 2147483647, "color": "#3f53ba" },

  { "category": "Eccentricity", "planet": "Mercury", "total": 0.2056, "color": "#b1adad" },
  { "category": "Eccentricity", "planet": "Venus", "total": 0.0067, "color": "#f4dca9" },
  { "category": "Eccentricity", "planet": "Earth", "total": 0.0167, "color": "#739ac4" },
  { "category": "Eccentricity", "planet": "Mars", "total": 0.0935, "color": "#ad0000" },
  { "category": "Eccentricity", "planet": "Jupiter", "total": 0.0489, "color": "#d2c39a" },
  { "category": "Eccentricity", "planet": "Saturn", "total": 0.0565, "color": "#f4a587" },
  { "category": "Eccentricity", "planet": "Uranus", "total": 0.0457, "color": "#b2b6c7" },
  { "category": "Eccentricity", "planet": "Neptune", "total": 0.0113, "color": "#3f53ba" },

  { "category": "Inclination", "planet": "Mercury", "total": 7, "color": "#b1adad" },
  { "category": "Inclination", "planet": "Venus", "total": 3.39, "color": "#f4dca9" },
  { "category": "Inclination", "planet": "Earth", "total": 0, "color": "#739ac4" },
  { "category": "Inclination", "planet": "Mars", "total": 1.85, "color": "#ad0000" },
  { "category": "Inclination", "planet": "Jupiter", "total": 1.304, "color": "#d2c39a" },
  { "category": "Inclination", "planet": "Saturn", "total": 2.485, "color": "#f4a587" },
  { "category": "Inclination", "planet": "Uranus", "total": 0.772, "color": "#b2b6c7" },
  { "category": "Inclination", "planet": "Neptune", "total": 1.769, "color": "#3f53ba" },

  { "category": "Density", "planet": "Mercury", "total": 5.4291, "color": "#b1adad" },
  { "category": "Density", "planet": "Venus", "total": 5.243, "color": "#f4dca9" },
  { "category": "Density", "planet": "Earth", "total": 5.5136, "color": "#739ac4" },
  { "category": "Density", "planet": "Mars", "total": 3.9341, "color": "#ad0000" },
  { "category": "Density", "planet": "Jupiter", "total": 1.3262, "color": "#d2c39a" },
  { "category": "Density", "planet": "Saturn", "total": 0.6871, "color": "#f4a587" },
  { "category": "Density", "planet": "Uranus", "total": 1.27, "color": "#b2b6c7" },
  { "category": "Density", "planet": "Neptune", "total": 1.638, "color": "#3f53ba" },

  { "category": "Gravity", "planet": "Mercury", "total": 3.7, "color": "#b1adad" },
  { "category": "Gravity", "planet": "Venus", "total": 8.87, "color": "#f4dca9" },
  { "category": "Gravity", "planet": "Earth", "total": 9.8, "color": "#739ac4" },
  { "category": "Gravity", "planet": "Mars", "total": 3.71, "color": "#ad0000" },
  { "category": "Gravity", "planet": "Jupiter", "total": 24.79, "color": "#d2c39a" },
  { "category": "Gravity", "planet": "Saturn", "total": 10.44, "color": "#f4a587" },
  { "category": "Gravity", "planet": "Uranus", "total": 8.87, "color": "#b2b6c7" },
  { "category": "Gravity", "planet": "Neptune", "total": 11.15, "color": "#3f53ba" },

  { "category": "Ellipticity", "planet": "Mercury", "total": 0, "color": "#b1adad" },
  { "category": "Ellipticity", "planet": "Venus", "total": 0, "color": "#f4dca9" },
  { "category": "Ellipticity", "planet": "Earth", "total": 0.00335, "color": "#739ac4" },
  { "category": "Ellipticity", "planet": "Mars", "total": 0.00589, "color": "#ad0000" },
  { "category": "Ellipticity", "planet": "Jupiter", "total": 0.06487, "color": "#d2c39a" },
  { "category": "Ellipticity", "planet": "Saturn", "total": 0.09796, "color": "#f4a587" },
  { "category": "Ellipticity", "planet": "Uranus", "total": 0.02293, "color": "#b2b6c7" },
  { "category": "Ellipticity", "planet": "Neptune", "total": 0.01708, "color": "#3f53ba" },
]

chartOptions = [{
  "captions": [
    {
      "Semimajor": "Semimajor", "Perihelion": "Perihelion", "Aphelion": "Aphelion", "Eccentricity": "Eccentricity",
      "Inclination": "Inclination", "Density": "Density", "Gravity": "Gravity", "Ellipticity": "Ellipticity"
    }
  ],
  "color": [
    {
      "Semimajor": "#b1adad", "Perihelion": "#f4dca9", "Aphelion": "#739ac4", "Eccentricity": "#ad0000",
      "Inclination": "#d2c39a", "Density": "#f4a587", "Gravity": "#b2b6c7", "Ellipticity": "#3f53ba"
    }
  ],
  "xaxis": "category",
  "xaxisl1": "planet",
  "yaxis": "total"
}]

function BuildPie(id, chartData, options, level) {
  let xVarName;
  let divisionRatio = 2.5;
  let legendoffset = 0;

  let header = document.getElementById("chart");
  let h1 = document.getElementById("legend-header")
  if (h1) header.removeChild(h1)

  chart = d3.select("#" + id + " .innerCont");

  let yVarName = options[0].yaxis;
  width = 750,
  height = 750,
  radius = Math.min(width, height) / divisionRatio;

  if (level == 1) {
    xVarName = options[0].xaxisl1;
  }
  else {
    xVarName = options[0].xaxis;
  }

  let rcolor = d3.scaleOrdinal().range(runningColors);

  arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius - 250);

  chart = chart
    .append("svg") 
    .attr("width", width)    
    .attr("height", height)  
    .append("g")
    .attr("transform", "translate(" + 400 + "," + ((height / divisionRatio) + 30) + ")");

  let arcOver = d3.arc().outerRadius(radius + 20).innerRadius(radius - 200);

  let pie;
  if (level == 1) {
    pie = d3.pie()
      .sort(null)
      .value(function (d) {
        return d.total;
      });
  } else {
    pie = d3.pie()
      .sort(null)
      .value(function (d) {
        return 1;
      });
  }

  let g = chart.selectAll(".arc")
    .data(pie(runningData))
    .enter().append("g")
    .attr("class", "arc")
    .style("cursor", "pointer");

  let count = 0;

  let path = g.append("path")
    .attr("d", arc)
    .attr("id", function (d) { return "arc-" + (count++); })
    .style("opacity", function (d) {
      return d.data["op"];
    });

  if (level == 1) {
  } else {
    let arcs = Array.from(document.querySelectorAll('.arc')); 

    arcs.forEach(function (el) {
      el.firstElementChild.addEventListener("click", () => {
        h1 = document.createElement("h1");
        h1.setAttribute("id", "legend-header");
        // debugger
        let text = document.createTextNode(el.firstElementChild.__data__.data.category);
        h1.appendChild(text);
        document.getElementById("chart").appendChild(h1);
      })
    })

    h1 = document.createElement("h1");
    h1.setAttribute("id", "legend-header");
    // debugger
    let text = document.createTextNode(xVarName);
    h1.appendChild(text);
    document.getElementById("chart").appendChild(h1);

    // button = document.createElement("button");
    // button.setAttribute("id", "legend-button");
    // document.getElementById("chart").appendChild(button);
  }

  // path = d3.selectAll("path").filter(function(d, i) { return i > 7})

  path.on("mouseenter", function (d) {
      d3.select(this)
        .attr("stroke", "white")
        .transition()
        .duration(200)
        .attr("d", arcOver)
        .attr("stroke-width", 1);
    })
    .on("mouseleave", function (d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr("d", arc)
        .attr("stroke", "none");
    })
    .on("click", function (d) {
      if (this._listenToEvents) {
        // Reset inmediatelly
        d3.select(this).attr("transform", "translate(0,0)")
        // Change level on click if no transition has started
        path.each(function () {
          this._listenToEvents = false;
        });
      }
      d3.selectAll("#" + id + " svg").remove();
      if (level == 1) {
        TransformChartData(chartData, options, 0, d.data[xVarName]);
        BuildPie(id, chartData, options, 0);
      }
      else {
        var nonSortedChart = chartData.sort(function (a, b) {
          return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
        });
        TransformChartData(nonSortedChart, options, 1, d.data[xVarName]);
        BuildPie(id, nonSortedChart, options, 1);
      }
    })

  // Keyboard Shortcuts
    d3.select("body").on("keypress", function () {
      if (level == 1) {
        d3.selectAll("#" + id + " svg").remove();
        TransformChartData(chartData, options, 0, "planet");
        BuildPie(id, chartData, options, 0);
      } else {
        switch (d3.event.key) {
          case "1":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Semimajor");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Semimajor");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "2":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Perihelion");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Perihelion");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "3":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Aphelion");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Aphelion");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "4":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Gravity");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Gravity");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "5":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Inclination");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Inclination");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "6":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Density");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Density");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "7":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Eccentricity");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Eccentricity");
            BuildPie(id, nonSortedChart, options, 1);
            break;
          case "8":
            d3.selectAll("#" + id + " svg").remove();
            var nonSortedChart = chartData.sort(function (a, b) {
              return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
            });
            h1 = document.createElement("h1");
            h1.setAttribute("id", "legend-header");
            text = document.createTextNode("Ellipticity");
            h1.appendChild(text);
            document.getElementById("chart").appendChild(h1);
            TransformChartData(nonSortedChart, options, 1, "Ellipticity");
            BuildPie(id, nonSortedChart, options, 1);
            break;
        }
      }
    })

  if (level == 1) {
    path.append("svg:title")
      .text(function (d) {
        return d.data["title"] + " (Total: " + d.data[yVarName] + ")";
      });
  } else {
    path.append("svg:title")
      .text(function (d) {
        return d.data["title"];
      });
  }


  path.style("fill", function (d) {
    return rcolor(d.data[xVarName]);
  })
    .transition().duration(1000).attrTween("d", tweenIn)

  if (level == 1) {
    g.append("text")
      .style("font-size", "13")
      .attr("transform", function (d) {
        const c = arc.centroid(d);
        return "translate(" + c[0] * 1.3 + "," + c[1] * 1.3 + ")";
      })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("opacity", 1)
      .text(function (d) {
        // return d.data.total;
      });
    }
    else {
      g.append("text")
      .style("font-size", "13")
      .attr("transform", function (d) {
        const c = arc.centroid(d);
        return "translate(" + c[0] * 1.3 + "," + c[1] * 1.3 + ")";
      })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("opacity", 1)
      .text(function (d) {
        return d.data.category;
      });
  }

  count = 0;

  let legend = chart.selectAll(".legend")
    .data(runningData).enter()
    .append("g").attr("class", "legend")
    .attr("legend-id", function (d) {
      return count++;
    })
    .attr("transform", function (d, i) {
      // return "translate(15," + (parseInt("-" + (runningData.length * 10)) + i * 58 + legendoffset) + ")";
      return "translate(105," + (parseInt("-" + (runningData.length * 10)) + i * 58 + legendoffset) + ")";
    })
    .style("cursor", "pointer")

    .on("click", function () {
      var oarc = d3.select("#" + id + " #arc-" + d3.select(this)._groups[0][0].attributes[1].value);
      oarc.style("opacity", 0.5)
        .attr("stroke", "white")
        .transition()
        .duration(200)
        .attr("d", arcOver)
        .attr("stroke-width", 1);
        setTimeout(function () {
          oarc.style("opacity", function (d) {
            return d.data["op"];
          })
          .attr("d", arc)
          .transition()
          .duration(200)
          .attr("stroke", "none");
        }, 1000);
    });
    
  let leg = legend.append("rect");

  leg.attr("x", width / 1.3)
    .attr("y", -130)
    .attr("class", "legend-rect")
    .attr("width", 18).attr("height", 18)
    .style("fill", function (d) {
      return rcolor(d[yVarName]);
    })

  legend.append("text").attr("x", (width / 1.3) - 10)
    .attr("class", "legend-text")
    .attr("y", -123).attr("dy", ".35em")
    .style("text-anchor", "end").text(function (d) {
      if (level == 1) {
        return d.caption + " = " + d.total + " ";
      } else {
        return d.caption;
      }
    });


  if (level == 1) {
    leg.append("svg:title")
      .text(function (d) {
        return d["title"] + " (Total: " + d[yVarName] + ")";
      });

  } else {
    leg.append("svg:title")
      .text(function (d) {
        return d["title"];
      });

  }
    
  function tweenOut(data) {
    data.startAngle = data.endAngle = (2 * Math.PI);
    var interpolation = d3.interpolate(this._current, data);
    this._current = interpolation(0);
    return function (t) {
      return arc(interpolation(t));
    };
  }

  function tweenIn(data) {
    var interpolation = d3.interpolate({ startAngle: 0, endAngle: 0 }, data);
    this._current = interpolation(0);
    return function (t) {
      return arc(interpolation(t));
    };
  }

  // Glow
  let defs = svg.append("defs");

  let filter = defs.append("filter")
    .attr("id", "glow");
  filter.append("feGaussianBlur")
    .attr("stdDeviation", "3.5")
    .attr("result", "coloredBlur");
  let feMerge = filter.append("feMerge");
  feMerge.append("feMergeNode")
    .attr("in", "coloredBlur");
  feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

  d3.selectAll(".arc")
    .style("filter", "url(#glow)");
  d3.selectAll("rect")
    .style("filter", "url(#glow)");
  d3.selectAll(".sun")
    .style("filter", "url(#glow)");

  // Sun
  // var defs = chart.append("defs");

  var radialGradient = defs.append("radialGradient")
    .attr("id", "sun")
    .attr("cx", "50%")   
    .attr("r", "50%");   

  radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#FFF76B");
  radialGradient.append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "#FFF845");
  radialGradient.append("stop")
    .attr("offset", "80%")
    .attr("stop-color", "#FFDA4E");
  radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FB8933");

  chart.append("circle")
    .attr("id", "sun")
    .attr("r", 100)
    .style("fill", "url(#sun)")
    .style("filter", "url(#glow)");
}

function TransformChartData(chartData, opts, level, filter) {
  var result = [];
  var resultColors = [];
  var counter = 0;
  var hasMatch;
  var xVarName;
  var yVarName = opts[0].yaxis;

  if (level == 1) {
    xVarName = opts[0].xaxisl1;

    for (var i in chartData) {
      hasMatch = false;
      for (var index = 0; index < result.length; ++index) {
        var data = result[index];

        if ((data[xVarName] == chartData[i][xVarName]) && (chartData[i][opts[0].xaxis]) == filter) {
          result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
          hasMatch = true;
          break;
        }

      }
      if ((hasMatch == false) && ((chartData[i][opts[0].xaxis]) == filter)) {
        if (result.length < 9) {
          ditem = {}
          ditem[xVarName] = chartData[i][xVarName];
          ditem[yVarName] = chartData[i][yVarName];
          ditem["caption"] = chartData[i][xVarName];
          ditem["title"] = chartData[i][xVarName];
          // ditem["op"] = 1.0 - parseFloat("0." + (result.length));
          result.push(ditem);
          resultColors[counter] = chartData[i].color;

          counter += 1;
        }
      }
    }
  }
  else {
    xVarName = opts[0].xaxis;
    for (var i in chartData) {
      hasMatch = false;
      for (var index = 0; index < result.length; ++index) {
        var data = result[index];
        
        if (data[xVarName] == chartData[i][xVarName]) {
          result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
          hasMatch = true;
          break;
        }
      }
      if (hasMatch == false) {
        ditem = {};
        ditem[xVarName] = chartData[i][xVarName];
        ditem[yVarName] = chartData[i][yVarName];
        ditem["caption"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
        ditem["title"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
        ditem["op"] = 1;
        result.push(ditem);
        resultColors[counter] = opts[0].color != undefined ? opts[0].color[0][chartData[i][xVarName]] : "";

        counter += 1;
      }
    }
  }


  runningData = result;
  runningColors = resultColors;
  return;
}


function Plot() {
  TransformChartData(chartData, chartOptions);
  BuildPie("chart", chartData, chartOptions);
}

Plot();


// YouTube tutorials:
// Introduction to D3
// D3 JS - Build Data Driven Visualizations with Javascript
// D3JS Interactive Pie Chart
// Glow tutorial:
// https://www.visualcinnamon.com/2016/06/glow-filter-d3-visualization.html
// Gradient Sun tutorial:
// https://www.visualcinnamon.com/2016/05/data-based-svg-gradient-d3.html
