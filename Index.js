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

var note_to_add = container.append(
  "<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia minus minima ad dolorem non expedita quibusdam totam dicta unde quam sint dignissimos optio, ut cum saepe molestiae debitis? Ducimus?</div>"
);
note_to_add.addClassList = "note"
