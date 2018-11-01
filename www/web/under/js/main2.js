jQuery(window).load(function () {


    // $(window).resize(controlResize);

    // function controlResize() {
    //     $text_wrapper = $('.text_wrapper');
    //     $text_wrapper.css('margin-top', -($text_wrapper.height()/2));
    //     $text_wrapper_w = $('.text_wrapper');
    //     $text_wrapper_w.css('margin-left', -($text_wrapper_w.width()/2));
    // }

    // controlResize();

    function counterDay() {
        let counterHtml = $('.counter');
        let dataHtml = $('.day-after');
        let wordHtml = $('.word-after');
        let month = new Date().getMonth();
        
        let daaays = '';
        let wordChange = '';
        let nowDay = new Date().getDate();

        let countDownDate = new Date("Nov 16, 2018").getTime();
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        if (  (days%100>4) &&  ( days%100<20) ||  (days % 10 === 0 ) || ( days%100>20)  && (days % 10 > 3 ) && (days % 10 !== 1 ) ) {
            daaays = 'дней';
            wordChange = 'осталось';
        } else if (   (days%10<5) &&  (days%10>1) ) {
            daaays = 'дня';
            wordChange = 'осталось';
        }  else  {
            daaays = 'день';
            wordChange = 'остался';
        }

        $(counterHtml).html(`${days}`);
        $(dataHtml).html(`${daaays}`);
        $(wordHtml).html(`${wordChange}`);    
    }

    counterDay();
    setInterval(function() {
        counterDay();
    },50000);
    

    	
    	

});

