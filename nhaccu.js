const instrumentInfo = {
 dantranh: {
  name: "Đàn Tranh",
  desc: `Đàn tranh (còn gọi là đàn thập lục) là nhạc cụ dây truyền thống
của các quốc gia phương Đông, trong đó có Việt Nam.
Nhạc cụ này có xuất xứ từ Trung Quốc và đã được Việt hóa,
giữ vị trí quan trọng trong âm nhạc dân gian và cải lương.

Đàn tranh thuộc họ dây, chi gảy.
Do ban đầu có 16 dây nên còn được gọi là đàn Thập lục.

Đàn có hình hộp chữ nhật dài,
thường được chế tạo từ các loại gỗ tốt như gỗ thông hoặc gỗ hương,
giúp tạo độ bền và âm sắc đặc trưng.

Cấu tạo đàn tranh gồm:
1. Thân đàn: Là hộp gỗ dài, giúp cộng hưởng âm thanh tốt.
2. Dây đàn: Thường từ 16 đến 25 dây, làm bằng kim loại hoặc tơ.
3. Cầu đàn (con nhạn): Dùng để nâng dây và điều chỉnh cao độ.
4. Trục chỉnh âm: Điều chỉnh độ căng của dây, tạo các âm vực khác nhau theo ngũ cung.

Đàn tranh có nhiều loại và kiểu dáng khác nhau,
phản ánh đặc điểm văn hóa âm nhạc của từng quốc gia và vùng miền.`
},
saotruc: {
  name: "Sáo Trúc",
  desc: `Sáo trúc là nhạc cụ hơi truyền thống của Việt Nam, được làm chủ yếu từ tre hoặc trúc.
Sáo có âm thanh trong trẻo, mượt mà, gắn liền với đời sống sinh hoạt và văn hóa dân gian.

Cấu tạo sáo trúc gồm:
1. Ống sáo: Làm bằng tre/trúc, rỗng ruột.
2. Lỗ thổi: Dùng để tạo luồng hơi.
3. Các lỗ bấm: Thường từ 6–10 lỗ để thay đổi cao độ.

Sáo trúc thường được dùng trong nhạc dân gian, nhạc lễ, biểu diễn độc tấu.`
},

  dankim: {
  name: "Đàn Kìm",
  desc: `Đàn kìm (còn gọi là đàn nguyệt) là nhạc cụ truyền thống của Việt Nam, thuộc họ dây.
Nhạc cụ này có nguồn gốc từ Trung Quốc nhưng đã được Việt hóa và sử dụng rộng rãi
trong ca trù, chèo, cải lương và nhạc cung đình Huế.

Đàn kìm có hình tròn như mặt trăng, cần đàn dài, thường có 2 dây,
giữ vai trò quan trọng trong dàn nhạc tài tử và sân khấu cải lương.

Cấu tạo đàn kìm gồm:
1. Thân đàn: Hình tròn, làm bằng gỗ, giúp cộng hưởng âm thanh.
2. Cần đàn: Dài, có phím, dùng để bấm nốt.
3. Dây đàn: Thường làm bằng tơ hoặc nylon.
4. Trục lên dây: Dùng để điều chỉnh độ căng và cao độ của dây.

Âm thanh đàn kìm trong, vang, trang nghiêm,
thích hợp để diễn tả những cảm xúc sâu lắng và trữ tình.`
},

danco: {
  name: "Đàn Cò",
  desc: `Đàn cò (còn gọi là đàn nhị) là nhạc cụ truyền thống của Việt Nam,
thuộc họ dây kéo, giữ vai trò quan trọng trong âm nhạc dân gian.

Đàn cò có 2 dây, âm thanh da diết, réo rắt,
thường được sử dụng để diễn tả những cảm xúc buồn,
sâu lắng và giàu nội tâm.

Cấu tạo đàn cò gồm:
1. Bầu đàn: Thường làm bằng gỗ, mặt bọc da rắn hoặc da trăn.
2. Cần đàn: Dài, không có phím.
3. Dây đàn: Gồm hai dây, làm bằng tơ hoặc kim loại.
4. Cung kéo: Làm bằng gỗ và lông đuôi ngựa, dùng để kéo dây tạo âm thanh.

Đàn cò thường xuất hiện trong dàn nhạc dân tộc,
nhạc lễ, cải lương và hát chèo.`
},

songlang: {
  name: "Song Lang",
  desc: `Song lang là nhạc cụ gõ truyền thống của Việt Nam,
thường được sử dụng trong đờn ca tài tử và sân khấu cải lương.

Nhạc cụ này có cấu tạo đơn giản,
giữ vai trò quan trọng trong việc giữ nhịp cho dàn nhạc.

Cấu tạo song lang gồm:
1. Hai miếng gỗ hoặc tre: Được gõ vào nhau để phát ra âm thanh.
2. Cơ cấu bật: Giúp tạo tiếng “cốc” hoặc “tách” rõ ràng.

Âm thanh song lang ngắn, gọn, rõ nhịp,
giúp dẫn dắt tiết tấu và giữ sự ổn định cho toàn bộ dàn nhạc.`
},


};

const player = document.getElementById("sample-player");
player.volume = 0.7;

let audioUnlocked = false;

document.addEventListener("click", () => {
  if (audioUnlocked) return;

  audioUnlocked = true;

  player.src = "";
  player.play().catch(() => {});
  player.pause();

  console.log("🔓 Audio unlocked");
}, { once: true });

document.querySelectorAll(".card.instrument").forEach(card => {
  card.addEventListener("click", () => {
    if (!audioUnlocked) return;

    const audioSrc = card.dataset.audio;
    if (!audioSrc) return;

    player.pause();
    player.src = audioSrc;
    player.currentTime = 0;
    player.play().catch(err => {
      console.log("Play error:", err);
    });
  });
});


const popup = document.getElementById("info-popup");
const popupName = document.getElementById("popup-name");
const popupDesc = document.getElementById("popup-desc");

let hideTimeout;
let isHoveringCard = false;
let isHoveringPopup = false;

document.querySelectorAll(".card.instrument").forEach(card => {
  card.addEventListener("mouseenter", () => {
    const id = card.dataset.id;
    const data = instrumentInfo[id];
    if (!data) return;

    popupName.innerText = data.name;
    popupDesc.innerText = data.desc;

    popup.style.visibility = "hidden";
    popup.classList.add("show");

    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const popupWidth = popup.offsetWidth;
      const popupHeight = popup.offsetHeight;

      let left = rect.right + 15;
      if (left + popupWidth > window.innerWidth - 10) {
        left = rect.left - popupWidth - 15;
        if (left < 10) left = 10;
      }

      let top = rect.top + window.scrollY;
      if (top + popupHeight > window.scrollY + window.innerHeight - 10) {
        top = window.scrollY + window.innerHeight - popupHeight - 10;
      }
      if (top < window.scrollY + 10) top = window.scrollY + 10;

      popup.style.left = left + "px";
      popup.style.top = top + "px";
      popup.style.visibility = "visible";
    });

    isHoveringCard = true;
    if (hideTimeout) clearTimeout(hideTimeout);
  });

  card.addEventListener("mouseleave", () => {
    isHoveringCard = false;
    hideTimeout = setTimeout(() => {
      if (!isHoveringPopup) popup.classList.remove("show");
    }, 250);
  });
});

popup.addEventListener("mouseenter", () => {
  isHoveringPopup = true;
  if (hideTimeout) clearTimeout(hideTimeout);
});

popup.addEventListener("mouseleave", () => {
  isHoveringPopup = false;
  hideTimeout = setTimeout(() => {
    if (!isHoveringCard) popup.classList.remove("show");
  }, 250);
});

  card.addEventListener('click', () => {
    const name = card.querySelector('h4').textContent;
    const audioSrc = card.dataset.audio;

    popupName.textContent = name;
    popupDesc.textContent = `Bạn đang nghe nhạc cụ: ${name}. Nhấn play để nghe thử.`

    const player = document.getElementById('sample-player');
    player.src = audioSrc;
    player.play();

    popup.classList.add('show');
  });


popup.addEventListener('click', (e) => {
  if(e.target === popup) {
    popup.classList.remove('show');
    const player = document.getElementById('sample-player');
    player.pause();
  }
});
