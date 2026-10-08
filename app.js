const daftarEl = document.getElementById("daftar");
const kosongEl = document.getElementById("kosong");
const counterEl = document.getElementById("counter");

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

render();
