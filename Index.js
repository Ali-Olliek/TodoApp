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

var container = $("#container");

<<<<<<< HEAD
function addText() {
  var div1 = document.getElementById("note");
  div1.innerHTML = "<input type='text'/>";
  addEventListener("keypress")
}
=======
var note_to_add = container.append(
  "<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia minus minima ad dolorem non expedita quibusdam totam dicta unde quam sint dignissimos optio, ut cum saepe molestiae debitis? Ducimus?</div>"
);
note_to_add.addClassList = "note"
>>>>>>> d6e85b4cb5d65df852b177246ebe78fc9400e81b
