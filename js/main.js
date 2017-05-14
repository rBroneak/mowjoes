//TODO Clean up variable scoping
var vm = {
    window: $(window)
};
vm.initCarousel = function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1
    });
};

vm.update = function () {
};
vm.loaded = function () {

    if ( $('.owl-carousel').length > 0 ){
        vm.initCarousel();
    }


};
vm.window.on( 'load' , vm.loaded );
vm.window.on( 'scroll load resize' , vm.update );

ko.applyBindings(vm);



