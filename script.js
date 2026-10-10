
document.addEventListener("DOMContentLoaded", function () {
  // =====================================
  // PESAN HARIAN
  // =====================================

  const dailyMessages = [
    "Jangan lupa tersenyum hari ini, ya. Kamu pantas mendapatkan banyak hal baik.",
    "Kalau hari ini terasa berat, ingat bahwa kamu sudah melewati banyak hal sebelumnya.",
    "Kamu tidak harus sempurna untuk menjadi seseorang yang istimewa.",
    "Semoga hari ini membawa kabar baik, ketenangan, dan alasan untuk tersenyum.",
    "Jangan terlalu keras kepada diri sendiri. Kamu juga pantas mendapat istirahat.",
    "Semoga apa yang sedang kamu usahakan perlahan menemukan jalannya.",
    "Ada banyak hal kecil yang indah. Semoga kamu sempat menikmatinya hari ini.",
    "Kalau belum ada yang bilang, semoga hari ini kamu merasa dihargai.",
    "Tidak apa-apa berjalan pelan. Yang penting, jangan lupa menjaga diri sendiri.",
    "Semoga malam nanti kamu bisa beristirahat dengan hati yang lebih tenang."
  ];

  const dailyMessage = document.getElementById("dailyMessage");
  const nextMessage = document.getElementById("nextMessage");
  const messageCounter = document.getElementById("messageCounter");

  let messageIndex = 0;

  nextMessage.addEventListener("click", function () {
    messageIndex = (messageIndex + 1) % dailyMessages.length;

    dailyMessage.textContent = dailyMessages[messageIndex];
    messageCounter.textContent =
      "Pesan " + (messageIndex + 1) + " dari " + dailyMessages.length;
  });

  // =====================================
  // SURAT INTERAKTIF
  // =====================================

  const openLetter = document.getElementById("openLetter");
  const closeLetter = document.getElementById("closeLetter");
  const letterContent = document.getElementById("letterContent");

  openLetter.addEventListener("click", function () {
    letterContent.hidden = false;
    openLetter.hidden = true;

    letterContent.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });

  closeLetter.addEventListener("click", function () {
    letterContent.hidden = true;
    openLetter.hidden = false;

    openLetter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

  // =====================================
  // PILIHAN SUASANA HATI
  // =====================================

  const moodMessages = {
    senang:
      "Yeay, aku ikut senang! Nikmati momen baikmu hari ini. Semoga kebahagiaan kecil ini bertahan lebih lama dan membawa banyak hal baik. 💗",

    sedih:
      "Tidak apa-apa kalau kamu sedang sedih. Kamu tidak harus memaksakan diri untuk selalu terlihat baik-baik saja. Tarik napas perlahan, istirahat sebentar, dan beri dirimu waktu. 🌷",

    capek:
      "Kalau kamu capek, istirahatlah dulu, ya. Tidak semua hal harus selesai sekarang. Minum air, cari posisi nyaman, dan biarkan dirimu mengambil jeda. ☁️",

    kangen:
      "Rasa kangen kadang datang tiba-tiba, ya. Semoga hal yang kamu rindukan bisa segera mendekat dan membuat hatimu terasa hangat. 💌"
  };

  const moodButtons = document.querySelectorAll(".mood-button");
  const moodResult = document.getElementById("moodResult");

  moodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const mood = button.dataset.mood;

      moodButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");
      moodResult.textContent = moodMessages[mood];
      moodResult.hidden = false;
    });
  });

  // =====================================
  // TOMBOL KEJUTAN
  // =====================================

  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseMessage = document.getElementById("surpriseMessage");

  const surprises = [
    "Kejutan kecil: semoga kamu selalu punya alasan untuk tersenyum, bahkan pada hari yang paling biasa sekalipun. ♡",

    "Kalau kamu bisa melihat dirimu dari sudut pandang orang yang menyayangimu, mungkin kamu akan sadar betapa berharganya dirimu.",

    "Pengingat khusus untuk Dedeee: kamu boleh punya hari yang tidak sempurna. Itu tidak mengurangi nilai dirimu sedikit pun.",

    "Semoga suatu hari nanti kamu melihat ke belakang dan tersenyum karena sudah bertahan sejauh ini. 🌷",

    "Satu hal yang perlu kamu ingat: kamu layak mendapatkan rasa hormat, perhatian, dan kebaikan."
  ];

  let surpriseIndex = 0;

  surpriseButton.addEventListener("click", function () {
    surpriseMessage.textContent = surprises[surpriseIndex];
    surpriseMessage.hidden = false;

    surpriseIndex = (surpriseIndex + 1) % surprises.length;

    surpriseButton.textContent = "Kejutan lainnya ✨";
  });

  // =====================================
  // PESAN PENYEMANGAT
  // =====================================

  const encouragements = [
    "Pelan-pelan saja. Kamu nggak harus sempurna untuk menjadi hebat.",
    "Satu langkah kecil hari ini tetap berarti untuk masa depanmu.",
    "Jangan membandingkan perjalananmu dengan perjalanan orang lain.",
    "Kamu boleh beristirahat tanpa merasa bersalah.",
    "Hari yang sulit bukan berarti hidupmu akan selalu sulit.",
    "Rayakan juga kemajuan kecil yang sudah berhasil kamu buat.",
    "Tidak semua hal bisa kamu kendalikan, tetapi kamu bisa menjaga dirimu.",
    "Semoga kamu selalu menemukan keberanian untuk mencoba lagi.",
    "Tarik napas. Selesaikan satu hal pada satu waktu.",
    "Semoga besok membawa kesempatan baru dan hati yang lebih tenang."
  ];

  const encouragementText = document.getElementById("encouragementText");
  const encouragementButton =
    document.getElementById("encouragementButton");

  let encouragementIndex = 0;

  encouragementButton.addEventListener("click", function () {
    encouragementIndex =
      (encouragementIndex + 1) % encouragements.length;

    encouragementText.textContent =
      encouragements[encouragementIndex];
  });
});
