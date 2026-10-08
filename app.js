const daftarEl = document.getElementById("daftar");
const kosongEl = document.getElementById("kosong");
const counterEl = document.getElementById("counter");
const formEl = document.getElementById("form-tugas");
const judulEl = document.getElementById("judul");
const matkulEl = document.getElementById("matkul");
const deadlineEl = document.getElementById("deadline");
const errorEl = document.getElementById("error");

let tugas = [
  { id: 1, judul: "Lab 10 event delegation", matkul: "Pemrograman Web", deadline: "2026-10-08", selesai: false },
  { id: 2, judul: "ERD sistem perpustakaan", matkul: "Basis Data", deadline: "2026-10-12", selesai: true },
];

function render() {
  daftarEl.textContent = "";

  for (const t of tugas) {
    const li = document.createElement("li");
    li.dataset.id = t.id;
    if (t.selesai) li.classList.add("selesai");

    const centang = document.createElement("input");
    centang.type = "checkbox";
    centang.checked = t.selesai;

    const judul = document.createElement("span");
    judul.className = "judul";
    judul.textContent = t.judul;

    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = `${t.matkul} · deadline ${t.deadline}`;

    const isi = document.createElement("div");
    isi.className = "isi";
    isi.append(judul, meta);

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.className = "btn-hapus";
    hapus.textContent = "×";

    li.append(centang, isi, hapus);
    daftarEl.append(li);
  }

  const jumlahAktif = tugas.filter((t) => !t.selesai).length;
  counterEl.textContent = `${jumlahAktif} tugas aktif`;
  kosongEl.hidden = tugas.length > 0;
}

function tampilError(pesan) {
  errorEl.textContent = pesan;
  errorEl.hidden = false;
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const judul = judulEl.value.trim();
  const deadline = deadlineEl.value;

  if (judul.length < 3) {
    tampilError("Judul tugas minimal 3 karakter.");
    return;
  }

  if (!deadline) {
    tampilError("Deadline wajib diisi.");
    return;
  }

  errorEl.hidden = true;

  tugas.push({
    id: Date.now(),
    judul: judul,
    matkul: matkulEl.value,
    deadline: deadline,
    selesai: false,
  });

  formEl.reset();
  judulEl.focus();
  render();
});

render();
