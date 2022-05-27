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

function addText() {
  var div1 = document.getElementById("note");
  div1.innerHTML = "<input type='text'/>";
  addEventListener("keypress")
}