const scenes = [
  { title:"Cảnh 1 – Chia ly lặng lẽ", text:"Nỗi đau còn kìm nén, chưa bật khóc.", correct:"phunghoang" },
  { title:"Cảnh 2 – Oan khuất bật khóc", text:"Nỗi uất ức vỡ òa không kìm.", correct:"namai" },
  { title:"Cảnh 3 – Bi tráng trước giờ chết", text:"Nhân vật giữ khí phách, không khóc.", correct:"phunghoang" },
  { title:"Cảnh 4 – Tuyệt vọng đứt ruột", text:"Mất người thân, tiếng khóc bật ra.", correct:"namai" },
  { title:"Cảnh 5 – Hồi tưởng trong đêm", text:"Nhân vật nhớ quá khứ, buồn man mác.", correct:"phunghoang" }
];

let i=0;
const title = document.getElementById("scene-title");
const text = document.getElementById("scene-text");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function load() {
  title.textContent = scenes[i].title;
  text.textContent = scenes[i].text;
  result.textContent = "";
  nextBtn.disabled = true;
}

function choose(c) {
  result.textContent = c===scenes[i].correct?"✅ Phù hợp với cảm xúc cảnh diễn.":"❌ Chưa phù hợp với tầng cảm xúc này.";
  nextBtn.disabled=false;
}

function nextScene() {
  i++;
  if(i>=scenes.length){
    title.textContent="🎉 Hoàn thành";
    text.textContent="Bạn đã bước vào tư duy của người làm cải lương.";
    document.querySelectorAll("button").forEach(b=>b.style.display="none");
    return;
  }
  load();
}

load();
