const note = class {
    constructor (Id, Title, Description, Point, IsDone, CreatedAt) {
        this.id = Id;
        this.title = Title;
        this.description = Description;
        this.point = Point;
        this.Isdone = IsDone;
        this.CreatedAt = CreatedAt;
    }
}

let add_note = $("#addnote");
let note_container = $("#container");
let note_input = $("#inputfield")

$("#addnote").click(function(){
  var written_note = document.createElement("p");
  written_note.classList.add("note");
  written_note.innerText = $("#inputfield").val(); //https://stackoverflow.com/a/31080986
  note_container.append(written_note);
  $("#inputfield").val("")
  $(written_note).click(function(){
    $(written_note).css("text-decoration","line-through")
  })
  $(written_note).dblclick(function(){
    $(written_note).remove()
  })
})