(function($) {
    $.fn.simpleAccordion = function(options) {
        var state = $.extend({}, {open: false}, options);
        return this.each(function() {
            var dts = $(this).children('dt');
            dts.click(accordionClick);
            dts.each(reset);
            if (state.open)
                $(this).children('dt:first-child').next().show();
        });

        function accordionClick() {
            $(this).siblings('dt').each(hide);
            $(this).next().slideDown('fast');
            return false;
        }

        function hide() {
            $(this).next().slideUp('fast');
        }

        function reset() {
            $(this).next().hide();
        }
    }
})(jQuery);