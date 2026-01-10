async function loadSongs() {
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const list = document.querySelector(".music-list");
  list.innerHTML = "";

  data.forEach(song => {
    const item = document.createElement("div");
    item.className = "music-item";

    item.innerHTML = `
      <h4>${song.title}</h4>
      <p>Nghệ sĩ trẻ: ${song.artist} • 👂 ${song.plays}</p>
      <audio controls>
        <source src="${song.audio_url}" type="audio/mpeg">
      </audio>
    `;

    const audio = item.querySelector("audio");
    audio.addEventListener("play", () => increasePlay(song.id));

    list.appendChild(item);
  });
}

async function increasePlay(id) {
  await supabase
    .from("songs")
    .update({ plays: supabase.raw("plays + 1") })
    .eq("id", id);
}

loadSongs();
