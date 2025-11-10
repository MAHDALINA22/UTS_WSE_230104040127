# 🧩 UTS Web Service Engineering

**Nama:** Mahdalina  
**NIM:** 230104040127  
**Kelas:** TI23B  
**Dosen Pengampu:** Muhayat, M.IT  
**Mata Kuliah:** Web Service Engineering  
**Resource:** Articles  
**Framework:** Node.js + Express.js  

---

## 📘 Deskripsi Singkat

Proyek ini merupakan hasil **Ujian Tengah Semester (UTS)** mata kuliah *Web Service Engineering*  
dengan membangun RESTful API berbasis **Express.js**.  
Resource yang digunakan adalah **articles**, dengan field utama:

```json
{
  "id": 1,
  "title": "Judul Artikel",
  "author": "Nama Penulis",
  "content": "Isi artikel"
}


API ini menerapkan prinsip 7 RESTful Principles, dilengkapi dengan validasi, error handling,
dan endpoint dokumentasi /api/info.

📂 Struktur Folder
UTS_WSE_230104040127/
│
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── articles.controller.js
│   ├── data/
│   │   └── articles.data.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── validateArticle.js
│   ├── routes/
│   │   └── articles.routes.js
│   └── utils/
│       └── apiResponse.js
│
├── package.json
└── README.md
🚀 Cara Menjalankan

1.Pastikan Node.js dan npm sudah terinstal.
2.Jalankan perintah berikut di terminal VS Code:
npm install
npm run dev
3.Server akan berjalan di: http://localhost:3000

📡 Daftar Endpoint API
| Method | Endpoint            | Deskripsi                     | Status Code     |
| ------ | ------------------- | ----------------------------- | --------------- |
| GET    | `/api/articles`     | Ambil semua artikel           | 200             |
| GET    | `/api/articles/:id` | Ambil artikel berdasarkan ID  | 200 / 404       |
| POST   | `/api/articles`     | Tambah artikel baru           | 201 / 400       |
| PUT    | `/api/articles/:id` | Update artikel berdasarkan ID | 200 / 400 / 404 |
| DELETE | `/api/articles/:id` | Hapus artikel berdasarkan ID  | 204 / 404       |
| GET    | `/api/info`         | Menampilkan informasi API     | 200             |
🧠 Validasi & Error Handling

Semua field (title, author, content) wajib diisi
Jika salah satu kosong → 400 Bad Request
Jika ID tidak ditemukan → 404 Not Found
Jika terjadi kesalahan internal → 500 Internal Server Error
Contoh respon error:
{
  "status": "fail",
  "message": "Field 'title', 'author', dan 'content' wajib diisi"
}
🌐 Contoh Response Sukses
GET /api/articles
json
{
  "status": "success",
  "message": "Berhasil mengambil semua artikel",
  "data": [
    {
      "id": 1,
      "title": "Mengenal RESTful API",
      "author": "Mahdalina",
      "content": "Artikel ini menjelaskan dasar RESTful API dan prinsip utamanya."
    }
  ]
}

GET /api/info
json
{
  "name": "UTS Web Service Engineering",
  "author": "Mahdalina",
  "nim": "230104040127",
  "resource": "articles",
  "version": "1.0.0"
}
