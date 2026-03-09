# Laporan Praktikum Jobsheet 14

## Identitas

- **Mata Kuliah**: Pemrograman Berbasis Framework
- **Program Studi**: Teknik Informatika
- **Semester**: 6
- **Praktikum**: Jobsheet 14
- **Nama**: Vincentius Leonanda Prabowo
- **NIM**: 2341720149
- **Kelas**: TI-3D

## Langkah 1 Install Next AUth

![alt text](images/image1.png)

## Langkah 2 Konfigurasi API Auth
![alt text](images/image2.png)

## Langkah 3 Tambahkan Secret
![alt text](images/image3.png)

## Langkah 4 Tambahkan Session Provider
![alt text](images/image4.png)

## Tambahkan Tombol Login dan Logout
![alt text](images/image5.png)
![alt text](images/image5-1.png)
![alt text](images/image5-2.png)


## Menambahkan Data Tambahan
![alt text](images/imag6.png)


## Proteksi Halaman Profil
![alt text](images/image7.png)

## Pengujian & Fix Code
![alt text](images/gif1)

## Pertanyaan
1. Session menggunakan JWT karena data login dapat disimpan secara aman di token tanpa perlu menyimpan session di server.

2. authorize() digunakan untuk memverifikasi login user, sedangkan callback jwt() digunakan untuk menyimpan data user ke dalam token.

3. Middleware perlu getToken() untuk mengecek apakah user sudah login atau belum.

4. Jika NEXTAUTH_SECRET tidak digunakan, token bisa lebih mudah dimanipulasi atau tidak aman.

5. Autentikasi adalah proses mengecek identitas user, sedangkan otorisasi adalah menentukan hak akses user terhadap suatu halaman.

