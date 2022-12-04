$("#Modal").hide();
$('.Radio').eq(0).on("change", function(e){ 
    $('input[name^=field]').each(function()
    { 
      if(e.target != this)
        this.checked = false; 
    });
})

$('form').eq(0).on('submit', function() {
     return $('input[name^=field]:checked:enabled').length == 1;
});
var True = 0, False = 0, counter = 0;
$('#agree').on('click', function(english, ukrainian){  
        if(($("#easy").prop('checked')==false)&&($("#midl").prop('checked')==false)&&($("#hard").prop('checked')==false)) {  
            alert("Оберіть складність")
        }  
  if($("#easy").prop('checked')) {
$(".Window button").click(restart);
$("body>button").click(next);	
		
 var english = [
  'Breakfast ',
  'Child',
  'Leg ',
  'Room',
  'Book',
  'Girl',
  'Side',
  'Dictionary',
  'Education ',
  'Clothing'
];
var ukrainian = [
  "сніданок",
  "дитина",
  "нога",
  "кімната",
  "книга",
  "дівчина",
  "сторона",
  "словник",
  "освіта",
  "одяг"
];

        } 
		if($("#midl").prop('checked')) {
$(".Window button").click(restart);
$("body>button").click(next);	

  var english = [
  'reason  ',
  'change ',
  'fulfilled ',
  'affairs',
  'obsessed',
  'to measure',
  'succes',
  'significance',
  'metric ',
  'determined'
];
var ukrainian = [
  "причина",
  "зміна",
  "задоволений",
  "стосунки",
  "захоплений",
  "міряти",
  "успіх",
  "важливість",
  "поразка",
  "рішучій"
];

        } 
		if($("#hard").prop('checked')) {
$(".Window button").click(restart);
$("body>button").click(next);
		
var english = [
  'flocci  ',
  'nihili ',
  'earring ',
  'crutch',
  'glimpse',
  'stagger',
  'descendant',
  'diaper',
  'concession ',
  'breathalyzer'
];
var ukrainian = [
  "пучок шерсті",
  "нічого",
  "сережка",
  "милиця",
  "проблиск",
  "хитання",
  "спадок",
  "пелена",
  "поступка",
  "алкотестер"
];
       }

	function Random(english, ukrainian) {
  for (let i = 0 ; i < english.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [english[i], english[j]] = [english[j], english[i]];
    [ukrainian[i], ukrainian[j]] = [ukrainian[j], ukrainian[i]];
  }
}
function next() {
  if ($('.input1')[0].value.toLowerCase() == ukrainian[counter].toLowerCase()) {
    $('#True').text(`${++True}/10`);
  } else {
    $('#False').text(`${++False}/10`);
  }
  if (counter == 9) {
    $("#Modal").show();
	$("#Message").text("Ви вгадали " + `${True}`+ " з 10");
    return;
  }
  $("#Card").text(english[++counter]);
  $("#Counter").text(`${counter+1}/10`);
 $('input')[0].value = null;}

Random(english, ukrainian);
$("#Card").text(english[counter]);	
   }); 
function restart() {
  document.location.reload();
}



