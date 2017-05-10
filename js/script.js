function Tasks(task, description) {
  this.inputTask = task
  this.inputDescription = description
}
Tasks.prototype.taskName = function() {
  return this.inputTask;
}

$(document).ready(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#importantTask").val();
    var inputtedDescription = $("textarea#comment").val();

    var newTask = new Tasks(inputtedTask, inputtedDescription);
    $("ul#tasks").append("<li><span class = 'describe'>" + newTask.taskName() + "</span></li>");
    $("input#importantTask").val();
    $("textarea#comment").val();
    $(".describe").click(function() {
      $("#show-description").last().toggle();
      $("#show-description h2").text(newTask.inputTask);
      $(".task-description").text(newTask.inputDescription);
    })
  })
})
