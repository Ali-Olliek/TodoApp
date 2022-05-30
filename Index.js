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
let list_of_notes = []


$("#addnote").click(function() {
  var created_note = new note();
  let text_to_add = created_note.description;
  text_to_add = $("#notelist").append("<li>");
  $("#container ul li:last").append(note_input.val()); //https://stackoverflow.com/q/1145208/18590539
  $("li").addClass("note")
  
  
  // reset fields
  $("#inputfield").val("");
  $("#title").val("")

  
  // delete and mark note as done
  $(".note").each(function(){
    $(this).on("click", function(){
      $(this).closest("li").css("text-decoration", "line-through");
      this.Isdone = true;
      console.log(this.Isdone)
  })
    
  })
  
  $(".note").on("dblclick", function(){
    $(this).closest("li").remove()
  })

  // Create List of notes
  list_of_notes.push(created_note)
  console.log(list_of_notes)

  // create JSON object
  note_list.push(created_note);
  localStorage.setItem("My Notes", JSON.stringify(list_of_notes));

})


  