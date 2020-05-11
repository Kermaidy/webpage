jQuery(".button").click(function(){
                        jQuery(this).closest('.overlay').show();
                        jQuery(this).closest('.popup').show();
                        });


jQuery(".popupclose").click(function(){
                            jQuery(this).closest('.overlay').hide();
                            jQuery(this).closest('.popup').hide();
                            });

jQuery(".mypopup").click(function(){
                            jQuery(this).closest('.overlay').show();
                            jQuery(this).closest('.popup').show();
                            });
