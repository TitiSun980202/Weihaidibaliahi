const toggle = document.getElementById("langToggle");
let lang = localStorage.getItem("weihai-lang") || "en";

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-zh]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
  toggle.textContent = lang === "en" ? "中文" : "EN";
}
toggle.addEventListener("click", () => {
  lang = lang === "en" ? "zh" : "en";
  localStorage.setItem("weihai-lang", lang);
  applyLang();
});

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Booking request — ${data.get("checkin")} — ${data.get("guests")} guest(s)`);
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Check-in: ${data.get("checkin")}
Nights: ${data.get("nights")}
Guests: ${data.get("guests")}
Room: ${data.get("room")}

Message:
${data.get("message") || ""}`
  );
  window.location.href = `mailto:hello@yourhostel.com?subject=${subject}&body=${body}`;
});

applyLang();
