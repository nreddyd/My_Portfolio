$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
    $(this).toggleClass("fa-angle-double-right fa-angle-double-left");
  });
});
