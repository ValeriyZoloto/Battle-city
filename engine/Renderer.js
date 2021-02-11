/** @format */

(function () {
	"use strict";

	class Renderer {
		constructor(args = {}) {
			this.canvas = document.createElement("canvas");
			this.context = this.canvas.getContext("2d");

			this.canvas.width = args.width || 50;
			this.canvas.height = args.height || 50;

			requestAnimationFrame((timestamp) => this.tick(timestamp));
		}

		tick(timestamp) {
            
            requestAnimationFrame((timestamp) => this.tick(timestamp));
        }
	}

	window.GameEngine = window.GameEngine || {};
	window.GameEngine.Renderer = Renderer;
})();
