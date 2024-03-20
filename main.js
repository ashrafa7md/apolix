window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;
    if (scroll > 350) {
        document.querySelector('.sec2_manImg').classList.add('showMan');
        document.querySelector('.sec2_ballImg').classList.add('showBall');
        document.querySelector('.sec2_staticList').classList.add('showStatic');
        
    } else {
         document.querySelector('.sec2_manImg').classList.remove('showMan');
        document.querySelector('.sec2_ballImg').classList.remove('showBall');
          document.querySelector('.sec2_staticList').classList.remove('showStatic');
    }
 })