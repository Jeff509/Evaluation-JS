'use strict';

/**
 * @constructor
 * @param {number} sum - full-bar length.
 * @param {number} nbr - loaded part bar.
 */
var drawBar = function drawBar(sum, nbr) {
        this.sum = sum;
        this.nbr = nbr;
    }
    /**
     * Create And display Bar
     */

drawBar.prototype.display = function() {
    var progress = document.createElement('div');
    var myBar = document.createElement('div');
    progress.style.width = this.sum + '%';
    progress.style.backgroundColor = 'lightblue';
    progress.style.height = '30px';
    myBar.style.width = this.nbr + '%';
    myBar.style.backgroundColor = 'orange';
    myBar.style.height = '30px';
    progress.appendChild(myBar);
    document.body.appendChild(progress);
}

/**
 * Run
 */

drawBar.prototype.run = function() {
    this.display();
}
var loadingBar = new drawBar(100, 10);
loadingBar.run();
