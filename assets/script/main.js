$(function () {


    // Filter the results on keyup
    $('#search-field').on('keyup', function () {

        var query = $(this).val();
        var entryParent = $('#result-list');
        var entries = $(entryParent).find('li').not('#no-result');
        var hasResult = false;
        var noResult = $('#no-result');

        if (query != undefined && query != '') {
            var query = query.toLowerCase();
            $(entries).each(function () {
                var text = $(this).text();
                var title_local = $(this).data('title-local') || '';
                var title_meaning = $(this).data('title-meaning') || '';
                if (text.toLowerCase().indexOf(query) == -1
                    && title_local.toLowerCase().indexOf(query) == -1
                    && title_meaning.toLowerCase().indexOf(query) == -1) {
                    $(this).hide();
                } else {
                    hasResult = true;
                    $(this).show();
                }
            });
            if (hasResult) {
                $(noResult).hide();
            } else {
                $(noResult.show());
                hasResult = true;
            }
        }

        if (hasResult) {
            $(entryParent).width($(this).outerWidth())
            .css('left', $('#search-btn').parent().width())
            .show();
        } else {
            $(entryParent).hide();
        }
    });

    // Control size of navbar on scrolling
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('.navbar').addClass('navbar-small');
      }
      else {
          $('.navbar').removeClass('navbar-small');
      }
  });

    $(function() {
     var rating = $('#rating-value').val();
     if (rating > 0) {
      $('#rating').barrating({
        theme: 'fontawesome-stars-o',
        initialRating: rating,
        readonly: true
    });
  }
});
});