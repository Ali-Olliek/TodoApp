// ---------------------HEADER-------------------------//

// Display week day, quote of the day and author in header

let quotes = ['"It always seems impossible until it is done"','"Start where you are. Use what you have. Do What you can"','"When something is important enough, you do it even if the odds are not in your favor"','"If you are going through hell, keep going"','"It does not matter how slowly you go as long as you do not stop"','"Veni vidi vici"','"If you can dream it, you can do it"'];
let authors = ["Nelson Mandela","Arthur Ashe","Elon Musk","Winston Churchill","Confucius","Julius Ceasar","Walt Disney"]
let weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let display_day = $("#day");
let display_quotes = $("#quote");
let display_author = $("#author");
const d = new Date();
const index = d.getDay()-1;
let day = weekdays[index];
let quote_of_the_day = quotes[index];
let quote_author = authors[index];
$("#author").html(quote_author);
$("#quote").html(quote_of_the_day);
$("#day").html(day)

//-----------------------Class Construction-------------------------------- //
const note = class {
    constructor (Id, Title, Description, Point, IsDone, CreatedAt) {
      this.id = get_random_id();
      this.title = $("#title").val();
      this.description = $("#inputfield").val(); //https://stackoverflow.com/a/31080986
      this.point = $("#prio").val();
      this.Isdone = false;
      this.CreatedAt = Date.now() / mil_in_year;
    }
}

let mil_in_year = 3.154e+10;
get_random_id = () => {
   return Math.floor(Math.random() * 1000);
}

// -----------------------Main------------------------------ //

let create_main_list = function(){
  var main_list = JSON.parse(localStorage.getItem("My Notes"));
  return main_list
}

// default sort by time created
let default_sort = function(array){
  array.sort((note1, note2) => {
    if (note1.point > note2.point) {
      return 1;
    } else {
      return -1;
    }
  });
  $("#notelist").html("");
  for (let i = 0; i < array.length; i++) {
    text = array[i].description;
    sorted_notes = $("#notelist").append("<li>");
    $("#container ul li:last").append(text);
    $("li").addClass("note");
  }
}

// ------Display Previous Notes On Load----- //

$(document).ready(function () {
  main_list = create_main_list()
  if(main_list != null){
    
    for(let i = 0; i<main_list.length;i++){
      let text_to_add = main_list[i].description;
      $("#notelist").append("<li>");
      $("#container ul li:last").append(text_to_add); //https://stackoverflow.com/q/1145208/18590539
      $("li").addClass("note");

  }      

  }else{
  return main_list = []
  }  
  
});

// ------Add a Note------- //

let add_note = $("#addnote");
let note_list = $("#notelist");
let note_input = $("#inputfield");
let list_of_notes = [];

$("#addnote").click(function () {
  main_list = create_main_list()
  let new_list = [];                                       // list of notes we are going to add
  if (note_input.val()===""){                             // Prevent adding empty notes
    alert("Note is empty");
    return
  }else{
    var created_note = new note();
    let text_to_add = created_note.description;
    new_list.push(created_note)
    text_to_add = $("#notelist").append("<li>");
    $("#container ul li:last").append(note_input.val()); //https://stackoverflow.com/q/1145208/18590539
    $("li").addClass("note");
    $("#inputfield").val("");
    $("#title").val("");

    $(".note").on("click", function () {
      $(this).closest("li").css({"text-decoration": "line-through","background-color": "#868686"});
      console.log("hey");
    });
    $(".note").on("dblclick", function () {
      $(this).closest("li").remove();
    });

    // Create and merge List of notes and convert to JSON //
    if(main_list == null){
      list_of_notes=new_list;
      localStorage.setItem("My Notes", JSON.stringify(list_of_notes));
    }else{
      list_of_notes = new_list.concat(main_list);
      localStorage.setItem("My Notes", JSON.stringify(list_of_notes));
    }
    location.reload()
  }
});

// -------- DueDate ----------//

let time_due = $("#date").val();
if (time_due - Date.now < 8.64e7) {
  $("body").css("background-color", "red");
}
 
// -------Reload---------//

$("#todo").click(function () {
  location.reload();
});

// search based on title or description 
var search = function (array){
    $("#search").keypress(function (event) {
      var keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == "13") {
        var found_notes = [];
        for (let i = 0; i < array.length; i++) {
          text_to_search = $("#search").val();
          let found = Object.values(array[i]).includes(text_to_search);

          // store the found values in an array

          if (found) {
            found_notes.push(array[i]);
          }

          // display the found notes

          $("#notelist").html("");
          for (let j = 0; j < found_notes.length; j++) {
            text = found_notes[j].description;
            sorted_notes = $("#notelist").append("<li>");
            $("#container ul li:last").append(text);
            $("li").addClass("note");
          }
        }
      }
    });
}
// Sort by prio
var sort_by_prio = function (array){
  $("#sort").on("click", function(){
    array.sort((note1,note2) => {
      if(note1.point>note2.point){
      return 1}else{
        return -1
      }
    })
    $("#notelist").html("")
    for(let i = 0; i<array.length;i++){
      text = array[i].description
      sorted_notes = $("#notelist").append("<li>");
      $("#container ul li:last").append(text);
      $("li").addClass("note");
    }
  })
}

main_list=create_main_list()
search(main_list)
sort_by_prio(main_list)