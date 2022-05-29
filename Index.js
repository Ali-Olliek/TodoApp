const note = class {
    constructor (Id, Title, Description, Point, IsDone, CreatedAt) {
      this.id = get_random_id();
      this.title = $("#title").val();
      this.description = $("#inputfield").val(); //https://stackoverflow.com/a/31080986
      this.point = $("#prio").val();
      this.Isdone = false;
      this.CreatedAt = Date.now() / 3.154e10/30;
    }
}

get_random_id = () => {
   return Math.floor(Math.random() * 1000);
}

let add_note = $("#addnote");
let note_list = $("#notelist");
let note_input = $("#inputfield");


$("#addnote").click(function() {
  var created_note = new note();
  text_to_add = $("#container").append("<li>");
  $("li").prev("li").append(created_note.description);
  $("li").addClass("note")
  $("#inputfield").val("");
  $("#title").val("")
  let note_list = [];
  note_list.push(created_note);
  localStorage.setItem("My Notes", JSON.stringify(note_list));
  $(".note").on("click", function(){
    $(this).closest("p").css("text-decoration", "line-through");
  })
  $(".note").on("dblclick", function(){
    $(this).closest("p").remove()
  })

})
