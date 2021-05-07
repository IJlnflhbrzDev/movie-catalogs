informasi Berkas2 yg ada =>

Dari berkas webpack konfigurasi di atas, kita bisa melihat bahwa kita memisahkan konfigurasi untuk environment production dan development. Kita juga menggunakan webpack-merge untuk menggabungkan nilai yang sama antar kedua environment.

Untuk loader yang digunakan, pada production dan development kita menggunakan style-loader dan css-loader. Fungsinya untuk membuat berkas .css dapat digunakan secara modular dan ikut terbundel layaknya berkas JavaScript. Pada environment production, kita menggunakan loader lain yakni babel-loader yang berfungsi untuk mengubah sintaks modern (ES6+) menjadi sintaks yang didukung oleh seluruh browser (ES5), jadi kita bisa menuliskan kode JavaScript versi terbaru tanpa khawatir kompatibilitasnya pada browser lama.

Untuk plugins, kita menggunakan dua plugin, yakni html-webpack-plugin dan copy-webpack-plugin. HtmlWebpackPlugin digunakan untuk membuat berkas html (index.html), berdasarkan template yang kita tetapkan. Sedangkan CopyWebpackPlugin digunakan untuk menyalin assets statis pada folder public agar dibawa ke folder dist ketika webpack menjalankan tugasnya. Sehingga kita dapat menggunakan berkas statis tersebut layaknya berada pada root proyek.

Pada webpack.dev.js, kita juga menambahkan nilai devServer.contentBase. Ini bertujuan agar ketika webpack berjalan dalam mode development, konten statis yang digunakan berdasarkan konten yang ada di dalam folder ‘dist’.

Bila Anda bingung untuk menuliskan konfigurasi webpack, ikuti atau baca ulang module webpack yang ada di kelas Belajar Fundamental Front-End Web Development.

Agar proyek dapat dijalankan menggunakan webpack, tambahkan script runner berikut pada package.json.