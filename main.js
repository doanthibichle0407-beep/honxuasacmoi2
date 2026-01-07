document.querySelectorAll('.navbar a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.href = a.href;
  });
});

document.addEventListener('click', function unlock() {
  document.querySelectorAll('audio').forEach(a =>
    a.play().then(() => a.pause()).catch(() => {})
  );
  document.removeEventListener('click', unlock);
});


async function updateVisitCount() {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_visit`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json"
      }
    });

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/visits?id=eq.1&select=count`,
      { headers: { apikey: SUPABASE_KEY } }
    );

    const data = await res.json();
    const el = document.getElementById("visitCount");
    if (el && data.length > 0) {
      el.innerText = data[0].count;
    }
  } catch (err) {
    console.error("Visit error:", err);
  }
}

async function sendComment() {
  const name = document.getElementById("cmtName").value.trim();
  const content = document.getElementById("cmtText").value.trim();

  if (!name || !content) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  await fetch(`${SUPABASE_URL}/rest/v1/comments`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, content })
  });

  document.getElementById("cmtStatus").innerText =
    "✅ Cảm ơn bạn đã góp ý!";

  document.getElementById("cmtName").value = "";
  document.getElementById("cmtText").value = "";

  loadComments(); 
}

async function loadComments() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/comments?select=*&order=created_at.desc`,
    { headers: { apikey: SUPABASE_KEY } }
  );

  const data = await res.json();
  const list = document.getElementById("commentList");

  if (!list) return;

  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>Chưa có góp ý nào.</p>";
    return;
  }

  data.forEach(cmt => {
    const item = document.createElement("div");
    item.style.borderBottom = "1px solid #ccc";
    item.style.marginBottom = "10px";
    item.innerHTML = `
      <strong>${cmt.name}</strong><br>
      <small>${new Date(cmt.created_at).toLocaleString()}</small>
      <p>${cmt.content}</p>
    `;
    list.appendChild(item);
  });
}

// Khi DOM đã load
document.addEventListener("DOMContentLoaded", () => {
  updateVisitCount();
  loadComments();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.navbar ul');

  if (toggle && menu) {
    // Toggle menu khi click nút hamburger
    toggle.addEventListener('click', (e) => {
      e.stopPropagation(); // ngăn click bubble ra document
      menu.classList.toggle('show');
    });

    // Click ngoài menu sẽ đóng menu
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("exhibitStart");
  if (!overlay) return;

  const startExperience = () => {
    overlay.classList.add("opened");

    if (typeof changeMusic === "function") {
      changeMusic("main");
    }

    setTimeout(() => overlay.remove(), 600);

    // gỡ listener sau khi đã chạm
    document.removeEventListener("click", startExperience);
    document.removeEventListener("touchstart", startExperience);
  };

  // Desktop
  document.addEventListener("click", startExperience);

  // Mobile
  document.addEventListener("touchstart", startExperience);
});
