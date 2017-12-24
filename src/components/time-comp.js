
	var compDirective = Object.create(HTMLElement.prototype);

	compDirective.createdCallback = function() {
		this.innerHTML = '<span class="hours"></span><span class="minutes"></span><span class="ampm"></span>'
	}

	compDirective.detachedCallback = function() {
		var timeComp = this;

		window.clearInterval(timeComp._updateTime);
	}

	compDirective.render = function(time) {
		var hoursElem = this.querySelector('.hours');
		var minutesElem = this.querySelector('.minutes');
		var ampmElem = this.querySelector('.ampm');

		var hours = time.getHours();
		var minutes = time.getMinutes();
		var isAM = true;
		if (hours === 0) {
			hours = 12;
		} else if (hours > 12) {
			isAM = false;
			hours -= 12;
		}
		
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		hoursElem.innerText = hours;
		minutesElem.innerText = minutes;

		if (isAM) {
			ampmElem.innerText = 'AM';
		} else {
			ampmElem.innerText = 'PM';
		}
	}
	
	compDirective.attachedCallback = function() {
		var timeComp = this;

		timeComp._updateTime = window.setInterval(function() {
			timeComp.render(new Date());
		}, 2000);
	}

	compDirective.attributeChangedCallback = function(attrName, oldValue, newValue) {
	}


	// IE8 Shims needed Array.forEach, Array.map, HTMLElement.classList
	document.registerElement('weather-time', {
		prototype: compDirective
	});
/*
<gloomhaven-attack-card>
document.body.innerHTML = '<gloomhaven-attack-card atk="2"></gloomhaven-attack-card>'
*/
