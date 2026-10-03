/* =====================================================
   1. DATA  (bagian ini saja yang perlu kamu edit)
   ===================================================== */
const DATA = {
  name: "Jeanne Geraldine",
  role: "Associate Member of Developer · Software Engineer · Computer Science Student",
  photo: "images/profile.png",  // nama file foto; kalau tidak ketemu, tampil inisial
  tagline: "Computer Science student at BINUS University with a strong passion for continuous learning in full-stack development, UI/UX, and new technologies.",
  email: "jeannegeraldine.02@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jeanne-geraldine" },
    { label: "GitHub",   url: "https://github.com/Jeannegldn" }
  ],

  about: {
    paragraphs: [
      "I am a Computer Science undergraduate student at BINUS University Kemanggisan with a strong focus on Frontend Development and UI/UX design. Having a well-rounded foundation in software development, I bridge the gap between intuitive visual design and solid technical architecture to build seamless, user-centered web applications.",
      "As an Associate Member at the BINUS IT Division, I actively contribute across the entire development lifecycle from crafting frontend interfaces and developing backend services to conducting end-to-end testing. Combined with my experience in mentoring and leadership, this full-stack exposure equips me with strong problem solving skills and a thorough understanding of building high-quality web solutions."
    ],
    skills: ["JavaScript/Vue.js", "Laravel/PHP", "Java", "React", "SQL", "Git", "HTML", "CSS"],
    facts: [
      { label: "Campus", value: "BINUS University" },
      { label: "Focus", value: "Software Engineering, Web Development" },
      { label: "Location", value: "Jakarta, Indonesia" },
      { label: "Languages", value: "Indonesia, English" }
    ]
  },

  education: [
    { school: "BINUS University", major: "Computer Science", date: "2024 - Sekarang", detail: "Undergraduate Computer Science Student. Currently pursuing a Bachelor’s degree in Computer Science at BINUS University (Class of 2028). Built a strong foundation in core computer science principles, algorithm analysis, and database architecture.",
      points: ["Specializing in Software Engineering with a focus on the full software development lifecycle. Experienced in designing scalable system architectures, applying design patterns, writing maintainable code, and developing modern web and mobile applications.."] },
    { school: "Senior High School Fransiskus Bandar Lampung ", major: "IPA", date: "2021 - 2024", detail: "High School Diploma in Natural Sciences (MIPA). Graduated with a focus on Mathematics and Natural Sciences, building a strong analytical foundation in logic, mathematics, and problem-solving prior to pursuing Computer Science.", points: [] }
  ],

  experience: [
    { title: "Associate Member Developer, Web Developer", place: "IT Division, BINUS University", date: " Mar 2026 - Present", tags: ["Programming", "Teamwork"],
      desc: "Assisted senior developers in developing and maintaining high-impact full-stack web platforms using Laravel and Vue.js. Contributed directly to Siaga, a nationwide portal under Kemdiktisaintek for managing study program proposals across Indonesia by working closely with senior developers and System Analysts to translate technical requirements into functional web modules.", 
      points: ["Full-Stack Development Support: Assisted senior developers in building dynamic frontend components with Vue.js and implementing backend logic in Laravel to streamline study program proposal workflows.", 
        "Database & Query Assistance: Worked with SQL under senior guidance to write, test, and optimize relational database queries for handling institutional submission data.", 
        "Bug Fixing & System Maintenance: Helped diagnose software bugs, fix reported errors, and perform routine maintenance to ensure system stability during peak submission periods.",
        "Supported 100+ Institutional Submissions: Assisted senior team members in maintaining the Siaga portal, enabling smooth proposal submissions for higher education institutions nationwide."
    ] },
    { title: "Student Mentor", place: "Student Advisory & Center, BINUS University", date: " Sept 2026 - Present", tags: ["Mentoring", "Teaching"],
      desc: "Served as a peer mentor at the Student Advisory & Center (SASC), acting as a collaborative learning partner for fellow students. Focused on creating an engaging and supportive environment to break down complex Computer Science concepts, foster mutual academic growth, and help peers improve their study strategies and academic performance.", 
      points: [
        "Collaborative Learning Partner: Acted as a supportive study companion, facilitating discussions, answering academic queries, and encouraging active problem-solving rather than one-way lecturing.", 
        "Study Strategy & Academic Support: Guided mentees in improving their time management, exam preparation, and practical coding skills to build confidence in their coursework."
    ] },
    { title: "UI/UX Design Participant / Competitor", 
        place: "TECHFEST 2025", 
        date: "2025", 
        tags: ["UI/UX Design", "Competition"],
        images: ["images/techfest.png"],
      desc: "Participated in the TECHFEST 2025 UI/UX Design competition hosted by Himti BINUS University, focusing on solving real-world user problems through end-to-end user-centered design principles. Worked closely in a collaborative team to transform user research insights into intuitive, functional, and visually appealing digital product prototypes while aligning with the product development lifecycle.", 
      points: [
        "User Research & Problem Identification: Conducted user research through surveys and empathy mapping to identify pain points, underlying user needs, and design opportunities.", 
        "UI/UX Prototype Development: Designed high-fidelity interactive wireframes and visual UI components, ensuring seamless navigation and accessible user flows.",
        "Enhanced User Experience: Developed validated design solutions targeting user core needs, achieving high usability ratings during internal team testing."
    ] },
    { title: "Social & Teaching Volunteer (SIWALI Program)", 
        place: "BINUS University", 
        date: "Des 2024 - Jun 2025", 
        tags: ["Volunteer"],
        images: ["images/siwali1.jpeg", "images/siwali2.jpeg"],
      desc: "Collaborated with BINUS University lecturers in community outreach initiatives aimed at empowering elementary through high school students. Assisted in organizing interactive learning sessions and educational activities, strengthening interpersonal communication and teamwork skills while fostering academic engagement among young learners.", 
      points: [
        "Supported lecturers in delivering structured learning activities to students across various grade levels, creating an inclusive and supportive educational environment."
    ] },
    { title: "English Teaching Volunteer (BSQ – TFI)", place: "Binus Square Hall of Residence & Teach For Indonesia", 
      date: "Feb 2025 - Mar 2025", tags: ["Freelance"],
      desc: "Served as a volunteer instructor under Teach For Indonesia (TFI) at Binus Square, delivering foundational English language lessons to program participants. Focused on enhancing learners' basic conversational skills, vocabulary, and confidence through structured and engaging session plans.", 
      images: ["images/bsqxtfi.jpeg"],
      points: [
        "Developed and facilitated basic English practice activities while building key soft skills in cross-cultural communication, group leadership, and public responsibility.", 
        ] }
  ],

  /* PROJECT: "summary" tampil di kartu, "desc" dan "points" tampil di pop-up.
     "cover" = nama file gambar (boleh kosong). "links" boleh kosong. */
  projects: [
    { title: "SIAGA", 
        role: "Associate Programmer", 
        period: "Mar 2026 - Present", 
        tags: ["JavaScript", "Vue.js", "Laravel", "PHP", "MySQL"], 
        cover: "images/siaga.png",
      summary: "National Higher Education Registration Platform for Kemdiktisaintek study program proposals.",
      desc: "Developed full-stack web enhancements for SIAGA, a nationwide platform under Kemdiktisaintek for managing study program proposals. Worked as an Associate Developer in a cross-functional team, translating System Analyst requirements into production-ready features using Laravel and Vue.js.",
      points: ["Implemented new study program registration options and dynamic document requirements based on stakeholder agreements.", 
        "Resolved UI rendering bugs and fixed database query issues to eliminate duplicate entries in user-facing dropdowns.", 
        "Gained end-to-end full-stack proficiency in Laravel and Vue.js while maintaining rigorous feature testing and user-acceptance standards."
    ],
      links: [{ label: "Live Platform", url: "https://siaga.kemdiktisaintek.go.id/" }] },
    
    { title: "PiyoPlate", 
        role: "Frontend Developer", 
        period: "2026", tags: ["Flutter", "NestJS", "Prisma", "PostgreSQL", "AI"], 
        cover: "images/piyoTitle.png",
        images: ["images/piyoTitle.png", "images/piyo2.png", "images/piyo3.png", "images/piyo4.png"],
      summary: "A mobile calorie tracking and recipe sharing app addressing SDG 3 & 12 through accessible nutrition tools.", 
      desc: "Built as a university coursework project to solve daily diet management challenges. PiyoPlate simplifies calorie logging through manual entry, curated recipes, and AI photo estimation, with real-time intake dashboards to help users achieve their dietary goals.", 
      points: ["Developed cross-platform mobile interfaces in Flutter for recipe browsing, meal logging, and real-time calorie tracking.", 
        "Integrated dynamic API contracts with NestJS, Prisma, and PostgreSQL backend to display live nutritional breakdowns.",
        "Mastered Flutter framework fundamentals from scratch while delivering intuitive UI screens aligned with health-and-wellness themes."
    ], 
      links: [{
        label: "GitHub Repository", url: "https://github.com/sashadiva/piyoplate.git"
      }] 
    },
    
    { title: "Tomo", 
        role: "Frontend Developer", 
        period: "2026", 
        tags: ["React.js", "Socket.io", "Node.js", "Supabase", "OpenAI API"], 
        cover: "images/tomoDashboard.png",
        images: ["images/tomoDashboard.png", "images/tomoLogin.png", "images/tomoEat.png", "images/tomoTimer.png"],
      summary: "AI & gamification-based productivity platform featuring interactive virtual pet rewards and real-time study rooms.", 
      desc: "Built for a team competition to tackle study procrastination and lack of social support. Tomo combines a Pomodoro focus timer, multi-user chat rooms with AI assistance, task management, and a virtual pet reward loop to make building study habits engaging and consistent.", 
      points: ["Engineered interactive frontend components and real-time Socket.io communication for multi-user study rooms.", 
        "Designed and implemented lightweight vector-based pet animations (feeding, bathing, sleeping) for smooth, instant visual feedback.",
        "Mastered gamification principles by integrating reward loops, sound design, and UX flows with core productivity tools.",
    ], 
      links: [
        { label: "Live Web App", url: "https://tomowebdev.vercel.app/" }
      ] },

    { title: "NeuroGrip", 
        role: "Web App Development, Backend & Database", 
        period: "2026 (ongoing)", 
        tags: ["ESP32-S3", "IoT", "Web App", "Backend", "Database"], 
        cover: "images/neuroGrip.png",
      summary: "AI & IoT smart glove for stroke rehabilitation, currently a Semifinalist at Samsung Solve for Tomorrow 2026.", 
      desc: "Developed as a group project to address upper-limb dysfunction in stroke survivors. NeuroGrip combines an ESP32-S3 glove with TinyML grip intent detection, motor actuation, and pressure sensors with a dedicated web app for remote clinical monitoring.", 
      points: ["Engineered the web app backend logic and database architecture to handle real-time IoT sensory data from the glove.", 
        "Built remote patient monitoring dashboards allowing caregivers and clinicians to track rehabilitation progress effectively.",
        "Achieved Samsung Solve for Tomorrow 2026 Semifinalist status through a research-driven, interdisciplinary healthcare solution."
    ], 
      links: [] 
    },
    
    
  ],

  /* CERTIFICATES: konferensi dan sertifikasi digabung ("type" bebas, mis. Speaker, Second Author, Sertifikasi) */
  certificates: [
    { type: "Speaker", title: "Integrating Antecedent Moisture Memory into Random Forest for Flood-Oriented Rainfall Prediction in Jakarta", 
        issuer: "ICIMTech (International Conference on Information Management and Technology)", date: "September 2026, Indonesia", cover: "images/speaker.png",
      desc: "Presented research on leveraging machine learning with antecedent moisture memory and meteorological data to enhance flood-oriented rainfall prediction models for urban flood early warning in Jakarta.", 
      credentialId: "", link: "" },
    
    { type: "Second Author", title: "Integrating Antecedent Moisture Memory into Random Forest for Flood-Oriented Rainfall Prediction in Jakarta", 
        issuer: "ICIMTech (International Conference on Information Management and Technology)", date: "September 2026, Indonesia", cover: "images/author.jpg",
      desc: "Co-authored and presented research on combining Random Forest machine learning with antecedent soil moisture memory to improve flood-oriented rainfall forecasting and urban early warning systems in Jakarta.", 
      credentialId: "", link: "" },

    { type: "Competition Participant", title: "TECHFEST 2025 - UI/UX Design", issuer: "Himpunan Teknik Informatika BINUS University", date: "2025",
      cover: "images/techfest.png", 
      desc: "Conducted user research to identify needs, design UI/UX interface solutions, and collaborated in a team to transform ideas into functional product prototypes aligned with the product lifecycle.", 
      credentialId: "", link: "" }
  ],

};

/* =====================================================
   2. FUNGSI KECIL (pembantu)
   ===================================================== */
const $ = id => document.getElementById(id);
const tagsHtml = list => list && list.length
  ? `<div class="tags">${list.map(t => `<span class="tag">${t}</span>`).join("")}</div>`: "";
const initialsOf = name => name.split(" ").slice(0, 2).map(w => w[0]).join("");
const COLORS = ["var(--accent)", "var(--green)", "var(--gold)", "var(--lime)"];

const imagesOf = x => (x.images && x.images.length) ? x.images : (x.cover ? [x.cover] : []);

function sliderHtml(pics, alt) {
  const slides = pics.map(src => `<img src="${src}" alt="${alt}" loading="lazy">`).join("");
  const bar = pics.length > 1
    ? `<div class="slider-bar"><button type="button" data-dir="-1">Sebelumnya</button><span class="count">1 / ${pics.length}</span><button type="button" data-dir="1">Berikutnya</button></div>`
    : "";
  return `<div class="slider"><div class="slides">${slides}</div>${bar}</div>`;
}

// isi kotak foto/gambar; kalau file tidak ditemukan, tampilkan teks pengganti
function setImage(box, src, fallbackText, alt) {
  box.textContent = fallbackText;
  if (!src) return;
  const img = new Image();
  img.alt = alt;
  img.onload = () => { box.textContent = ""; box.appendChild(img); };
  img.src = src;
}

/* =====================================================
   3. KARTU & POP-UP
   ===================================================== */
// satu tempat untuk menentukan apa yang tampil di kartu dan di pop-up
const VIEWS = {
  education:    x => ({ title: x.school, meta: x.major,  date: x.date,   desc: x.detail, tags: [] }),
  experience:   x => ({ title: x.title,  meta: x.place,  date: x.date,   desc: x.desc,   tags: x.tags }),
  projects:     x => ({ title: x.title,  meta: x.role,   date: x.period, desc: x.desc,   tags: x.tags, short: x.summary }),
  certificates: x => ({ title: x.title,  meta: x.issuer, date: x.date,   desc: x.desc,   tags: [x.type] })
};
const LISTS = { education: "educationList", experience: "experienceList", projects: "projectList", certificates: "certList" };

function cardHtml(kind, x, i) {
  const v = VIEWS[kind](x);
  const pic = imagesOf(x)[0];
  const top = (kind === "projects" || pic)
    ? `<div class="thumb">${pic ? `<img src="${pic}" alt="" loading="lazy" onerror="this.remove()">` : ""}</div>`
    : `<div class="card-top"><span class="date">${v.date}</span></div>`;
  return `<article class="card reveal" tabindex="0" role="button" data-modal="${kind}:${i}">
    ${top}<h3>${v.title}</h3><div class="meta">${v.meta}</div>
    <p class="clamp">${v.short || v.desc}</p>${tagsHtml(v.tags)}</article>`;
}

function modalHtml(kind, i) {
  const x = DATA[kind][i], v = VIEWS[kind](x);
  const pics = imagesOf(x);
  const img = pics.length ? sliderHtml(pics, v.title) : "";
  const points = (x.points || []).map(p => `<li>${p}</li>`).join("");
  const links = (x.links || (x.link ? [{ label: "Buka tautan", url: x.link }] : [])).filter(l => l.url);
  return `${img}<h3>${v.title}</h3><div class="meta">${v.meta} | ${v.date}</div>
    <p>${v.desc}</p>${points ? `<ul>${points}</ul>` : ""}
    ${x.credentialId ? `<p class="meta">Credential ID: ${x.credentialId}</p>` : ""}${tagsHtml(v.tags)}
    ${links.map(l => `<p><a class="btn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a></p>`).join("")}`;
}

function setupModal() {
  const dlg = $("dlg");
  document.addEventListener("click", e => {
    // tombol Sebelumnya / Berikutnya pada slider
    const btn = e.target.closest("[data-dir]");
    if (btn) {
      const s = btn.closest(".slider").querySelector(".slides");
      s.scrollBy({ left: s.clientWidth * +btn.dataset.dir, behavior: "smooth" });
      return;
    }
    const card = e.target.closest("[data-modal]");
    if (card) {
      const [kind, i] = card.dataset.modal.split(":");
      $("sheetBody").innerHTML = modalHtml(kind, +i);
      $("sheet").style.setProperty("--c", COLORS[i % 4]);
      dlg.classList.toggle("wide", imagesOf(DATA[kind][+i]).length > 0);
      dlg.showModal();
    } else if (e.target === dlg) dlg.close();
  });
  document.addEventListener("scroll", e => {
    const s = e.target;
    if (!s.classList || !s.classList.contains("slides")) return;
    const c = s.parentElement.querySelector(".count");
    if (c) c.textContent = `${Math.round(s.scrollLeft / s.clientWidth) + 1} / ${s.children.length}`;
  }, true);
  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.dataset && e.target.dataset.modal) { e.preventDefault(); e.target.click(); }
  });
  $("closeBtn").onclick = () => dlg.close();
}

//4. TAMPILKAN DATA KE HALAMAN

function renderPage() {
  document.title = "Portofolio " + DATA.name;
  $("navName").textContent = DATA.name.split(" ")[0];
  $("navLinks").innerHTML = [["about", "About"], ["education", "Pendidikan"], ["experience", "Pengalaman"], ["projects", "Projects"], ["certificates", "Certificates"], ["contact", "Contact"]]
    .map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");

  $("name").textContent = DATA.name;
  $("role").textContent = DATA.role;
  $("tagline").textContent = DATA.tagline;
  //$("stamp").innerHTML = initialsOf(DATA.name) + "<small>JG</small>";
  setImage($("photo"), DATA.photo, initialsOf(DATA.name), "Foto " + DATA.name);
  $("links").innerHTML =
    `<a class="btn" href="mailto:${DATA.email}">Kirim email</a>` +
    DATA.links.map(l => `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");

  $("aboutText").innerHTML = DATA.about.paragraphs.map((p, i, a) => `<p style="margin:0 0 ${i < a.length - 1 ? 12 : 0}px">${p}</p>`).join("")
    + `<div style="margin-top:14px">${tagsHtml(DATA.about.skills)}</div>`;
  $("facts").innerHTML = DATA.about.facts.map(f => `<li><span>${f.label}</span>${f.value}</li>`).join("");

  Object.entries(LISTS).forEach(([kind, id]) => { $(id).innerHTML = DATA[kind].map((x, i) => cardHtml(kind, x, i)).join(""); });

  $("contactTitle").textContent = DATA.contactTitle;
  $("contactBtn").innerHTML = `<a class="btn light" href="mailto:${DATA.email}">${DATA.email}</a>`;
  $("footer").textContent = `© ${new Date().getFullYear()} ${DATA.name}`;
}

//5. EFEK HALUS: muncul saat scroll, menu, progress bar
  
function setupEffects() {
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); reveal.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

  const nav = $("nav"), bar = $("progress");
  addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    bar.style.width = scrollY / ((document.documentElement.scrollHeight - innerHeight) || 1) * 100 + "%";
  }, { passive: true });

  // tandai menu sesuai bagian yang sedang dilihat
  const links = document.querySelectorAll(".nav-pill a");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("section").forEach(s => spy.observe(s));
}

renderPage();
setupModal();
setupEffects();
