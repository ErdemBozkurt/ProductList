# Örnek Ürün Listeleme Projesi
Bu proje, pazar yerleri gibi ürünleri karşılaştırma, kullanıcıların en iyi fiyatları ve özellikleri görmelerini sağlama amacı taşıyan bir web uygulamasıdır. Uygulama, React ve Remix ile geliştirilmiştir ve TypeScript kullanılarak yazılmıştır.

# 📖 İçindekiler
Özellikler
Gereksinimler
Kurulum
Kullanım
Proje Yapısı
Katkıda Bulunanlar
Lisans

# ✨ Özellikler
Yatay ve Dikey Ürün Listesi: Ürünleri yatay slider ile ve dikey olarak sayfalama ile listeleme.
Ürün Detayları: Kullanıcılar ürünlerin detaylarını görebilir ve farklı depolama seçenekleri arasında seçim yapabilir.
Yıldız Derecelendirme: Ürünlerin değerlendirme puanlarını yıldızlar şeklinde gösterme.
Dinamik Veri Çekme: Ürün verilerini JSON API üzerinden dinamik olarak çekme.
Responsive Tasarım: Mobil ve masaüstü uyumlu kullanıcı arayüzü.

# 🛠️ Gereksinimler
Node.js (v14 veya üzeri)
npm veya yarn
Git

# ⚙️ Kurulum
Aşağıdaki adımları takip ederek projeyi kendi bilgisayarınızda çalıştırabilirsiniz:

1- Depoyu klonlayın:
git clone https://github.com/kullanici-adiniz/proje-adi.git
cd proje-adi

2- Gerekli paketleri yükleyin:
npm install
veya
yarn install

3- Uygulamayı başlatın:
npm run dev
veya
yarn dev

4- Tarayıcıda açın:
Projeyi çalıştırdıktan sonra, tarayıcınızda http://localhost:3000 adresine gidin.

# 🚀 Kullanım
Ana Sayfa: Ürünleri yatay slider ve dikey liste olarak görüntüleyin.
Ürün Detay Sayfası: Bir ürüne tıklayarak detaylarını ve depolama seçeneklerini görüntüleyin.
Depolama Seçimi: Kullanıcılar depolama seçenekleri arasında seçim yapabilir ve fiyatları karşılaştırabilir.

# 📂 Proje Yapısı
project-root/
├── app/
│   ├── components/
│   │   ├── HorizontalProductList.tsx
│   │   ├── ProductList.tsx
│   │   └── StarRating.tsx
│   ├── routes/
│   │   ├── _index.tsx
│   │   └── product.$Id.tsx
│   ├── services/
│   │   └── productService.tsx
│   └── styles/
│       ├── main.css
│       ├── ProductDetail.css
│       ├── ProductList.css
│       └── StarRating.css
├── public/
│   └── favicon.ico
├── tailwind.css
├── package.json
└── README.md

# 🤝 Katkıda Bulunanlar
Erdem Bozkurt