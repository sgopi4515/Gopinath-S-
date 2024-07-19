const images = [
  {
    src: "https://iili.io/d36prss.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pUzX.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36p6qG.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pP1f.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pQ72.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pgXn.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pLdl.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: 'https://iili.io/d36p8bt.jpg"',
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: 'https://iili.io/d36ptm7.jpg"',
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pig4.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pmXe.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36y9qb.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pbI9.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d36pZeS.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  {
    src: "https://iili.io/d3PBjB2.jpg",
    text: "Lorem ipsum dolor sit amet elit.",
  },
  // Voeg hier meer afbeeldingen en beschrijvingen toe als nodig
];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById("modal-img").src = images[index].src;
  document.getElementById("modal-text").innerText = images[index].text;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function prevImage() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  updateModal();
}

function nextImage() {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  updateModal();
}

function updateModal() {
  document.getElementById("modal-img").src = images[currentIndex].src;
  document.getElementById("modal-text").innerText = images[currentIndex].text;
}
