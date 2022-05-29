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
let note_container = $("#container");
let note_input = $("#inputfield");


$("#addnote").click(function() {
  let created_note = new note();
  let title = created_note.title;
  let desc = created_note.description;
  text_to_add = $("#container").append("<p>");
  $("p").addClass("note")
  $("p").append(desc);
  $("#inputfield").val("");
  $("#title").val("")
  let note_list = [];
  note_list.push(created_note);
  localStorage.setItem("My Notes", JSON.stringify(note_list));
document.querySelectorAll(".note").forEach((item) => {
  item.addEventListener("click", (event) => {
    $("p").css("text-decoration", "line-through");
  });
});

document.querySelectorAll(".note").forEach((item) => {
  item.addEventListener("dblclick", (event) => {
    $("p").remove();
  });
});
})
