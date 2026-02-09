let index = 0;
let musicStarted = false;

const photo = document.getElementById("photo");
const text = document.getElementById("text");
const music = document.getElementById("bgMusic");

const photos = [
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.24.47%20PM.jpeg",
    text: "This is Bruno… 🐶🤍"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.27%20PM.jpeg",
    text: "And today, he’s not just my teddy 🧸"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.00%20PM.jpeg",
    text: "He’s holding something very soft… 💗"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.41%20PM.jpeg",
    text: "Low effort coding was less… after seeing you ✨"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.14%20PM.jpeg",
    text: "Bruno wants to ask… will you be his Valentine? 🥺❤️"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.51%20PM.jpeg",
    text: "And maybe… I hope I’m the only one sending this 🫶"
  }
];

// load first
photo.src = photos[0].img;
text.innerText = photos[0].text;

document.body.addEventListener("click", () => {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }

  if (index < photos.length - 1) {
    index++;
    photo.style.transform = "scale(0.95)";
    setTimeout(() => {
      photo.src = photos[index].img;
      text.innerText = photos[index].text;
      photo.style.transform = "scale(1)";
    }, 250);
  }
});
