$(document).ready(function(){
    $('a').click(function(){
        $(this).text('Clicked!');
    });
    
    $('li').css('width', '200px');
    $('li').css('height', '50px');
    $('ul').css('text-align','center');
    $('ul').css('text-decoration', 'none');
    
    
   $('li').hover(function(){
       $(this).animate({opacity:0.25}, 200);}, function(){
       $(this).animate({opacity:1}, 200)}
       
   );
    
    $('li').click(function(){
        $(this).css('background-color','seagreen');
    });
    
    $('button').click(function(){
        $('.lorem').css('color', 'purple');
        $('.lorem').css('position', 'relative');
        $('.lorem').css('left','30%');
        $('.lorem').css('width','300px');
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});