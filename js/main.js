//TODO Clean up variable scoping
var vm = {
    catFilter: '',
    subNav: $('.sub-nav a'),
    queryDisplay: ko.observable(''),
    blogContent: $('.ajax'),
    blogInputs: $('.cp_filter input'),
    window: $(window),
    body: $('body'),
    selectedFilter : $('.selected-filter'),
    queryButtons : $('.query-btns'),
    pageContent: $('#content'),
    scrollTop: ko.observable(0),
    parallaxElement: $('.parallax-element'),
    windowHeight: ko.observable(0),
    windowTopPosition: ko.observable(0),
    windowBottomPosition: ko.observable(0),
    globalHeader: $('.cp_global-header'),
    globalSubNav: $('.cp_global-header .collapse'),
    globalSearch: $('.cp_global-header .search-slider'),
    globalFooter: $('.cp_global-footer'),
    quickFilterBtn : $('quickFilter-btn'),
    searchTerm : [],
    showQuickFilter: ko.observable(false),
    resultsNum: ko.observable(0),
    filterClosed: ko.observable(true),
    filterResult: ko.observable(''),
    ctaHeadline : $('.gforms_confirmation_message').prev('h3')
};

vm.utils = {
    getHeight : function(el) {
        return $(el).height()
    },
    getWidth : function(el) {
        return $(el).outerWidth(true)
    },
    closeCollapse : function () {
        $('.content-wrapper .collapse')
            .removeClass('collapse-down')
            .addClass('collapse-up')
            .parents()
            .find('.active')
            .removeClass('active');
    },
    handleMobileClicks : function() {
        $('.cp_global-header .overlap').on('click', function(e) {
            var el = $(this);
            var link = el.attr('href');
            window.location = link;
        });
    },
    cleanUpWYSIWYG : function () {
        $('p:empty').remove();
    },
    loadSubPages : function (item, event) {
        var result = $(event.target).attr('href');
        $('.ajax').load(result + ' .page-wrap');
        $("div.lazy").lazyload({
            threshold : -200
        });
    },
    positionFooter : function () {
        this.getHeight(vm.globalFooter);
        if (vm.windowHeight > vm.utils.getHeight(vm.body)) {
            vm.globalFooter.css("position", "absolute").css("bottom", 0);
        }
        if (vm.windowHeight < ( vm.utils.getHeight(vm.body) + vm.utils.getHeight(vm.globalFooter))) {
            vm.globalFooter.css("position", "static");
        }
    }
};
vm.checkSearch = function () {
    vm.body.bind('click' , function(){
        if ( vm.body.hasClass('active-search') ) {
            vm.globalSearch.removeClass('active');
            vm.body.removeClass('active-search');
        } else {
            vm.body.addClass('active-search');
        }
        vm.body.unbind();
    });
};
vm.toggleActive = function (target) {
    $(target).toggleClass('active');
    if (target === '.cp_global-header .search-slider' ) {
        vm.body.toggleClass('active-search');
        vm.globalHeader.find('input.orig').first().focus();
        setTimeout(function(){
            vm.checkSearch();
        },500);
    }
};
vm.toggleCollapse = function (target , data , event) {
    if (!target) {
        target = event.target;
    }
    if ( target == '.cp_global-header .collapse') {
        vm.body.toggleClass('menu-open');
    }
    if ( target == '.dropdown .collapse') {
        $(event.target).toggleClass('active');
    }
    $(target).closest('.collapse').toggleClass('collapse-up collapse-down');
};

vm.blogFilter = {
    update : function () {
        var that = this;
        vm.blogInputs.on('change' , function() {
            vm.blogContent.addClass('filtering');
            vm.catFilter = $('.cats.filter-col :checked');
            vm.authorFilter = $('.author.filter-col :checked');

            $('.filter-col input').each(function(){
                var id = $(this).attr('ID');
                if ($(this).is(':checked')) {
                    $('label[for="'+id+'"]').addClass('active-label');
                } else {
                    $('label[for="'+id+'"]').removeClass('active-label');
                }
            });
            that.filterBlogPosts();
        });

    },
    filterBlogPosts : function () {
        vm.queryDisplay('searching');
        vm.blogFilter.getActiveTerms();

        $( ".ajax" ).load( vm.filterResult() , function() {
            vm.blogContent.removeClass('filtering');
            $("div.lazy").lazyload({
                threshold : -200
            });
        });
    },
    getActiveTerms : function () {
        var resultsNum = 0;
        var catQueryTerm = '';
        var authorQueryTerm = '';

        $(vm.catFilter).each(function(i){
            resultsNum +=1;
            if (i > 0) {
                catQueryTerm += ','
            }
            catQueryTerm += $(this).attr('data-cat-id');
            vm.blogFilter.buildSearchItem($(this));
        });
        $(vm.authorFilter).each(function(i){
            resultsNum +=1 ;
            if (i > 0) {
                authorQueryTerm += ','
            } else {
                authorQueryTerm += '&a='
            }
            authorQueryTerm += $(this).attr('data-cat-id');
            if (vm.authorFilter.length > 0) {
                authorQueryTerm = authorQueryTerm;
            }
            vm.blogFilter.buildSearchItem($(this));
        });
        vm.resultsNum(resultsNum);
        vm.blogFilter.buildQueryResultButtons();
        vm.filterResult(document.location.href+'/journal-filter/?c='+catQueryTerm+authorQueryTerm + ' .page-wrap');

    },
    filterToggle : function (collapseTarget , activeTarget) {
        vm.toggleCollapse(collapseTarget);
        vm.toggleActive(activeTarget);
        vm.blogFilter.showQuickFilterCheck(activeTarget);
    },
    buildQueryResultButtons : function () {
        $(vm.queryButtons).find('#quickFilter').remove();
        $(vm.queryButtons).append( '<div id="quickFilter"></div>');
        $($('#quickFilter')).html(vm.searchTerm);

        ko.applyBindings(vm, document.getElementById("quickFilter"));

        $('.quickFilter-btn').on('click' , function () {
            var target = $(this).attr('data-target');
            $('#'+target+'').trigger('click');
            if ( vm.resultsNum() < 2 ) {
                vm.showQuickFilter(false);
            }
        });

        this.resetSearchTerm();
    },
    buildSearchItem : function (el) {
        var str = $(el).attr('name');
        var clean = str.replace('-',' ');
        var target = str.replace(' ','-');

        vm.searchTerm.push('<span class="quickFilter-btn" data-target="'+ target.toLowerCase() +'">'+clean+'</span>');
    },
    showQuickFilterCheck : function (activeTarget) {
        if (!$(activeTarget).hasClass('active') && (vm.resultsNum() >= 1)){
            vm.filterClosed(false); //
            vm.showQuickFilter(true);
        } else {
            vm.filterClosed(true); //
            vm.showQuickFilter(false)
        }
    },
    resetSearchTerm : function () {
        vm.searchTerm = [];
    },
    clearFilters : function () {
        if (vm.body.hasClass('waiting')) {
            vm.body.removeClass('waiting');
        } else {
            $('.filter-col :checked').prop('checked', false);
            vm.showQuickFilter(false);
            vm.blogInputs.trigger('change');
        }
    },
    initBlogFilter : function () {
        this.update();
    }
};
vm.positionFooter = function () {
    vm.utils.getHeight(vm.globalFooter);
    if (vm.windowHeight > vm.utils.getHeight('body')) {
        vm.globalFooter.css("position","absolute").css("bottom",0);
    }
    if (vm.windowHeight < ( vm.utils.getHeight('body') + vm.utils.getHeight(vm.globalFooter))) {
        vm.globalFooter.css("position","static");
    }
};
vm.scrollingHeaderBg = function () {
    if ( vm.scrollTop() >= vm.globalHeader.height() ) {
        vm.globalHeader.addClass('black-background');
    } else {
        vm.globalHeader.removeClass('black-background');
    }
};
vm.checkView = function () {
    $(vm.parallaxElement).each(function() {
        if ( $(this).is(':below-the-fold('+ 200 +')') ) {
            $(this).removeClass('batting').addClass('below on-deck');

        } else if ( $(this).is(':above-the-top('+ 300 +')') ) {
            $(this).removeClass('batting').addClass('on-top on-deck');

        } else {
            $(this).removeClass('on-top below on-deck').addClass('batting');
        }
    });
};
vm.initCarousel = function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1
    });
};
vm.globalMenu = {
    manageNavMenus : function () {
        if (vm.utils.getWidth(vm.window) > 768) {
            this.resetMobileNav();
        } else {
            vm.globalSearch.removeClass('active');
        }
    },
    resetMobileNav : function () {
        vm.globalSubNav.removeClass('collapse-down').addClass('collapse-up');
        //vm.body.removeClass('no-overflow');
    },
    initMenu : function() {
        this.manageNavMenus();
    }
};
vm.gravityFormConfirmation = function () {
    $(document).bind('gform_post_render', function(){
        vm.ctaHeadline.hide();
    });
};

vm.update = function () {
    vm.globalMenu.initMenu();
    vm.scrollTop(vm.window.scrollTop());
    vm.windowHeight(vm.window.height());
    vm.windowTopPosition(vm.window.scrollTop());
    vm.windowBottomPosition(vm.windowTopPosition() + vm.windowHeight());
    vm.scrollingHeaderBg();
    vm.checkView();
    vm.utils.positionFooter();


};
vm.loaded = function () {
    vm.body.addClass('waiting');
    vm.blogFilter.initBlogFilter();
    vm.utils.handleMobileClicks();
    vm.utils.cleanUpWYSIWYG();
    vm.gravityFormConfirmation();
    $("div.lazy").lazyload({
        threshold : -200
    });

    if ( $('.owl-carousel').length > 0 ){
        vm.initCarousel();
    }


};
vm.window.on( 'load' , vm.loaded );
vm.window.on( 'scroll load resize' , vm.update );

ko.applyBindings(vm);



