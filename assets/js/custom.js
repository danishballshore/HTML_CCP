jQuery(document).ready(function($){
    // Country Selector
    $("#country_selector, #country_selector2, #country_selector3").countrySelect({
        defaultCountry: "us",
        onlyCountries: ['us'],
        // responsiveDropdown: true,
        preferredCountries: ['']
    });

    // Show/hide sections or screens
    /*
    $('.btn-phone').click(function(){
        $(this).addClass('active');
        $('.btn-settings').removeClass('active');
        $('#tab-1').show();
        $('#tab-2').hide();
    });
    $('.btn-settings').click(function(){
        $(this).addClass('active');
        $('.btn-phone').removeClass('active');
        $('#tab-2').show();
        $('#tab-1').hide();
    });*/

    $('.btn-call').click(function(){
        $('.ccp-quick-dial-sec').hide();
        $('.ccp-keypad-sec').hide();
        $('.sidebar-nav .btn-quick-dial').removeClass('active');
        $('.sidebar-nav .btn-call').addClass('active');
    });

    $('.btn-quick-dial').click(function(){
        $('.ccp-quick-dial-sec').show();
        $('.ccp-keypad-sec, .ccp-ni-content form').hide();
        $('.sidebar-nav .btn-call').removeClass('active');
        $('.sidebar-nav .btn-quick-dial').addClass('active');
        
    });
    $('.ccp-quick-dial-sec .btn-close').click(function(){
        $('.ccp-quick-dial-sec').hide();
        $('.ccp-ni-content form').show();
        $('.sidebar-nav .btn-quick-dial').removeClass('active');
        $('.sidebar-nav .btn-call').addClass('active');
    });
    
    $('.btn-keypad').click(function(){
        $('.ccp-keypad-sec').show();
        $('.ccp-quick-dial-sec').hide();
        $('.sidebar-nav .btn-call').removeClass('active');
        $('.sidebar-nav .btn-quick-dial').addClass('active');
    });
    $('.ccp-keypad-sec .btn-close').click(function(){
        $('.ccp-keypad-sec').hide();
        $('.ccp-ni-content form').show();
        $('.sidebar-nav .btn-quick-dial').removeClass('active');
        $('.sidebar-nav .btn-call').addClass('active');
    });

    // Show/hide phone field
    $('#phoneType1').click(function(){
        $('#phone-field').hide();
    });

    $('#phoneType2').click(function(){
        $('#phone-field').show();
    });

    // Dropdown
    $('.dd-wrap button').click(function(){
        let parent_elm = $(this).parent();
        //console.log(parent_elm);
        if ($(parent_elm).hasClass("dd-open")) {
            $(parent_elm).removeClass("dd-open");
        } else {
            $(parent_elm).addClass("dd-open");
        }
    });   
    $('.dd-wrap ul li').click(function(){
        var dd_list_text = $(this).text();
        $('.dd-wrap ul li').each(function(){
            if ($(this).hasClass("d-none")) {
                $(this).removeClass("d-none");
            }
        });  
        $(this).addClass("d-none");
        $('.dd-wrap .dd-selected-opt').text(dd_list_text);
        $('.dd-wrap').removeClass("dd-open");
    });  
    $(".dd-wrap").mouseleave(function(){
        if ($(this).hasClass("dd-open")) {
            $(this).removeClass("dd-open");
        }
    });


});