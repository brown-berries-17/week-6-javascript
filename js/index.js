document.addEventListener("DOMContentLoaded", (e) => {
  const colors = {
    red: "#B22222",
    green: "#98FF98",
    blue: "#ADD8E6",
    default: "#FFFFFF"
  }

  const $body = document.body
  const $colorButtons = document.querySelectorAll(".colPicker")

  for (const $colorButton of $colorButtons) {
    $colorButton.addEventListener("click", (e) => {
      const colorCode = e.currentTarget.dataset.color

      $body.style.backgroundColor = colors[colorCode] || colors.default
    })
  }

  const carouselImgs = [
  'images/view1.jpg',
  'images/view2.jpg',
  'images/view3.jpg',
  'images/view4.jpg',
  'images/view5.jpg',
  'images/view6.jpg'
  ]
  let currentIdx = 0

  const $carousel = document.querySelector(".carousel")
  const $carouselSlideImg = $carousel.querySelector("img")

  $carouselSlideImg.addEventListener("click", (e) => {
    currentIdx = currentIdx < carouselImgs.length - 1 ? currentIdx + 1 : 0;
    
    e.currentTarget.setAttribute("src", carouselImgs[currentIdx])
  })
})
