import ecomImg from '../assets/project-ecommerce.jpg';
import uiuxImg from '../assets/project-uiux.jpg';
import campusImg from '../assets/project-campus.jpg';
import posNikkyImg from '../assets/project-pos-nikky.jpg';
import mbgRushImg from '../assets/project-mbg-rush.jpg';
import anatomiArImg from '../assets/project-anatomi-ar.jpg';
import jariJelajahImg from '../assets/project-jari-jelajah.jpg';
import sewUImg from '../assets/project-sew-u.png';

export const portfolioData = {
  personal: {
    name: "Iqbal Maulana Fajar",
    role: "Frontend Engineer & Interactive Web Developer",
    tagline: "Merancang antarmuka web modern, sistem POS, antarmuka UI/UX di Figma, serta game interaktif berbasis Vue 3 & Unity.",
    bio: "Mahasiswa tingkat akhir S1 Informatika Universitas Amikom Yogyakarta yang berfokus pada Frontend Engineering (Vue.js, React, Next.js, TypeScript), perancangan UI/UX di Figma, integrasi REST API (Laravel & Node.js), dan pengembangan aplikasi interaktif.",
    location: "Yogyakarta, DIY",
    phone: "0851-5851-1646",
    email: "iqbalmaulanafajar36@gmail.com",
    github: "https://github.com/iqblmlnf",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    availability: "Tersedia untuk Magang (Internship), Freelance & Kolaborasi",
    avatar: "https://avatars.githubusercontent.com/u/202230171?v=4",
    cvUrl: "/CV_Iqbal_Maulana_Fajar.pdf"
  },

  about: {
    intro: "Saya seorang pengembang perangkat lunak & desainer antarmuka (UI/UX) serba bisa yang senang merancang pengalaman pengguna intuitif, antarmuka web reaktif, serta aplikasi interaktif berbasis Unity Engine & C#.",
    philosophy: [
      {
        title: "UI/UX Design & Prototyping",
        description: "Merancang wireframe, mockup visual bernilai estetika tinggi, sistem desain modular, dan alur pengalaman pengguna (user journey) menggunakan Figma."
      },
      {
        title: "Frontend & Interface Engineering",
        description: "Membangun antarmuka interaktif yang cepat, responsif, dan mudah diakses menggunakan Vue.js, React.js, JavaScript (ES6+), dan modern CSS."
      },
      {
        title: "Backend & System Architecture",
        description: "Merancang layanan RESTful API yang efisien, integrasi basis data SQL, dan manajemen alur logika sistem yang aman."
      },
      {
        title: "Game & Interactive Dev (Unity & C#)",
        description: "Pengalaman merancang mekanika game, simulasi 2D/3D interaktif, serta skrip logika pemrograman C# menggunakan Unity Engine."
      }
    ]
  },

  skills: {
    uiux: [
      "Figma & Penpot Prototyping",
      "User Interface (UI) Design",
      "User Experience (UX) Research",
      "Wireframing & Layout Architecture",
      "Design System & Component Library",
      "Responsive Layout & Usability Testing"
    ],
    frontend: [
      "Vue.js (Composition API)",
      "React.js / Next.js",
      "JavaScript (ES6+ & Async)",
      "TypeScript Basics",
      "HTML5 & CSS3 / Tailwind",
      "Vite & Build Tooling"
    ],
    backend: [
      "Node.js & Express.js",
      "RESTful API Architecture",
      "Python & Web Backend Basics",
      "SQL & Database (MySQL, PostgreSQL)",
      "JSON Web Token (JWT) Auth",
      "Postman API Testing"
    ],
    game: [
      "Unity Engine (2D / 3D)",
      "C# Scripting & Logic",
      "Game Physics & Colliders",
      "UI System & Event Trigger",
      "Asset Management & Prefabs",
      "Interactive Game Mechanics"
    ],
    tools: [
      "Git & GitHub Flow",
      "VS Code Environment",
      "Vercel / Netlify Cloud",
      "Unity Hub & Editor",
      "NPM & Package Management",
      "Cross-Browser Compatibility"
    ]
  },

  projects: [
    {
      id: "pos-nikky-frozen",
      title: "POS Nikky Frozen — Sistem Kasir & Inventaris Multi-Cabang",
      category: "webdev",
      categoryLabel: "Web Application & POS System",
      year: "2025",
      image: posNikkyImg,
      summary: "Sistem web Point of Sale (POS) terpadu dan manajemen inventaris multi-cabang untuk bisnis frozen food. Dilengkapi sistem autentikasi multi-role (Owner, Kasir, Admin Gudang, Admin Keuangan), monitoring kadaluarsa produk otomatis, metrik revenue real-time, dan auto-sinkronisasi.",
      problem: "Pengelolaan inventaris makanan beku rentan merugi akibat tanggal kedaluwarsa yang terlewat, stok menipis tanpa notifikasi, serta rekapitulasi data penjualan multi-cabang yang lambat.",
      solution: "Merancang dashboard analitik terpadu dengan sistem peringatan dini kadaluarsa (7 hari), pelacakan stok menipis otomatis (<10 unit), visualisasi tren revenue mingguan dan kategori produk, serta antarmuka kasir yang responsif.",
      stack: ["Web Application", "JavaScript ES6+", "HTML5 & Tailwind CSS", "Chart / Analytics", "REST API", "State Management"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/POS-Nikky-Frozen"
    },
    {
      id: "demontix",
      title: "DemonTix — Platform Pemesanan & Penjualan Tiket Konser Musik",
      category: "webdev",
      categoryLabel: "Web Application & Ticketing Platform",
      year: "2025",
      image: ecomImg,
      summary: "Platform web pemesanan dan penjualan tiket konser musik interaktif berbasis Vue.js. Menampilkan katalog festival musik indie & konser ternama, eksplorasi event (Jelajah), sistem autentikasi akun pengguna (Sign Up & Sign In), serta alur pemesanan tiket yang responsif.",
      problem: "Penggemar konser musik membutuhkan platform tiket yang mudah diakses dengan info jadwal venue yang transparan, navigasi pencarian event cepat, serta alur pendaftaran akun tanpa hambatan.",
      solution: "Mengembangkan arsitektur aplikasi berbasis komponen reaktif dengan showcase banner carousel, katalog rekomendasi event dengan harga & lokasi terperinci, sistem formulir registrasi yang elegan, serta alur checkout tiket efisien.",
      stack: ["Vue.js", "JavaScript ES6+", "HTML5 & CSS3", "State Management", "REST API", "Responsive Web Design"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/Website-DemonTix"
    },
    {
      id: "mbg-rush",
      title: "MBG Rush — Extreme Delivery: 2D Physics Truck Runner & Stunt Game",
      category: "gamedev",
      categoryLabel: "Unity Engine & C# Game",
      year: "2025",
      image: mbgRushImg,
      summary: "Game edukatif 2D physics vehicle runner di mana pemain mengemudikan truk 'Satuan Pelayanan Pemenuhan Gizi' melewati berbagai rintangan ekstrem, melakukan aksi akrobatik udara (backflip), mengumpulkan koin, dan mengantarkan makanan bergizi tepat waktu ke Sekolah Dasar.",
      problem: "Memerlukan simulasi fisika suspensi truk 2D yang realistis di atas kontur bukit bergelombang, kalkulasi akrobatik rotasi di udara (stunt bonus), serta deteksi tabrakan dinamis dengan rintangan jalan.",
      solution: "Mengimplementasikan WheelJoint2D dan Rigidbody2D di Unity, arsitektur skrip C# untuk scoring multiplier stunt akrobatik, sistem checkpoint rute (Desa hingga Sekolah Dasar), serta tata letak kontrol responsif.",
      stack: ["Unity Engine", "C# Scripting", "2D Physics & Joints", "Game Mechanics", "Unity UI"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/MBG-Rush"
    },
    {
      id: "anatomi-ar-book",
      title: "Anatomi AR Book — Aplikasi Edukasi Augmented Reality",
      category: "gamedev",
      categoryLabel: "Unity Engine & AR Dev",
      year: "2025",
      image: anatomiArImg,
      summary: "Aplikasi Augmented Reality (AR) interaktif untuk menjelajahi anatomi tubuh manusia melalui pemindaian marker buku. Dilengkapi fitur Mulai AR (proyeksi 3D organ seperti jantung & otak), Peta Organ, Kuis interaktif, Belajar, dan sistem Pencapaian.",
      problem: "Visualisasi anatomi 2D pada buku cetak konvensional menyulitkan siswa memahami bentuk spasial dan sistem kerja organ tubuh manusia secara 3 dimensi.",
      solution: "Mengembangkan aplikasi mobile AR interaktif berbasis Unity C# & AR Foundation untuk memproyeksikan hologram 3D organ tubuh manusia di atas buku fisik secara real-time.",
      stack: ["Unity Engine", "C# Scripting", "Augmented Reality (AR)", "AR Foundation", "3D Modeling", "Mobile App"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/Anatomi-AR-Book"
    },
    {
      id: "jari-jelajah-angka",
      title: "Jari Jelajah Angka — Game Edukasi Berhitung Interaktif",
      category: "webdev",
      categoryLabel: "Web Application",
      year: "2025",
      image: jariJelajahImg,
      summary: "Aplikasi web game edukasi matematika dan berhitung interaktif yang dirancang untuk melatih ketangkasan berhitung anak melalui animasi antarmuka dan tantangan interaktif.",
      problem: "Metode pembelajaran matematika konvensional seringkali kurang menarik minat anak-anak untuk berlatih berhitung secara rutin.",
      solution: "Mengembangkan aplikasi web interaktif berbasis komponen web responsif, efek audio-visual, serta sistem skor poin pembelajaran.",
      stack: ["Web Application", "Interactive Game", "JavaScript ES6+", "HTML5", "CSS3"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/Jari-Jelajah-Angka"
    },
    {
      id: "gearnine-uiux",
      title: "GearNine — Billiard Solution & E-Commerce Mobile App UI/UX",
      category: "uiux",
      categoryLabel: "Mobile UI/UX & Design System",
      year: "2025",
      image: uiuxImg,
      summary: "Perancangan sistem antarmuka (UI) dan alur pengalaman pengguna (UX) untuk aplikasi mobile e-commerce perlengkapan biliar 'GearNine'. Mencakup alur Splash & Brand Identity, Autentikasi Pengguna (Login & Social Auth), Katalog Produk & Eksplorasi Kategori (Stick/Cue, Bola, Sarung Tangan, Chalk, Tas Stick), serta Halaman Detail Produk & Checkout dengan identitas visual aksen kuning-emas yang modern.",
      problem: "Pemain dan komunitas biliar kesulitan menemukan platform belanja khusus perlengkapan biliar yang menyajikan spesifikasi teknis peralatan secara rinci (material carbon shaft, joint uniloc, bobot oz) dengan navigasi transaksi mobile yang praktis.",
      solution: "Merancang antarmuka mobile di Figma dengan sistem desain modular, palet warna gold/yellow energik, pengelompokan kategori produk biliar terstruktur, transparansi spesifikasi produk, dan alur checkout instan.",
      stack: ["Figma", "Mobile UI/UX Design", "Design System", "Wireframing & Prototyping", "E-Commerce Experience", "User Research"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf"
    },
    {
      id: "sew-u-project",
      title: "Sew U — Digital Platform for Tailors & SaaS Dashboard",
      category: "webdev",
      categoryLabel: "Web Application & SaaS",
      year: "2026",
      image: sewUImg,
      summary: "Platform SaaS landing page dan business dashboard untuk penjahit (orders, customers, portfolio, reports) serta demo interaktif Smart Outfit Matching berbasis HTML, CSS, dan JavaScript.",
      problem: "Penjahit konvensional kesulitan mengelola pesanan pelanggan, menampilkan portofolio hasil jahitan, serta memperluas jangkauan bisnis secara digital.",
      solution: "Membangun platform SaaS dengan landing page modern, business dashboard interaktif, serta demo Smart Outfit Matching yang dideploy ke Vercel.",
      stack: ["SaaS Platform", "HTML5", "CSS3", "JavaScript", "Vercel"],
      demoUrl: "",
      githubUrl: "https://github.com/iqblmlnf/Sew-U-Project"
    }
  ],

  experience: [
    {
      period: "2024 — Sekarang",
      role: "Full-Stack Web, UI/UX & Unity Game Developer",
      organization: "GitHub (@iqblmlnf) / Independent Software Engineer",
      description: "Aktif mengembangkan repositori open-source dan aplikasi mandiri. Merancang sistem POS Nikky Frozen, platform pemesanan tiket DemonTix (Vue.js & REST API), rancangan UI/UX & Design System di Figma, serta game 3D & AR (MBG Rush & Anatomi AR Book) berbasis Unity Engine (C#)."
    },
    {
      period: "2024 — 2025",
      role: "Frontend Engineer & UI/UX Designer",
      organization: "Proyek Kolaborasi & Platform Digital",
      description: "Merancang antarmuka web reaktif, komponen UI modular berbasis Vue 3 & Tailwind CSS, wireframing & alur pengguna (user flow) di Figma, serta integrasi layanan RESTful API."
    },
    {
      period: "2023 — 2024",
      role: "Unity Interactive & AR Developer",
      organization: "Game & Interactive Media Labs",
      description: "Merancang mekanika permainan 2D/3D, kalkulasi fisika Rigidbody, skrip pemrograman C#, integrasi SDK Augmented Reality (AR Foundation), serta pengembangan sistem UI interaktif."
    },
    {
      period: "2023 — 2024",
      role: "Web Application & Open-Source Contributor",
      organization: "GitHub Community & Software Projects",
      description: "Mengembangkan berbagai proyek aplikasi web interaktif, utilitas berbasis JavaScript ES6+, arsitektur basis data SQL, serta penerapan alur kerja manajemen kode versi Git/GitHub."
    }
  ]
};
