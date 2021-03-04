# Server Anime Scheduler

User login
ditampilkan anime2 musim ini

searchbar
content `https://api.jikan.moe/v3/season/2021/winter`

user klik button di cardnya

dipindah ke halaman yang menampilkan deskripsi anime tersebut
beserta form `Berapa episode per hari`

setelah form diisi button submit di klik
panggil server

```
LOGIC di DATE CALULATOR
- req.params.episodeCount
- fetch hari2 yang libur
- Math.ceil(anime episode / episode count)
- lempar hari2 yang bisa donton sebanyak kalkulasi diatas
- TAPI minggu harus termasuk tanggal merah
```

si client menerima tanggal2 nya beserta kenapa hari itu hari libur

User search untuk anime
setelah ketemu klik tombol "Calculate 