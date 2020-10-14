  'use strict'

  /**
   * 
   * @param {number} xAxis 
   * @param {number} yAxis 
   */
  var GridGenerator = function gridGenerator(xAxis, yAxis) {
      this.xAxis = xAxis;
      this.yAxis = yAxis;
  }
  GridGenerator.prototype.run = function() {
      this.grid();
      setInterval(this.setColor, this.getRandomNumber())
      console.log(this.getRandomNumber());
      return
  }
  GridGenerator.prototype.grid = function() {
      var matrix = document.createElement("table");
      for (var i = 0; i < this.xAxis; i++) {
          var tr = document.createElement("tr");
          for (var j = 0; j < this.yAxis; j++) {
              var td = document.createElement("td");
              td.style.border = 'solid';
              td.style.width = '50px';
              td.style.height = '50px';
              tr.appendChild(td);
          }
          matrix.appendChild(tr);
        }
      document.querySelector("body").appendChild(matrix);
  }
GridGenerator.prototype.setColor = function() {
      let cells = document.querySelectorAll('td');
      console.log(cells);
      cells.forEach(function(cell) {
          var randColor = Math.floor(Math.random() * 16777215).toString(16);
          cell.style.backgroundColor = "#" + randColor;
      });
  }
GridGenerator.prototype.getRandomNumber = function() {
      return Math.floor(Math.random() * (3 - 1) + 1) * 1000;
  }

  new GridGenerator(5, 5).run();