$("#arrow-down").on("click", function() {
  const photos = $("#photos").position().top;

  $("html, body").animate(
    {
      scrollTop: photos
    },
    800
  );
});
