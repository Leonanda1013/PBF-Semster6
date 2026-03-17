# Laporan Praktikum Jobsheet 15

## Identitas

- **Mata Kuliah**: Pemrograman Berbasis Framework
- **Program Studi**: Teknik Informatika
- **Semester**: 6
- **Praktikum**: Jobsheet 15
- **Nama**: Vincentius Leonanda Prabowo
- **NIM**: 2341720149
- **Kelas**: TI-3D

## Langkah 1 Membuat Regiter View

![alt text](images/image1.png)

## Langkah 2 Membuat API register

![alt text](images/gif1.gif)

## Langkah 3 Install brcypt

![alt text](images/gif2.gif)

### ERROR

![alt text](images/image3.png)

## UJI 1 Register Baru

![alt text](images/uji1.gif)

## UJI 2 Email sudah ada

![alt text](images/uji2.gif)

## Uji 3 Method Get

![alt text](images/uji3.png)

## Tugas

1. Saya sudah melakukannya sama seperti praktikum sebelumnya<br>
   ![alt text](images/gif2.gif)<br>

2. Membuat validasi email dan password<br>
   ![alt text](images/tugas2.png) <br>
   ![alt text](images/tugas2-2.png)

3. Member<br>
   ![alt text](images/tugas3.png)<br>
4. UJI <br>
   ![alt text](images/giftugas.gif)

## Pertanyaan

1. **Mengapa password harus di-hash?**
   Password di-hash untuk menjaga keamanan agar tidak tersimpan dalam bentuk asli (plain text), sehingga jika database bocor, password tetap tidak bisa dibaca.

2. **Apa perbedaan addDoc dan setDoc?**

- `addDoc` → menambahkan data dengan ID otomatis
- `setDoc` → menambahkan/mengganti data dengan ID yang ditentukan sendiri

3. **Mengapa perlu validasi method POST?**
   Untuk memastikan endpoint hanya menerima request yang sesuai (misalnya POST untuk register) dan mencegah akses yang tidak diinginkan.

4. **Apa risiko jika email tidak dicek unik?**
   Bisa terjadi duplikasi akun dengan email yang sama, menyebabkan kebingungan, error login, dan masalah keamanan.

5. **Apa fungsi role pada user?**
   Role digunakan untuk membedakan hak akses user, misalnya admin dan member, sehingga setiap user hanya bisa mengakses fitur tertentu sesuai perannya.
