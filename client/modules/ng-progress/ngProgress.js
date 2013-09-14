var module = angular.module('ngProgress', []);

module.provider('progressbar', function() {
    //Default values for provider
    this.count = 0;
    this.height = '5px';
    this.color = 'firebrick';

    this.$get = function($document, $window) {
        var count = this.count;
        var height = this.height;
        var color = this.color;
        var incrementor;
        var $body = $document.find('body');
        // Create elements that is needed
        var progressbarContainer = angular.element('<div class="progressbar-container"></div>');
        var progressbar = angular.element('<div class="progressbar"></div>');
        
        //Add CSS3 styles for transition smoothing
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".progressbar {-webkit-transition: all 0.5s ease-in-out; -moz-transition: all 0.5s ease-in-out; -o-transition: all 0.5s ease-in-out; transition: all 0.5s ease-in-out;}";
        document.body.appendChild(css);

        //Styling for the progressbar-container
        progressbarContainer.css('position', 'fixed');
        progressbarContainer.css('margin', '0');
        progressbarContainer.css('padding', '0');
        progressbarContainer.css('top', '0px');
        progressbarContainer.css('left', '0px');
        progressbarContainer.css('right', '0px');

        //Styling for the progressbar itself
        progressbar.css('height', height);
        progressbar.css('box-shadow', '0px 0px 10px 0px ' + color);
        progressbar.css('width', count+'%');
        progressbar.css('margin', '0');
        progressbar.css('padding', '0');
        progressbar.css('background-color', color);

        //Add progressbar to progressbar-container and progressbar-container
        // to body
        progressbarContainer.append(progressbar);
        $body.append(progressbarContainer);


        return {
            // Starts the animation and adds between 0 - 5 percent to loading
            // each 400 milliseconds. Should always be finished with progressbar.complete()
            // to hide it
            start: function() {
                var self = this;
                progressbar.css('width', count + '%');
                progressbar.css('opacity', '1');
                $window.interval = setInterval(function(){
                    if(count + 1 >= 100) {
                        clearInterval($window.interval);
                    } else if(incrementor) {
                        count = count + randomizer(incrementor);
                        count = (count > 100) ? 99 : count;
                        progressbar.css('width', count + '%');
                    } else {
                        var random = Math.floor(Math.random()*5)
                        count = count + random;
                        progressbar.css('width', count + '%');
                    }
                    self.determineColor(Math.floor(count / 20));
                }, 400);
            },
            // Sets the height of the progressbar. Use any valid CSS value
            // Eg '10px', '1em' or '1%'
            height: function(new_height) {
                progressbar.css('height', new_height);
            },
            // Sets the color of the progressbar and it's shadow. Use any valid HTML
            // color
            color: function(color) {
                progressbar.css('box-shadow', '0px 0px 10px 0px ' + color);
                progressbar.css('background-color', color);
            },
            // Sets the increment value for each interval
            incrementor: function(value){
            	incrementor = value;
            },
            // Returns on how many percent the progressbar is at. Should'nt be needed
            status: function() {
                return this.count;
            },
            // Stops the progressbar at it's current location
            stop: function() {
                clearInterval($window.interval);
            },
            // Set's the progressbar percentage. Use a number between 0 - 100. 
            // If 100 is provided, complete will be called.
            set: function(new_count) {
                clearInterval($window.interval);
                if(new_count >= 100) {
                    this.complete();
                }
                count = new_count;
                progressbar.css('width', count + '%');
                progressbar.css('opacity', '1');
                this.determineColor(Math.floor(count / 20));
                return count;
            },
            // Resets the progressbar to percetage 0 and therefore will be hided after
            // it's rollbacked
            reset: function() {
                clearInterval($window.interval);
                count = 0;
                progressbar.css('width', count + '%');
                progressbar.css('opacity', '1');
                return 0;
            },
            // Jumps to 100% progress and fades away progressbar.
            complete: function() {
                clearInterval($window.interval);
                count = 100;
                progressbar.css('width', count + '%');
                progressbar.css('background-color', '#09ce00');
                setTimeout(function(){
                    progressbar.css('opacity', '0');
                    progressbar.css('background-color', 'firebrick');
                }, 500);
                setTimeout(function(){
                    count = 0;
                    progressbar.css('width', count + '%');
                }, 1000);
                return count;
            },
            determineColor: function(switcher) {
                // 5 color stages
                switch (switcher){
                    case  0: {
                        this.color('#ce0002');
                        break;
                    }
                    case  1: {
                        this.color('#ce4800');
                        break;
                    }
                    case  2: {
                        this.color('#ce8d00');
                        break;
                    }
                    case  3: {
                        this.color('#b9ce00');
                        break;
                    }
                    case  4: {
                        this.color('#52ce00');
                    }
                }
            }
        }
    };

    this.setColor = function(color) {
        this.color = color;
    };

    this.setHeight = function(height) {
        this.height = height;
    };

    function randomizer(value) {
        // add or subtract up to half of the incoming value
        // to give the illusion of sporadic loading.
        var random = Math.floor(Math.random() * value) + (value / 2);
        return random;
    }
});