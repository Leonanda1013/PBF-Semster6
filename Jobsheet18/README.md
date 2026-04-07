# Laporan Praktikum Jobsheet 18

## Identitas

- **Mata Kuliah**: Pemrograman Berbasis Framework
- **Program Studi**: Teknik Informatika
- **Semester**: 6
- **Praktikum**: Jobsheet 18
- **Nama**: Vincentius Leonanda Prabowo
- **NIM**: 2341720149
- **Kelas**: TI-3D


## Langkah 1 - Optimasi Gambar Lokal
![alt text](images/image1.png)

## Langkah 2 - Optimasi Gambar Remote
![alt text](images/image2.png)

## Langkah 3 - Optimasi Font
![alt text](images/image3.png)

## Langkah 4 - Optimasi Script
![alt text](images/image4.png)</br>

<p>Perbedaan utamanya adalah React/JSX merender teks langsung (lebih cepat, SEO-friendly, dan aman), sedangkan Script dengan manipulasi DOM (innerHTML) menunda render (bisa berkedip), kurang baik untuk SEO, dan berisiko keamanan.</p>

## Langkah 5 - Optimasi Avatar
![alt text](images/image5.png)

## After
![alt text](images/image6.png)

## Before
![alt text](images/image7.png)

## Pembahasan 
Performance fokus ke speed → naik ✔ </br>
Best Practices fokus ke standar & keamanan → bisa turun ❌ jika ada teknik yang “tidak ideal”

## Pertanyaan

1. `<img>` biasa tidak optimal karena tidak mendukung otomatisasi seperti lazy loading, resizing, dan format modern seperti yang dimiliki `next/image`.

2. Font CDN mengambil font dari server eksternal (mudah digunakan namun bergantung jaringan), sedangkan `next/font` meng-host font secara lokal sehingga lebih stabil dan optimal.

3. Script dapat memperlambat website karena memblokir rendering dan menambah beban eksekusi pada main thread.

4. Dynamic import digunakan untuk menunda loading komponen atau library yang tidak dibutuhkan saat initial render (lazy loading).

5. Bundle size yang besar memperlambat waktu load dan parsing sehingga menurunkan pengalaman pengguna (UX), terutama pada perangkat atau jaringan lambat.


