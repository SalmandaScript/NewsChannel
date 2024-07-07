//function to download multiple files
function downloadFiles(fileUrls) {
  fileUrls.forEach(function(url) {
    var link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.click();
  });
}
//end function

//multiple files
var filesToDownload1 = [
  'pictureStory1.jpg',
  'pictureStory2.jpg',
  'pictureStory3.jpg',
  'pictureStory4.jpg'
];

//multiple files
var filesToDownload2 = [
  'techDad1.jpg',
  'techDad2.jpg',
  'techDad3.jpg',
  'techDad4.jpg'
];

//multiple files
var filesToDownload3 = [
  'pictureStory5.jpg',
  'pictureStory6.jpg',
  'pictureStory7.jpg',
  'pictureStory8.jpg'
];

//multiple files
var filesToDownload4 = [
  'theFuture1.jpeg',
  'theFuture2.jpeg',
  'theFuture3.jpeg',
  'theFuture4.jpeg',
  'theFuture5.jpeg',
  'theFuture6.jpeg',
  'theFuture7.jpeg',
  'theFuture8.jpeg'
];

//multiple files
var filesToDownload5 = [
  'nubian1.jpg',
  'nubian2.jpg',
  'nubian3.jpg',
  'nubian4.jpg',
  'nubian5.jpg',
  'nubian6.jpg',
  'nubian7.jpg',
  'nubian8.jpg',
  'nubian9.jpg',
  'nubian10.jpg',
  'nubian11.jpg',
  'nubian12.jpg',
  'nubian13.jpg',
  'nubian14.jpg',
  'nubian15.jpg'
];

//multiple files
var filesToDownload6 = [
  'changingTime1.jpg',
  'changingTime2.jpg',
  'changingTime3.jpg',
  'changingTime4.jpg',
  'changingTime5.jpg',
  'changingTime6.jpg',
  'changingTime7.jpg'
];

//multiple files
var filesToDownload7 = [
  'caspalpo1.jpg',
  'caspalpo2.jpg',
  'caspalpo3.jpg',
  'caspalpo4.jpg',
  'caspalpo5.jpg',
  'caspalpo6.jpg',
  'caspalpo7.jpg',
  'caspalpo8.jpg',
  'caspalpo9.jpg',
  'caspalpo10.jpg'
];

//multiple files
var filesToDownload8 = [
  'billWhiteHead1.jpg',
  'billWhiteHead2.jpg',
  'billWhiteHead3.jpg',
  'billWhiteHead4.jpg',
  'billWhiteHead5.jpg',
  'billWhiteHead6.jpg',
  'billWhiteHead7.jpg',
  'billWhiteHead8.jpg',
  'billWhiteHead9.jpg',
  'billWhiteHead10.jpg',
  'billWhiteHead11.jpg',
  'billWhiteHead12.jpg',
  'billWhiteHead13.jpg',
  'billWhiteHead14.jpg',
  'billWhiteHead15.jpg'
];

//multiple files
var filesToDownload9 = [
  'techDad6.jpg',
  'techDad7.jpg',
  'techDad8.jpg',
  'techDad9.jpg',
  'techDad10.jpg',
  'techDad11.jpg',
  'techDad12.jpg',
  'techDad13.jpg',
  'techDad14.jpg',
  'techDad15.jpg',
  'techDad16.jpg',
  'techDad17.jpg',
  'techDad18.jpg',
  'techDad19.jpg',
  'techDad20.jpg',
  'techDad21.jpg',
  'techDad22.jpg'
];

//multiple files
var filesToDownload10 = [
  'himbaPeople1.jpg',
  'himbaPeople2.jpg',
  'himbaPeople3.jpg',
  'himbaPeople4.jpg',
];

/*function to control multiple files 0*/
$(document).ready(function() 
{ 
$("#myCarousel").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 0*/

/*function to control multiple files 1*/
$(document).ready(function() 
{ 
$("#myCarousel1").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 1*/

/*function to control multiple files 2*/
$(document).ready(function() 
{ 
$("#myCarousel2").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 2*/

/*function to control multiple files 3*/
$(document).ready(function() 
{ 
$("#myCarousel3").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 3*/

/*function to control multiple files 4*/
$(document).ready(function() 
{ 
$("#myCarousel4").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 4*/

/*function to control multiple files 5*/
$(document).ready(function() 
{ 
$("#myCarousel5").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 5*/

/*function to control multiple files 6*/
$(document).ready(function() 
{ 
$("#myCarousel6").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 6*/

/*function to control multiple files 7*/
$(document).ready(function() 
{ 
$("#myCarousel7").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 7*/

/*function to control multiple files 8*/
$(document).ready(function() 
{ 
$("#myCarousel8").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 8*/

/*function to control multiple files 9*/
$(document).ready(function() 
{ 
$("#myCarousel9").carousel( 
{ 
interval: false 
}); 
}); 
/*end function to control multiple files 9*/


/*----------CODE BREAK---------*/

//function to calculate time content was uploaded
	 function timeSincePost(postTimestamp) {
  var seconds = Math.floor((new Date() - postTimestamp) / 1000);

  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 604800);
  if (interval > 1) {
    return interval + " weeks ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
//End function to calculate time content was uploaded

//story1
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story1").innerHTML = (timeSincePost(postTimestamp));

//story2
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story2").innerHTML = (timeSincePost(postTimestamp));

//story3
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story3").innerHTML = (timeSincePost(postTimestamp));

//story4
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story4").innerHTML = (timeSincePost(postTimestamp));

//story5
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story5").innerHTML = (timeSincePost(postTimestamp));

//story6
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story6").innerHTML = (timeSincePost(postTimestamp));

//story7
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story7").innerHTML = (timeSincePost(postTimestamp));

//story8
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story8").innerHTML = (timeSincePost(postTimestamp));

//story9
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story9").innerHTML = (timeSincePost(postTimestamp));

//story10
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story10").innerHTML = (timeSincePost(postTimestamp));

//story11
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story11").innerHTML = (timeSincePost(postTimestamp));

//story12
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story12").innerHTML = (timeSincePost(postTimestamp));

//story13
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story13").innerHTML = (timeSincePost(postTimestamp));

//story14
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story14").innerHTML = (timeSincePost(postTimestamp));

//story15
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story15").innerHTML = (timeSincePost(postTimestamp));

//story16
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story16").innerHTML = (timeSincePost(postTimestamp));

//story17
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story17").innerHTML = (timeSincePost(postTimestamp));

//story18
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story18").innerHTML = (timeSincePost(postTimestamp));

//story19
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story19").innerHTML = (timeSincePost(postTimestamp));

//story20
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story20").innerHTML = (timeSincePost(postTimestamp));

//story21
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story21").innerHTML = (timeSincePost(postTimestamp));

//story22
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story22").innerHTML = (timeSincePost(postTimestamp));

//story23
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story23").innerHTML = (timeSincePost(postTimestamp));

//story24
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story24").innerHTML = (timeSincePost(postTimestamp));

//story25
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story25").innerHTML = (timeSincePost(postTimestamp));

//story26
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story26").innerHTML = (timeSincePost(postTimestamp));

//story27
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story27").innerHTML = (timeSincePost(postTimestamp));

//story28
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story28").innerHTML = (timeSincePost(postTimestamp));

//story29
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story29").innerHTML = (timeSincePost(postTimestamp));

//story30
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story30").innerHTML = (timeSincePost(postTimestamp));

//story31
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story31").innerHTML = (timeSincePost(postTimestamp));

//story32
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story32").innerHTML = (timeSincePost(postTimestamp));

//story33
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story33").innerHTML = (timeSincePost(postTimestamp));

//story34
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story34").innerHTML = (timeSincePost(postTimestamp));

//story35
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story35").innerHTML = (timeSincePost(postTimestamp));

//story36
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story36").innerHTML = (timeSincePost(postTimestamp));

//story37
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story37").innerHTML = (timeSincePost(postTimestamp));

//story38
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story38").innerHTML = (timeSincePost(postTimestamp));

//story39
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story39").innerHTML = (timeSincePost(postTimestamp));

//story40
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story40").innerHTML = (timeSincePost(postTimestamp));

//story41
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story41").innerHTML = (timeSincePost(postTimestamp));

//story42
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story42").innerHTML = (timeSincePost(postTimestamp));

//story43
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story43").innerHTML = (timeSincePost(postTimestamp));

//story44
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story44").innerHTML = (timeSincePost(postTimestamp));

//story45
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story45").innerHTML = (timeSincePost(postTimestamp));

//story46
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story46").innerHTML = (timeSincePost(postTimestamp));

//story47
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story47").innerHTML = (timeSincePost(postTimestamp));

//story48
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story48").innerHTML = (timeSincePost(postTimestamp));

//story49
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story49").innerHTML = (timeSincePost(postTimestamp));

//story50
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story50").innerHTML = (timeSincePost(postTimestamp));

//story51
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story51").innerHTML = (timeSincePost(postTimestamp));

//story52
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story52").innerHTML = (timeSincePost(postTimestamp));

//story53
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story53").innerHTML = (timeSincePost(postTimestamp));

//story54
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story54").innerHTML = (timeSincePost(postTimestamp));

//story55
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story55").innerHTML = (timeSincePost(postTimestamp));

//story56
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story56").innerHTML = (timeSincePost(postTimestamp));

//story57
var postTimestamp = new Date('2024-05-10T12:00:00'); // 

document.getElementById("story57").innerHTML = (timeSincePost(postTimestamp));

//story58
var postTimestamp = new Date('2024-05-20T12:00:00'); // 

document.getElementById("story58").innerHTML = (timeSincePost(postTimestamp));

//story59
var postTimestamp = new Date('2024-05-20T12:00:00'); // 

document.getElementById("story59").innerHTML = (timeSincePost(postTimestamp));

//story60
var postTimestamp = new Date('2024-05-20T12:00:00'); // 

document.getElementById("story60").innerHTML = (timeSincePost(postTimestamp));

//story61
var postTimestamp = new Date('2024-05-20T12:00:00'); // 

document.getElementById("story61").innerHTML = (timeSincePost(postTimestamp));

//story62
var postTimestamp = new Date('2024-05-20T12:00:00'); // 

document.getElementById("story62").innerHTML = (timeSincePost(postTimestamp));

//story63
var postTimestamp = new Date('2024-05-30T00:00:00'); // 

document.getElementById("story63").innerHTML = (timeSincePost(postTimestamp));

//story64
var postTimestamp = new Date('2024-05-30T01:00:00'); // 

document.getElementById("story64").innerHTML = (timeSincePost(postTimestamp));

//story65
var postTimestamp = new Date('2024-05-30T02:00:00'); // 

document.getElementById("story65").innerHTML = (timeSincePost(postTimestamp));

//story66
var postTimestamp = new Date('2024-05-30T03:00:00'); // 

document.getElementById("story66").innerHTML = (timeSincePost(postTimestamp));

//story67
var postTimestamp = new Date('2024-05-30T04:00:00'); // 

document.getElementById("story67").innerHTML = (timeSincePost(postTimestamp));

//story68
var postTimestamp = new Date('2024-05-30T05:00:00'); // 

document.getElementById("story68").innerHTML = (timeSincePost(postTimestamp));

//story69
var postTimestamp = new Date('2024-05-30T06:00:00'); // 

document.getElementById("story69").innerHTML = (timeSincePost(postTimestamp));

//story70
var postTimestamp = new Date('2024-05-30T07:00:00'); // 

document.getElementById("story70").innerHTML = (timeSincePost(postTimestamp));

//story71
var postTimestamp = new Date('2024-05-30T08:00:00'); // 

document.getElementById("story71").innerHTML = (timeSincePost(postTimestamp));

//story72
var postTimestamp = new Date('2024-05-30T09:00:00'); // 

document.getElementById("story72").innerHTML = (timeSincePost(postTimestamp));

//story73
var postTimestamp = new Date('2024-05-30T10:00:00'); // 

document.getElementById("story73").innerHTML = (timeSincePost(postTimestamp));

//story74
var postTimestamp = new Date('2024-05-30T11:00:00'); // 

document.getElementById("story74").innerHTML = (timeSincePost(postTimestamp));

//story75
var postTimestamp = new Date('2024-05-30T12:00:00'); // 

document.getElementById("story75").innerHTML = (timeSincePost(postTimestamp));

/*----------missed76---------*/

//story77
var postTimestamp = new Date('2024-05-30T12:00:00'); // 

document.getElementById("story77").innerHTML = (timeSincePost(postTimestamp));

//story78
var postTimestamp = new Date('2024-05-30T12:00:00'); // 

document.getElementById("story78").innerHTML = (timeSincePost(postTimestamp));

//story79
var postTimestamp = new Date('2024-06-01T12:00:00'); // 

document.getElementById("story79").innerHTML = (timeSincePost(postTimestamp));

//story80
var postTimestamp = new Date('2024-06-01T13:00:00'); // 

document.getElementById("story80").innerHTML = (timeSincePost(postTimestamp));

//story81
var postTimestamp = new Date('2024-06-01T14:00:00'); // 

document.getElementById("story81").innerHTML = (timeSincePost(postTimestamp));

//story82
var postTimestamp = new Date('2024-06-01T15:22:00'); // 

document.getElementById("story82").innerHTML = (timeSincePost(postTimestamp));

//story83
var postTimestamp = new Date('2024-06-01T16:22:00'); // 

document.getElementById("story83").innerHTML = (timeSincePost(postTimestamp));

//story84
var postTimestamp = new Date('2024-06-01T19:22:00'); // 

document.getElementById("story84").innerHTML = (timeSincePost(postTimestamp));

//story85
var postTimestamp = new Date('2024-06-02T12:00:00'); // 

document.getElementById("story85").innerHTML = (timeSincePost(postTimestamp));

//story86
var postTimestamp = new Date('2024-06-02T12:00:00'); // 

document.getElementById("story86").innerHTML = (timeSincePost(postTimestamp));

//story87
var postTimestamp = new Date('2024-06-02T13:00:00'); // 

document.getElementById("story87").innerHTML = (timeSincePost(postTimestamp));

//story88
var postTimestamp = new Date('2024-06-02T13:00:00'); // 

document.getElementById("story88").innerHTML = (timeSincePost(postTimestamp));

//story89
var postTimestamp = new Date('2024-06-03T14:00:00'); // 

document.getElementById("story89").innerHTML = (timeSincePost(postTimestamp));

//story90
var postTimestamp = new Date('2024-06-03T20:00:00'); // 

document.getElementById("story90").innerHTML = (timeSincePost(postTimestamp));


//story91
var postTimestamp = new Date('2024-06-05T07:00:00'); // 

document.getElementById("story91").innerHTML = (timeSincePost(postTimestamp));


//story92
var postTimestamp = new Date('2024-06-05T16:00:00'); // 

document.getElementById("story92").innerHTML = (timeSincePost(postTimestamp));

//story93
var postTimestamp = new Date('2024-06-05T16:00:00'); // 

document.getElementById("story93").innerHTML = (timeSincePost(postTimestamp));


//story94
var postTimestamp = new Date('2024-06-07T13:00:00'); // 

document.getElementById("story94").innerHTML = (timeSincePost(postTimestamp));

//story95
var postTimestamp = new Date('2024-06-07T14:00:00'); // 

document.getElementById("story95").innerHTML = (timeSincePost(postTimestamp));

//story96
var postTimestamp = new Date('2024-06-07T14:00:00'); // 

document.getElementById("story96").innerHTML = (timeSincePost(postTimestamp));

//story97
var postTimestamp = new Date('2024-06-08T13:00:00'); // 

document.getElementById("story97").innerHTML = (timeSincePost(postTimestamp));

//story98
var postTimestamp = new Date('2024-06-08T13:00:00'); // 

document.getElementById("story98").innerHTML = (timeSincePost(postTimestamp));

//story99
var postTimestamp = new Date('2024-06-08T23:00:00'); // 

document.getElementById("story99").innerHTML = (timeSincePost(postTimestamp));

//story100
var postTimestamp = new Date('2024-06-08T23:28:00'); // 

document.getElementById("story100").innerHTML = (timeSincePost(postTimestamp));

//story101
var postTimestamp = new Date('2024-06-08T23:28:00'); // 

document.getElementById("story101").innerHTML = (timeSincePost(postTimestamp));

//story102
var postTimestamp = new Date('2024-06-09T21:00:00'); // 

document.getElementById("story102").innerHTML = (timeSincePost(postTimestamp));

//story103
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story103").innerHTML = (timeSincePost(postTimestamp));

//story104
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story104").innerHTML = (timeSincePost(postTimestamp));


//story105
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story105").innerHTML = (timeSincePost(postTimestamp));

//story106
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story106").innerHTML = (timeSincePost(postTimestamp));

//story107
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story107").innerHTML = (timeSincePost(postTimestamp));

//story108
var postTimestamp = new Date('2024-06-11T12:00:00'); // 

document.getElementById("story108").innerHTML = (timeSincePost(postTimestamp));

//story109
var postTimestamp = new Date('2024-06-11T15:00:00'); // 

document.getElementById("story109").innerHTML = (timeSincePost(postTimestamp));

//story110
var postTimestamp = new Date('2024-06-11T15:00:00'); // 

document.getElementById("story110").innerHTML = (timeSincePost(postTimestamp));

//story111
var postTimestamp = new Date('2024-06-11T15:00:00'); // 

document.getElementById("story111").innerHTML = (timeSincePost(postTimestamp));

//story112
var postTimestamp = new Date('2024-06-11T16:00:00'); // 

document.getElementById("story112").innerHTML = (timeSincePost(postTimestamp));

//story113
var postTimestamp = new Date('2024-06-11T16:00:00'); // 

document.getElementById("story113").innerHTML = (timeSincePost(postTimestamp));


//story114
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story114").innerHTML = (timeSincePost(postTimestamp));

//story115
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story115").innerHTML = (timeSincePost(postTimestamp));


//story116
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story116").innerHTML = (timeSincePost(postTimestamp));

//story117
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story117").innerHTML = (timeSincePost(postTimestamp));

//story118
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story118").innerHTML = (timeSincePost(postTimestamp));

//story119
var postTimestamp = new Date('2024-06-11T17:00:00'); // 

document.getElementById("story119").innerHTML = (timeSincePost(postTimestamp));

//story120
var postTimestamp = new Date('2024-07-01T14:00:00'); // 

document.getElementById("story120").innerHTML = (timeSincePost(postTimestamp));

//story121
var postTimestamp = new Date('2024-07-03T14:40:00'); // 

document.getElementById("story121").innerHTML = (timeSincePost(postTimestamp));

//

//story121
var postTimestamp = new Date('2024-07-05T17:18:00');

document.getElementById("story122").innerHTML = (timeSincePost(postTimestamp));

//