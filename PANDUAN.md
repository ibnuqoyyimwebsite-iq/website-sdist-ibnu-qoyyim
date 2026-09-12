# Panduan Pemasangan Website SDIST Ibnu Qoyyim

## 1. Isi folder ini
- `index.html` dan 14 halaman lain (menu lengkap ada di header/footer setiap halaman)
- `css/style.css` — semua tampilan (warna, font, layout)
- `js/script.js` — menu mobile
- `assets/logo-sdist.jpg` — logo sekolah (dari file yang Bapak unggah)

## 2. Menghubungkan ke domain sch.id
Karena domain sudah ada, Bapak tinggal butuh **hosting** (jika belum ada). Langkahnya:
1. Beli/aktifkan paket hosting (banyak penyedia lokal: Niagahoster, Rumahweb, IDCloudHost, dll — semua punya paket khusus sekolah).
2. Di panel domain sch.id (biasanya di PANDI atau pengelola domain sekolah), arahkan **Nameserver** domain ke nameserver hosting yang dibeli.
3. Login ke **cPanel/hosting**, buka **File Manager**, masuk ke folder `public_html`, lalu **upload semua isi folder `site/` ini** (bukan folder `site` itu sendiri — isinya langsung).
4. Buka `namasekolah.sch.id` di browser — website langsung tampil.

Alternatif gratis untuk uji coba dulu sebelum hosting aktif: Netlify Drop (netlify.com/drop) atau GitHub Pages — tinggal seret folder ini, dapat link sementara.

## 3. Menambahkan bukti akreditasi (Link Bukti)
Setiap halaman `reakreditasi-komponen-*.html` punya tabel dengan kolom **Link Bukti**. Ada 2 cara:

**Cara A — manual (paling simpel):**
1. Upload dokumen bukti (PDF/foto) ke Google Drive, atur sharing jadi "Siapa saja yang punya link".
2. Buka file HTML terkait, cari baris `<a class="bukti" href="#" ...>`, ganti `href="#"` dengan link Google Drive tersebut.

**Cara B — seperti contoh MIM Janti (Google Sheets embed):**
1. Buat Google Sheets dengan kolom: No, Komponen, Butir, Indikator, Link Bukti.
2. Isi kolom Link Bukti dengan link Google Drive tiap dokumen.
3. Di Sheets: **File → Share → Publish to web → pilih tab terkait → Embed** → salin kode `<iframe>`.
4. Buka file HTML komponen terkait, cari komentar `<!-- GANTI DENGAN IFRAME GOOGLE SHEETS -->`, tempel iframe di situ, lalu hapus/comment tabel HTML di bawahnya.

## 4. Konten yang masih perlu diisi
Semua teks dalam tanda kurung siku `[...]` adalah placeholder — cari lewat Ctrl+F kata `[` di tiap file untuk menemukan semua bagian yang perlu diganti:
- Visi, misi, tujuan sekolah
- NPSN, status akreditasi, nama kepala sekolah
- Data guru & tenaga kependidikan (GTK)
- Foto galeri, berita, pengumuman, agenda, prestasi

## 5. Kalau butuh lebih lanjut
Kalau nanti mau ditambah: sistem admin agar bisa isi berita tanpa edit kode, form PPDB online, atau desain diperluas — tinggal bilang, tinggal dikembangkan dari fondasi yang sudah ada ini.
