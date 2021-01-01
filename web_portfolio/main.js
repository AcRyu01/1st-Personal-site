var typed = new Typed("#type", {
    // Waits 1000ms after typing "First"
    strings: ["AcRyu", "Achira Changchai", "Developer"],
    smartBackspace: true,
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })