const scenes = [
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.24.47%20PM.jpeg",
    text: "Happy Teddy Day 🧸🤍"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.27%20PM.jpeg",
    text: "This is Bruno…\nand today, he’s not just my teddy."
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.00%20PM.jpeg",
    text: "After seeing you in college,\neven my low-effort coding felt less…"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.41%20PM.jpeg",
    text: "Because your beauty,\nyour personality,\nyour voice…\n\nand YOU deserve something better ✨"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.14%20PM.jpeg",
    text: "Hi… I’m Bruno 🧸\n\nCan you please tell my brother…\nif you’ll be his Valentine this year? 👉👈"
  },
  {
    img: "https://raw.githubusercontent.com/rc200601-art/teddy-day/main/WhatsApp%20Image%202026-02-09%20at%207.25.51%20PM.jpeg",
    text: "I hope I’m the only one\nwho sends you a Teddy Day surprise…\nand a teddy too 🧸✨"
  }
];

let index = 0;

const card = document.getElementById("card");
const photo = document.getElementById("photo");
const text = document.getElementById("text");

function showScene(i) {
  photo.src = scenes[i].img;
  text.innerText = scenes[i].text;
}

showScene(index);

card.addEventListener("click", () => {
  index++;
  if (index < scenes.length) {
    showScene(index);
  }
});
