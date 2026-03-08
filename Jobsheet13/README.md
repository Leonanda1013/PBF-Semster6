# Laporan Praktikum Jobsheet 13

## Identitas

- **Mata Kuliah**: Pemrograman Berbasis Framework
- **Program Studi**: Teknik Informatika
- **Semester**: 6
- **Praktikum**: Jobsheet 13
- **Nama**: Vincentius Leonanda Prabowo
- **NIM**: 2341720149
- **Kelas**: TI-3D

## Langkah 1 Membuat Middleware

![alt text](images/image1.png)

## Langkah 2 Struktur Dasar Middleware

![alt text](images/image2.png)

## Langkah 3 Redirect Sederhana

![alt text](images/image3.png)

## Langkah 4 Batasi Route Tertentu

![alt text](images/gif-1.gif)

### Ket: Halaman Lain tetap normal, hanya halaman about dan product yang redirect

## Langkah 5 Simulasi Sistem Login

![alt text](images/gif-2.gif)

## UJI
### KET: saat flase 3 halaman ini tidak bisa terbuka dan saat true kebalikkannya
![alt text](images/imageUJI.png)
![alt text](images/gif-3.gif)

## Pertanyaan

1. Middleware lebih aman dibanding useEffect karena berjalan di server sebelum halaman ditampilkan ke user.

2. Middleware tidak menimbulkan glitch karena proses pengecekan dilakukan sebelum halaman dirender.

3. Jika semua halaman diproteksi tanpa pengecualian, user bisa terjebak redirect dan tidak bisa membuka halaman apa pun.

4. Middleware tidak diperlukan jika halaman tidak membutuhkan autentikasi atau pengecekan akses.

5. Middleware digunakan untuk memproses request sebelum halaman dibuka, sedangkan API route digunakan untuk membuat endpoint backend yang mengirim atau memproses data.


