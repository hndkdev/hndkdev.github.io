// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===================================
// NAVBAR ACTIVE STATE
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ===================================
// MOBILE NAVBAR TOGGLE
// ===================================
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
    navbarToggle.setAttribute('aria-expanded', !isExpanded);
    document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  const navbarLinks = navbarMenu.querySelectorAll('.navbar__link');
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      navbarToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ===================================
// DARK MODE TOGGLE
// ===================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) htmlElement.classList.add('dark');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
  });
}

// ===================================
// PROJECT DATA & LOADING
// ===================================
const projectData = {
  "smart-task-manager": {
    category: "Web App / AI / NLP",
    title: "Smart Task Manager",
    description: "Aplikasi web untuk membantu pengelolaan tugas akademik mahasiswa dengan mengklasifikasikan kategori dan tingkat prioritas tugas berdasarkan deskripsi teks. Sistem menggunakan NLP, TF-IDF, dan SVM yang diintegrasikan melalui REST API berbasis FastAPI.",
    image: "assets/img/Screenshot Halaman Logo.webp",
    tech: ["Python", "FastAPI", "Scikit-learn", "TF-IDF", "SVM", "Sastrawi", "SQLAlchemy", "SQLite", "HTML", "CSS", "JavaScript"],
    features: ["Klasifikasi kategori tugas akademik.", "Klasifikasi tingkat prioritas tugas.", "Preprocessing teks bahasa Indonesia.", "REST API berbasis FastAPI.", "Penyimpanan data menggunakan SQLite."],
    role: "Mengembangkan aplikasi web, termasuk implementasi preprocessing teks, model klasifikasi TF-IDF dan SVM, REST API berbasis FastAPI, serta integrasi backend dengan antarmuka aplikasi.",
    resultTitle: "Result",
    result: "Pada pengujian menggunakan dataset gabungan, model menghasilkan akurasi 97,10% untuk klasifikasi kategori dan 89,13% untuk klasifikasi prioritas. Pengujian black-box juga menunjukkan 13 dari 13 skenario berhasil.",
    demo: "",
    github: "",
    // TAMBAHKAN GALLERY DI SINI
    gallery: [
      { src: "assets/img/Screenshot Halaman Login.webp", alt: "Halaman Login Smart Task Manager" },
      { src: "assets/img/Screenshot Halaman Dashboard.webp", alt: "Halaman Dashboard Smart Task Manager" },
      { src: "assets/img/Tampilan Dokumentasi API pada Halaman Swagger UI.webp", alt: "Dokumentasi REST API FastAPI", isFull: true }
    ]
  },
  "kuis-budi": {
    category: "Educational Game",
    title: "Petualangan Kuis Budi",
    description: "Game edukasi berbasis petualangan yang menggabungkan eksplorasi dan kuis pembelajaran untuk siswa sekolah dasar. Game dikembangkan menggunakan GDevelop 5 dan diekspor dalam format HTML5 sehingga dapat dimainkan melalui web.",
    image: "assets/img/proj-kuis-budi.png",
    tech: ["GDevelop 5", "HTML5"],
    features: ["9 level petualangan.", "Pengumpulan 5 kunci dan penyelesaian 5 pertanyaan kuis.", "Materi Matematika, Sains/IPA, dan Bahasa Indonesia.", "Mode Latihan dengan tambahan materi IPS dan Seni Budaya.", "Dapat dimainkan melalui web dalam format HTML5."],
    role: "Mengembangkan game menggunakan GDevelop 5, termasuk penyusunan level petualangan dan aktivitas kuis pembelajaran.",
    resultTitle: "Result",
    result: "Game diuji coba pada 10 siswa kelas VI di SDN Cimone 6 Kota Tangerang pada 15 Juli 2025 dengan rata-rata penilaian 3,41 dari skala 5.",
    demo: "https://gd.games/hndkdev/petualangan-kuis-budi",
    github: "",
    // TAMBAHKAN GALLERY DI SINI
    gallery: [
      { src: "assets/img/Tampilan Utama Petualangan Kuis Budi.webp", alt: "Tampilan Utama Petualangan Kuis Budi", isFull: true },
      { src: "assets/img/kuis-budi-gameplay.webp", alt: "Gameplay Petulangan Budi" },
      { src: "assets/img/Tampilan Kuis Budi.webp", alt: "Gameplay Kuis Kuis Budi" }
    ]
  },
  "sipaduka": {
    category: "Web App / API Integration",
    title: "SIPADUKA",
    description: "Aplikasi web untuk mendukung pendataan penduduk dan keluarga di Kelurahan Panunggangan Barat. Sistem menyediakan fitur pengelolaan, pencarian, pembaruan, dan pelaporan data dengan memanfaatkan Laravel, Google Apps Script, Google Sheets, dan Fonte API.",
    image: "assets/img/proj-sipaduka.jpg",
    tech: ["Laravel", "Google Apps Script", "Google Sheets", "Fonte API"],
    features: ["Dashboard pengelolaan data.", "Input dan pengelolaan data penduduk.", "Pencarian data.", "Pembaruan data.", "Pelaporan data."],
    role: "",
    resultTitle: "Project Context",
    result: "SIPADUKA dikembangkan sebagai sistem berbasis web untuk mendukung proses pendataan penduduk dan keluarga di Kelurahan Panunggangan Barat.",
    demo: "",
    github: "",
    gallery: [
        { src: "assets/img/dashboard-sipaduka.webp", alt: "Halaman Dashboard SIPADUKA",isFull: true },
        { src: "assets/img/tampilan-data-penduduk.webp", alt: "Halaman data penduduk"},
        { src: "assets/img/tampilan-input-data-penduduk.webp", alt: "Halaman input data penduduk"},
    ]
  },
  "yaumiapp": {
    category: "Web Application",
    title: "YaumiApp",
    description: "Aplikasi web pendamping ibadah harian yang membantu pengguna mencatat dan memantau amal yaumiyah melalui checklist, riwayat ibadah, manajemen profil, serta jadwal sholat",
    image: "assets/img/proj-yaumiapp.webp",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Catatan mutaba'ah ibadah harian.", "Checklist aktivitas ibadah.", "Riwayat lengkap aktivitas ibadah.", "Manajemen profil pengguna.", "Jadwal sholat.", "Pemantauan perkembangan aktivitas ibadah."],
    role: "",
    resultTitle: "Status",
    result: "Aplikasi masih dalam tahap pengembangan. Beberapa fitur belum selesai dan masih terdapat bug yang perlu diperbaiki.",
    demo: "https://aplikasi-mutabaah.page.gd/",
    github: "",
    gallery: [
        { src: "assets/img/Halaman-Login-YaumiApp.webp", alt: "Halaman Login YaumiApp", isFull: true},
        { src: "assets/img/dashboard-yaumiapp.webp", alt: "Halaman Dashboard YaumiApp"},
        { src: "assets/img/tampilan-jadwal-sholat.webp", alt: "Halaman Jadwal Imsakkiyah"},
    ]
  }
};

function loadProjectDetail() {
  const projectTitle = document.getElementById("project-title");
  if (!projectTitle) return;
  
  const params = new URLSearchParams(window.location.search);
  const project = projectData[params.get("project")];

  if (!project) {
    document.title = "Project Not Found";
    projectTitle.textContent = "Project Not Found";
    document.getElementById("project-category").textContent = "";
    document.getElementById("project-description").textContent = "Project yang ingin kamu lihat tidak ditemukan.";
    const projectImage = document.getElementById("project-image");
    if(projectImage) projectImage.style.display = "none";
    return;
  }

  document.title = `${project.title} | Handika`;
  document.getElementById("project-category").textContent = project.category;
  projectTitle.textContent = project.title;
  document.getElementById("project-description").textContent = project.description;
  
  const projectImage = document.getElementById("project-image");
  if(projectImage) { 
    projectImage.src = project.image; 
    projectImage.alt = project.title; 
    projectImage.style.display = "block";
  }
  

  const techContainer = document.getElementById("project-tech");
  if (techContainer) {
    techContainer.innerHTML = "";
    if (project.tech && project.tech.length > 0) {
      project.tech.forEach(tech => {
        const span = document.createElement("span"); 
        span.textContent = tech; 
        techContainer.appendChild(span);
      });
    } else {
      document.getElementById("tech-section").style.display = "none";
    }
  }

  const featuresList = document.getElementById("project-features");
  if (featuresList) {
    featuresList.innerHTML = "";
    if (project.features && project.features.length > 0) {
      project.features.forEach(f => { 
        const li = document.createElement("li"); 
        li.textContent = f; 
        featuresList.appendChild(li); 
      });
    } else {
      document.getElementById("features-section").style.display = "none";
    }
  }

  if (project.role) {
    document.getElementById("project-role").textContent = project.role;
  } else {
    document.getElementById("role-section").style.display = "none";
  }

  document.getElementById("result-title").textContent = project.resultTitle;
  document.getElementById("project-result").textContent = project.result;
  /* =========================
GALLERY / SCREENSHOTS
========================= */
const gallerySection = document.getElementById("gallery-section");
const galleryContainer = document.getElementById("project-gallery");
const galleryDesc = document.getElementById("gallery-description");

if (gallerySection && galleryContainer) {
  galleryContainer.innerHTML = ""; // Bersihkan isi sebelumnya
  
  if (project.gallery && project.gallery.length > 0) {
    gallerySection.style.display = "block";
    galleryDesc.textContent = `Berikut adalah beberapa tangkapan layar dari antarmuka dan fitur ${project.title}.`;
    
    project.gallery.forEach(imgData => {
      const itemDiv = document.createElement("div");
      itemDiv.className = `project-page__gallery-item ${imgData.isFull ? "project-page__gallery-item--full" : ""}`;
      
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.className = "project-page__image";
      img.loading = "lazy";
      
      itemDiv.appendChild(img);
      galleryContainer.appendChild(itemDiv);
    });
  } else {
    gallerySection.style.display = "none";
  }
}
  
  // Logika Links yang lebih aman (menyembunyikan tombol jika link kosong)
  const linksSection = document.getElementById("links-section");
  const demoBtn = document.getElementById("project-demo");
  const githubBtn = document.getElementById("project-github");
  let hasLink = false;

  if (demoBtn) {
    if (project.demo) {
      demoBtn.href = project.demo;
      demoBtn.style.display = "inline-flex";
      hasLink = true;
    } else {
      demoBtn.style.display = "none";
    }
  }
  
  if (githubBtn) {
    if (project.github) {
      githubBtn.href = project.github;
      githubBtn.style.display = "inline-flex";
      hasLink = true;
    } else {
      githubBtn.style.display = "none";
    }
  }

  if (linksSection && !hasLink) {
    linksSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", loadProjectDetail);