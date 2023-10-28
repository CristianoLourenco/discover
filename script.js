function toggleMode() {
  let html = document.documentElement

  // ! the function toggle already have the condition seen before
  html.classList.toggle("light")

  // ! Get the image
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // ! if light mode, add light img
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // ! if dark mode, add dark img
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}
