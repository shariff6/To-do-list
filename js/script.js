function Tasks(task, description) {
  this.inputTask = task
  this.inputDescripion = description
}
Tasks.prototype.taskName = function() {
  return this.inputTask + " " + this.inputDescripion;
}

$(document).ready(function() {
      $("form#tasks").submit(function(event) {
            event.preventDefault();
            var inputtedTask = $("input#importantTask").val();
            var inputtedDescription = $("textarea#comment").val();

            var newTask = new Tasks(inputtedTask, inputtedDescription);
            $("ul#tasks").append("<li>" + newTask.taskName() + "</li>");
          })
        })
