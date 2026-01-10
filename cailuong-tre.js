const artists = [
  { name: "Nghệ sĩ Tiêu Minh Phụng", img: "img/tmp.png", audio: "music/tmp.mp3" },
  { name: "Nghệ sĩ Phương Mỹ Chi", img: "img/pmc.jpg", audio: "music/pmc.mp3" },
  // Thêm artist ở đây nếu cần
];

const container = document.getElementById('artistContainer');

artists.forEach(artist => {
  const card = document.createElement('div');
  card.classList.add('artist-card');
  card.innerHTML = `
    <img src="${artist.img}" alt="${artist.name}">
    <h3>${artist.name}</h3>
    <audio controls>
      <source src="${artist.audio}" type="audio/mpeg">
      Trình duyệt của bạn không hỗ trợ audio.
    </audio>
  `;
  container.appendChild(card);
});
