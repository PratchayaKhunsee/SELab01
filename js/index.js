(function() {
    console.log('Prayut Chan-O-Cha is follwing you.');
    var section = document.querySelector('section'), nav = document.querySelector('nav');

    window.moveToFirstTopic = function(){
        this.window.scrollTo(0,section.offsetTop-nav.offsetHeight);
    };
})();