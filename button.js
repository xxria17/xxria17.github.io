
$('.tab_menu_btn').on('click',function(){
    $('.tab_menu_btn').removeClass('on');
    $(this).addClass('on')
  });
  
  $('.home_btn').on('click',function(){
    $('.tab_box').hide();
    $('.home_box').show();
  });
  
  $('.about_btn').on('click',function(){
    $('.tab_box').hide();
    $('.about_box').show();
  });
  
  $('.skill_btn').on('click',function(){
    $('.tab_box').hide();
    $('.skill_box').show();
  });
  
  $('.portfolio_btn').on('click',function(){
    $('.tab_box').hide();
    $('.portfolio_box').show();
  });
  
  $('.info_btn').on('click',function(){
    $('.tab_box').hide();
    $('.info_box').show();
  });