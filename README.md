# Proyek Task Management (React)

Sebuah aplikasi web *Task Management* atau *To-Do List* yang dibangun menggunakan React dan TypeScript. Proyek ini dibuat untuk mendemonstrasikan pemahaman konsep-konsep inti dan lanjutan dalam ekosistem React, mulai dari manajemen *state* hingga interaksi dengan API Mock.

**[➡️ Lihat Live Demo](https://task-managements-react.netlify.app)**


---

## ## Fitur Utama ✨

* **Manajemen Tugas**: Pengguna dapat menambah, menghapus, dan mengubah status selesai sebuah tugas.
* **Validasi Form**: Form tambah tugas menggunakan validasi skema untuk memastikan input tidak kosong.
* **Routing Sisi Klien**: Aplikasi memiliki beberapa halaman virtual (`/`, `/active`, `/completed`) untuk memfilter tugas tanpa me-*refresh* halaman.
* **Interaksi API**: Semua operasi (CRUD) terhubung ke REST API eksternal untuk simulasi aplikasi dunia nyata.
* **Desain Responsif**: Tampilan yang nyaman digunakan di perangkat desktop maupun mobile.

---

## ## Tumpukan Teknologi (Tech Stack) 🛠️

* **Framework**: React.js
* **Bahasa**: TypeScript
* **Build Tool**: Vite (dijalankan dengan Bun)
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM
* **Manajemen Form**: React Hook Form
* **Validasi Skema**: Zod
* **Manajemen State**: React Hooks (useReducer, useMemo, useEffect)
* **API**: [my-json-server](https://github.com/typicode/my-json-server) (Mock REST API)
* **Deployment**: Netlify

---

## ## Instalasi dan Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/husnifata/task-management-react.git](https://github.com/husnifata/task-management-react.git)
    cd task-management-react
    ```

2.  **Instal semua dependensi:**
    (Pastikan kamu sudah menginstal [Bun](https://bun.sh/))
    ```bash
    bun install
    ```

3.  **Jalankan server pengembangan:**
    ```bash
    bun dev
    ```

4.  **Buka browser** dan kunjungi `http://localhost:5173` (atau alamat yang muncul di terminal).

---

### ### Catatan Tentang API

Proyek ini menggunakan API gratis dari **my-json-server** untuk simulasi *backend*. Perubahan data seperti menambah, mengubah, atau menghapus bersifat sementara di sisi server dan akan kembali ke keadaan semula setelah beberapa saat. Ini bertujuan untuk mendemonstrasikan fungsionalitas *frontend* tanpa memerlukan *database* sungguhan.
