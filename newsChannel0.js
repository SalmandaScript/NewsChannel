//Lazy loading img
$(document).ready (function(){
$("img").attr("loading", "lazy");
});

$(document).ready (function(){
$("video").attr("loading", "lazy");
});

$(document).ready (function(){
$("audio").attr("loading", "lazy");
});

/*open help dialog*/
$(function() {
            $( "#dialog-7" ).dialog({
               autoOpen: false, 
               resize: function( event, ui ) {
                  $( this ).dialog( "option", "title",
	         ui.size.height +- " x " +- ui.size.width );
               }
            });
            $( "#opener-6" ).click(function() {
               $( "#dialog-7" ).dialog( "open" );
            });
         });
/*end open help dialog*/

//dialog function
var myTimeout = setTimeout(function() {
         
         $(function() {
            $( "#dialog-6" ).dialog({
               autoOpen: true, 
               resize: function( event, ui ) {
                  $( this ).dialog( "option", "title",
	         ui.size.height +- " x " +- ui.size.width );
               }
            });
            $( "#opener-5" ).click(function() {
               $( "#dialog-6" ).dialog( "open" );
            });
         });
         
      }, 50000);
      //end dialog function

//changing focus
var area = document.getElementById("area");
      
   area.addEventListener("focus", function() {
         area.style.background = "teal";
      });
      
    area.addEventListener("blur", function() {
          area.style.background = "gray";
      });
      
//functions

function linkWikipedia(){
open("https://salmandascript.github.io/LinkWikipedia/");
}

function linkChatGPT(){
open("https://salmandascript.github.io/LinkChatGPT/");
}

function seer(){
open("https://salmandascript.github.io/Seer/");
}

function linkChatGPT(){
open("https://salmandascript.github.io/LinkChatGPT/");
}

function africaOnline(){
open("https://salmandascript.github.io/AfricaOnline/");
}

function royalFM(){
open("https://salmandascript.github.io/RoyalFM/");
}

function programming(){
open("https://salmandascript.github.io/SoftwareService/");
}

function salmandaMusiq(){
open("https://salmandascript.github.io/Salmandamusiq/");
}

function newsChannel(){
open("https://salmandascript.github.io/NewsChannel/");
}

function movieChannel(){
open("https://salmandascript.github.io/MovieChannel/");
}

function contact(){
open("https://salmandascript.github.io/Contact/");
}

function feedBack(){
var passkey = 3443
  passkey=prompt("Enter the passkey  provided by the administrator to proceed. to this site. The content  is highly classified.");

if(passkey==3443){
 open("file:///storage/emulated/0/Modules/Photos/photos.html");
 
 return false;
}

else if(passkey==""){
	open("file:///storage/emulated/0/Modules/Passkey/passkey.html");
	
	return false;
}
}

function link(){
	alert("This action opens an external source.");
}

function counter(){
	alert("The file will be downloaded now.");
}

function save(){
	alert("👦 Hie! it's great to meet, you can save as many files as you like, click 🔊 to play the audio of the underlying text, if your Browser does support it. click 🔗 to visit an external source of the content, click ↩ to go back to top. click ↪ to share the page. Play video in fullscreen mode for better viewing 🎬, thanks fam... and enjoy. ");
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

$(document).ready(function() 
{ 
$("#myModal").modal("hide"); 
});    

//toggle full story1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//toggle full story2
$(document).ready(function() 
{ 

$("#shbtn2").click(function() 
{ 

$("#d2").toggle(); 

}); 

}); 

//toggle full story3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//toggle full story4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//toggle full story5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//toggle full story6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//toggle full story7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//toggle full story8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 

//toggle full story9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//toggle full story10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn11").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn13").click(function() 
{ 

$("#d13").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn14").click(function() 
{ 

$("#d14").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn15").click(function() 
{ 

$("#d15").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn16").click(function() 
{ 

$("#d16").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn17").click(function() 
{ 

$("#d17").toggle(); 

}); 

}); 


//toggle full story
$(document).ready(function() 
{ 

$("#shbtn18").click(function() 
{ 

$("#d18").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn19").click(function() 
{ 

$("#d19").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn20").click(function() 
{ 

$("#d20").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn21").click(function() 
{ 

$("#d21").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn22").click(function() 
{ 

$("#d22").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn23").click(function() 
{ 

$("#d23").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn24").click(function() 
{ 

$("#d24").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn25").click(function() 
{ 

$("#d25").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn26").click(function() 
{ 

$("#d26").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn27").click(function() 
{ 

$("#d27").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn28").click(function() 
{ 

$("#d28").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn29").click(function() 
{ 

$("#d29").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn30").click(function() 
{ 

$("#d30").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn31").click(function() 
{ 

$("#d31").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn32").click(function() 
{ 

$("#d32").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn33").click(function() 
{ 

$("#d33").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn34").click(function() 
{ 

$("#d34").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn35").click(function() 
{ 

$("#d35").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn36").click(function() 
{ 

$("#d36").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn37").click(function() 
{ 

$("#d37").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn38").click(function() 
{ 

$("#d38").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn39").click(function() 
{ 

$("#d39").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn40").click(function() 
{ 

$("#d40").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn41").click(function() 
{ 

$("#d41").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn42").click(function() 
{ 

$("#d42").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn43").click(function() 
{ 

$("#d43").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn44").click(function() 
{ 

$("#d44").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn45").click(function() 
{ 

$("#d45").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn46").click(function() 
{ 

$("#d46").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn47").click(function() 
{ 

$("#d47").toggle(); 

}); 

}); 


//toggle full story
$(document).ready(function() 
{ 

$("#shbtn48").click(function() 
{ 

$("#d48").toggle(); 

}); 

}); 


//toggle full story
$(document).ready(function() 
{ 

$("#shbtn49").click(function() 
{ 

$("#d49").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn50").click(function() 
{ 

$("#d50").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn51").click(function() 
{ 

$("#d51").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn52").click(function() 
{ 

$("#d52").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn53").click(function() 
{ 

$("#d53").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn54").click(function() 
{ 

$("#d54").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn55").click(function() 
{ 

$("#d55").toggle(); 

}); 

}); 


//toggle full story
$(document).ready(function() 
{ 

$("#shbtn56").click(function() 
{ 

$("#d56").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn57").click(function() 
{ 

$("#d57").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn58").click(function() 
{ 

$("#d58").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn59").click(function() 
{ 

$("#d59").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn60").click(function() 
{ 

$("#d60").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn61").click(function() 
{ 

$("#d61").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn62").click(function() 
{ 

$("#d62").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn63").click(function() 
{ 

$("#d63").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn64").click(function() 
{ 

$("#d64").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn65").click(function() 
{ 

$("#d65").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn66").click(function() 
{ 

$("#d66").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn67").click(function() 
{ 

$("#d67").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn68").click(function() 
{ 

$("#d68").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn69").click(function() 
{ 

$("#d69").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn70").click(function() 
{ 

$("#d70").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn71").click(function() 
{ 

$("#d71").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn72").click(function() 
{ 

$("#d72").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn73").click(function() 
{ 

$("#d73").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn74").click(function() 
{ 

$("#d74").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn75").click(function() 
{ 

$("#d75").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn76").click(function() 
{ 

$("#d76").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn77").click(function() 
{ 

$("#d77").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn78").click(function() 
{ 

$("#d78").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn79").click(function() 
{ 

$("#d79").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn80").click(function() 
{ 

$("#d80").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn81").click(function() 
{ 

$("#d81").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn82").click(function() 
{ 

$("#d82").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn83").click(function() 
{ 

$("#d83").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn84").click(function() 
{ 

$("#d84").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn85").click(function() 
{ 

$("#d85").toggle(); 

}); 

}); 

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn86").click(function() 
{ 

$("#d86").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn87").click(function() 
{ 

$("#d87").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn88").click(function() 
{ 

$("#d88").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn89").click(function() 
{ 

$("#d89").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn90").click(function() 
{ 

$("#d90").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn91").click(function() 
{ 

$("#d91").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn92").click(function() 
{ 

$("#d92").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn93").click(function() 
{ 

$("#d93").toggle(); 

}); 

});


//toggle full story
$(document).ready(function() 
{ 

$("#shbtn94").click(function() 
{ 

$("#d94").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn95").click(function() 
{ 

$("#d95").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn96").click(function() 
{ 

$("#d96").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn97").click(function() 
{ 

$("#d97").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn98").click(function() 
{ 

$("#d98").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn99").click(function() 
{ 

$("#d99").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn100").click(function() 
{ 

$("#d100").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn101").click(function() 
{ 

$("#d101").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn102").click(function() 
{ 

$("#d102").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn103").click(function() 
{ 

$("#d103").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn104").click(function() 
{ 

$("#d104").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn104").click(function() 
{ 

$("#d105").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn106").click(function() 
{ 

$("#d106").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn107").click(function() 
{ 

$("#d107").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn108").click(function() 
{ 

$("#d108").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn109").click(function() 
{ 

$("#d109").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn110").click(function() 
{ 

$("#d110").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn111").click(function() 
{ 

$("#d111").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn112").click(function() 
{ 

$("#d112").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn113").click(function() 
{ 

$("#d113").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn114").click(function() 
{ 

$("#d114").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn115").click(function() 
{ 

$("#d115").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn116").click(function() 
{ 

$("#d116").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn117").click(function() 
{ 

$("#d117").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn118").click(function() 
{ 

$("#d118").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn119").click(function() 
{ 

$("#d119").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn120").click(function() 
{ 

$("#d120").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn121").click(function() 
{ 

$("#d121").toggle(); 

}); 

});

//toggle full story
$(document).ready(function() 
{ 

$("#shbtn122").click(function() 
{ 

$("#d122").toggle(); 

}); 

});
/*-------CODE BREAK------*/

/*function to change button behaviour main menu */

function salmanda1(){
document.getElementById ("demo1"). style. color ="white";

document.getElementById ("demo1"). style. fontweight ="bold";

document.getElementById
 ("demo1"). style. fontsize ="30%";

document.getElementById
 ("demo1"). style. background ="maroon";
}

function salmanda3(){
document.getElementById ("demo3"). style. color ="white";

document.getElementById ("demo3"). style. fontweight ="bold";

document.getElementById
 ("demo3"). style. fontsize ="30%";

document.getElementById
 ("demo3"). style. background ="maroon";
}


function salmanda4(){
document.getElementById ("demo4"). style. color ="white";

document.getElementById ("demo4"). style. fontweight ="bold";

document.getElementById
 ("demo4"). style. fontsize ="30%";

document.getElementById
 ("demo4"). style. background ="maroon";
}


function salmanda5(){
document.getElementById ("demo5"). style. color ="white";

document.getElementById ("demo5"). style. fontweight ="bold";

document.getElementById
 ("demo5"). style. fontsize ="30%";

document.getElementById
 ("demo5"). style. background ="maroon";
}


function salmanda6(){
document.getElementById ("demo6"). style. color ="white";

document.getElementById ("demo6"). style. fontweight ="bold";

document.getElementById
 ("demo6"). style. fontsize ="30%";

document.getElementById
 ("demo6"). style. background ="maroon";
}

function salmanda7(){
document.getElementById ("demo7"). style. color ="white";

document.getElementById ("demo7"). style. fontweight ="bold";

document.getElementById
 ("demo7"). style. fontsize ="30%";

document.getElementById
 ("demo7"). style. background ="maroon";
}

function salmanda8(){
document.getElementById ("demo8"). style. color ="white";

document.getElementById ("demo8"). style. fontweight ="bold";

document.getElementById
 ("demo8"). style. fontsize ="30%";

document.getElementById
 ("demo8"). style. background ="maroon";
}


function salmanda9(){
document.getElementById ("demo9"). style. color ="white";

document.getElementById ("demo9"). style. fontweight ="bold";

document.getElementById
 ("demo9"). style. fontsize ="30%";

document.getElementById
 ("demo9"). style. background ="maroon";
}


function salmanda10(){
document.getElementById ("demo10"). style. color ="white";

document.getElementById ("demo10"). style. fontweight ="bold";

document.getElementById
 ("demo10"). style. fontsize ="30%";

document.getElementById
 ("demo10"). style. background ="maroon";
}


function salmanda11(){
document.getElementById ("demo11"). style. color ="white";

document.getElementById ("demo11"). style. fontweight ="bold";

document.getElementById
 ("demo11"). style. fontsize ="30%";

document.getElementById
 ("demo11"). style. background ="maroon";
 }

function salmanda12(){
document.getElementById ("demo12"). style. color ="white";

document.getElementById ("demo12"). style. fontweight ="bold";

document.getElementById
 ("demo12"). style. fontsize ="30%";

document.getElementById
 ("demo12"). style. background ="maroon";
}

function salmanda13(){
document.getElementById ("demo13"). style. color ="white";

document.getElementById ("demo13"). style. fontweight ="bold";

document.getElementById
 ("demo13"). style. fontsize ="30%";

document.getElementById
 ("demo13"). style. background ="maroon";
}

function salmanda14(){
document.getElementById ("demo14"). style. color ="white";

document.getElementById ("demo14"). style. fontweight ="bold";

document.getElementById
 ("demo14"). style. fontsize ="30%";

document.getElementById
 ("demo14"). style. background ="maroon";
}

function salmanda15(){
document.getElementById ("demo15"). style. color ="white";

document.getElementById ("demo15"). style. fontweight ="bold";

document.getElementById
 ("demo15"). style. fontsize ="30%";

document.getElementById
 ("demo15"). style. background ="maroon";
}