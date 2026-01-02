/* ===== SMOOTH SCROLL NAV ===== */
document.querySelectorAll('.navbar a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.href = a.href;
  });
});

/* ===== UNLOCK AUDIO (CHROME POLICY) ===== */
document.addEventListener('click', function unlock() {
  document.querySelectorAll('audio').forEach(a =>
    a.play().then(() => a.pause()).catch(() => {})
  );
  document.removeEventListener('click', unlock);
});



/* ===== VISIT COUNTER ===== */
async function updateVisitCount() {
  try {
    // +1 lượt truy cập (atomic, không reset)
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_visit`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json"
      }
    });

    // Lấy số mới để hiển thị
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

/* ===== SEND COMMENT ===== */
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

  loadComments(); // load lại comment
}

/* ===== LOAD COMMENTS ===== */
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

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateVisitCount();
  loadComments();
});
document.querySelector(".menu-toggle")
  .addEventListener("click", () => {
    document.querySelector(".menu")
      .classList.toggle("active");
});



