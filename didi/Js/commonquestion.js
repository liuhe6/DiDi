/**
 * Created by lh on 2015/7/8.
 */
$(function(){
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#answer5").hide();
    $("#answer6").hide();
   $("#q1").click(function(){
        $("#answer1").toggle();
   }) ;
    $("#q2").click(function(){
        $("#answer2").toggle();
    }) ;
    $("#q3").click(function(){
        $("#answer3").toggle();
    }) ;
    $("#q4").click(function(){
        $("#answer4").toggle();
    }) ;
    $("#q5").click(function(){
        $("#answer5").toggle();
    }) ;
    $("#q6").click(function(){
        $("#answer6").toggle();
    }) ;
});