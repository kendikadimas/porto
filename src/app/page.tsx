"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Users, 
  Trophy, 
  ArrowUpRight, 
  CheckCircle2,
  Code,
  Sparkles,
  Server,
  Layers,
  Wrench
} from "lucide-react";

// Custom SVG Brand Icons since Lucide-react doesn't bundle them
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Project Data
const PROJECTS = [
  {
    title: "GanaBooth",
    subtitle: "Custom Photobooth Software",
    role: "Fullstack Developer",
    date: "Maret 2026",
    description: "Membangun aplikasi desktop lintas platform yang dilengkapi fitur pengambilan gambar dan live-view. Sudah dipakai oleh ratusan customer dalam event.",
    tags: ["Electron.js", "TypeScript", "Tailwind CSS"],
    link: null
  },
  {
    title: "Website Desa Kalisabuk",
    subtitle: "Website Company Profile CMS",
    role: "Fullstack Developer",
    date: "Februari 2026",
    description: "Membuat situs profil perusahaan beserta sistem manajemen konten dinamis yang dioptimalkan untuk mesin pencari (SEO).",
    tags: ["Laravel", "React", "Tailwind CSS", "SEO"],
    link: "http://www.desakalisabuk.com"
  },
  {
    title: "Website Anggana Project",
    subtitle: "Website Company Profile CMS",
    role: "Fullstack Developer",
    date: "Desember 2025",
    description: "Mengembangkan situs web dan dasbor admin pengelola konten dengan antarmuka yang modern, cepat, dan mudah digunakan.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "http://www.angganaproject.com"
  }
];

// Experience Data
const WORK_EXPERIENCE = [
  {
    company: "Kalana Labs (Digital Creative Studio)",
    role: "Founder & Web Developer (Freelance)",
    date: "Desember 2025 – Sekarang",
    description: "Mengembangkan situs web untuk 5+ klien, serta mengelola seluruh tahapan proyek mulai dari konsultasi awal hingga peluncuran.",
    type: "work"
  },
  {
    company: "Universitas Jenderal Soedirman",
    role: "Asisten Praktikum Pemrograman Website",
    date: "Agustus 2025 – Januari 2026",
    description: "Membimbing 40+ mahasiswa dalam praktik pengembangan web modern dan mendampingi penyelesaian proyek akhir mereka.",
    type: "academic"
  },
  {
    company: "PT Cazh Teknologi Inovasi",
    role: "Frontend Developer (Magang)",
    date: "Juli – Agustus 2025",
    description: "Menerjemahkan desain antarmuka (UI/UX) menjadi kode fungsional dan membangun komponen antarmuka yang dapat digunakan ulang (TypeScript) untuk company profile SaaS CARDS.",
    type: "work"
  }
];

// Organization Data
const ORGANIZATIONS = [
  {
    organization: "Soedirman Engineering Entrepreneurship Organization",
    role: "Staf Website Divisi Marketing Medinfo",
    date: "Maret – Desember 2025",
    description: "Mengembangkan dan maintain website organisasi dengan fitur management internal dan sistem operasional."
  }
];

// Skills Data
const SKILLS = {
  frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Figma"],
  backend: ["Laravel", "PHP"],
  toolsDb: ["Git/GitHub", "PostgreSQL", "MySQL", "Supabase", "Electron.js"],
  softSkills: ["Problem Solving", "Project Management", "Teamwork", "Communication", "Leadership", "Critical Thinking"]
};

// Awards Data
const AWARDS = [
  { title: "Finalist Gemastik XVIII", year: "2025" },
  { title: "Juara III Hackathon NITRO", year: "2025" },
  { title: "Juara II Web Design Evolution", year: "2024" },
  { title: "Finalist CITECH", year: "2024" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "organization">("experience");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate sending email/form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-primary selection:text-black bg-[#09090b] text-[#f4f4f5]">
      {/* Neobrutalism Dot Background Pattern - Extremely subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.12] bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#09090b]/90 backdrop-blur-md border-[2px] border-zinc-800 px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
          <a href="#" className="text-xl font-black tracking-tighter uppercase text-white hover:text-primary transition-colors">
            DIMAS<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-black tracking-wider uppercase text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Journey</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl bg-primary border-[2px] border-black text-black font-black text-xs tracking-wider uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] shadow-[2px_2px_0px_0px_#000] transition-all"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-28 md:pt-36 pb-32 flex flex-col gap-20 md:gap-28 max-w-7xl">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-start gap-5 justify-center min-h-[calc(100vh-10rem)]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#18181b] border-[2px] border-zinc-800 text-xs font-black tracking-wider shadow-[3px_3px_0px_0px_#000] text-zinc-300">
              <span className="w-2.5 h-2.5 bg-primary border border-black rounded-full animate-pulse" />
              AVAILABLE FOR NEW FREELANCE PROJECTS
            </div>
          </motion.div>
          
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white"
            >
              DIMAS <span className="gradient-text-primary">KENDIKA</span><br/>
              FAZRULFALAH
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-zinc-400 font-extrabold uppercase tracking-wide pt-1"
            >
              <span className="flex items-center gap-1.5 bg-[#18181b] border-[2px] border-zinc-800 px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000]"><MapPin className="w-3.5 h-3.5 text-secondary" /> Purbalingga, Indonesia</span>
              <span className="flex items-center gap-1.5 bg-[#18181b] border-[2px] border-zinc-800 px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000]"><GraduationCap className="w-3.5 h-3.5 text-primary" /> S1 Informatika (IPK 3.75)</span>
              <span className="flex items-center gap-1.5 bg-[#18181b] border-[2px] border-zinc-800 px-2.5 py-1 rounded-lg shadow-[2px_2px_0px_0px_#000]"><Sparkles className="w-3.5 h-3.5 text-accent" /> Founder Kalana Labs</span>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-zinc-400 max-w-2xl font-bold leading-relaxed tracking-tight"
          >
            Mahasiswa Informatika semester 6 dengan pengalaman mengembangkan solusi digital berkualitas tinggi. Fokus pada transformasi <span className="text-primary font-black underline decoration-2 decoration-primary">design-to-code</span> yang responsive, modern, dan user-centric menggunakan React, Next.js, dan Laravel.
          </motion.p>
          
          {/* Contact Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <a href="mailto:dkendika1@gmail.com" className="px-4 py-2.5 rounded-xl bg-primary text-black border-[2px] border-black font-black tracking-wide flex items-center gap-1.5 text-xs uppercase shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all">
              <Mail className="w-3.5 h-3.5" /> Email Me
            </a>
            <a href="https://github.com/kendikadimas" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-[#18181b] text-white border-[2px] border-zinc-800 font-black tracking-wide flex items-center gap-1.5 text-xs uppercase shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href="http://www.linkedin.com/in/dimaskendika" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-[#18181b] text-white border-[2px] border-zinc-800 font-black tracking-wide flex items-center gap-1.5 text-xs uppercase shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="http://kendika.my.id" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-xl bg-[#18181b] text-white border-[2px] border-zinc-800 font-black tracking-wide flex items-center gap-1.5 text-xs uppercase shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all">
              <Globe className="w-3.5 h-3.5" /> Website
            </a>
            <a href="tel:+6287864562253" className="px-4 py-2.5 rounded-xl bg-[#18181b] text-white border-[2px] border-zinc-800 font-black tracking-wide flex items-center gap-1.5 text-xs uppercase shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all">
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
          </motion.div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[35%] relative group shrink-0"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-[4px] border-zinc-800 bg-zinc-900 shadow-[8px_8px_0px_0px_var(--color-primary)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--color-primary)]">
              <img 
                src="/unsoed%20diken.jpg" 
                alt="Dimas Kendika Fazrulfalah" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-lg bg-black border-2 border-zinc-800 text-[10px] font-extrabold text-primary uppercase tracking-wider">
                  Web Developer
                </span>
                <h4 className="text-xl font-black text-white mt-3 leading-none">Dimas Kendika</h4>
                <p className="text-xs text-zinc-300 mt-1.5">Purbalingga, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* About Text & Education Sub-card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-between self-stretch"
          >
            <div className="flex flex-col h-full justify-between gap-8">
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">About Me</h2>
                  <div className="h-px w-24 bg-zinc-800 mt-0.5" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-white uppercase">
                  Transforming complex design files into <br />
                  <span className="gradient-text-primary">seamless, clean code.</span>
                </h3>
                <p className="text-zinc-300 font-bold leading-relaxed mb-4 text-base md:text-lg">
                  Sebagai founder Kalana Labs, saya telah berhasil meluncurkan situs web untuk 5+ klien secara profesional. Saya sangat menyukai proses integrasi frontend modern dengan backend yang kuat untuk menghasilkan pengalaman pengguna yang luar biasa.
                </p>
                <p className="text-zinc-400 font-medium leading-relaxed text-sm md:text-base">
                  Dengan dedikasi tinggi pada performa dan standar SEO, saya siap membantu mentransformasikan ide digital Anda menjadi kenyataan yang responsif dan berkinerja tinggi.
                </p>
              </div>

              {/* Education & Freelance Sub-cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                
                {/* Education Card */}
                <div className="neo-card-white p-5 flex items-center gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200">
                  <div className="p-3 bg-primary border-2 border-black rounded-xl shrink-0 text-black">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-wider">Pendidikan</h4>
                    <p className="text-white font-black text-sm leading-tight">Universitas Jenderal Soedirman</p>
                    <p className="text-[11px] text-zinc-500 font-extrabold uppercase mt-1">S1 Informatika | IPK 3.75</p>
                  </div>
                </div>

                {/* Freelance Studio Card */}
                <div className="neo-card-white p-5 flex items-center gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200">
                  <div className="w-12 h-12 border-2 border-black rounded-xl overflow-hidden bg-[#1f1f23] flex items-center justify-center shrink-0 p-1">
                    <img 
                      src="/kalana.png" 
                      alt="Kalana Labs Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-wider">Freelance Studio</h4>
                    <p className="text-white font-black text-sm leading-tight">Kalana Labs</p>
                    <p className="text-[11px] text-secondary font-extrabold uppercase mt-1">Founder & Web Dev (5+ Clients)</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE & TIMELINE SECTION */}
        <section id="experience" className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-zinc-800 pb-6">
            <div>
              <div className="flex items-center gap-6 mb-3">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">Journey</h2>
                <div className="h-px w-16 bg-zinc-800 mt-0.5" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Pengalaman Kerja & Organisasi</h3>
            </div>
            
            {/* Tabs */}
            <div className="flex p-1 bg-[#18181b] border-[2px] border-zinc-800 rounded-xl self-start shadow-[4px_4px_0px_0px_#000]">
              <button 
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "experience" ? "bg-primary text-black border-2 border-black" : "text-zinc-400 hover:text-white"}`}
              >
                Work Experience
              </button>
              <button 
                onClick={() => setActiveTab("organization")}
                className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeTab === "organization" ? "bg-primary text-black border-2 border-black" : "text-zinc-400 hover:text-white"}`}
              >
                Organization
              </button>
            </div>
          </div>

          {/* Timeline View */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === "experience" ? (
                <motion.div 
                  key="experience-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-1 before:bg-zinc-800"
                >
                  {WORK_EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      
                      {/* Central Node */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-[10px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-[3px] border-[#09090b] z-20 shadow-[2px_2px_0px_0px_#000]" />
                      
                      {/* Spacer/Empty box for desktop grid alignment */}
                      <div className="hidden md:block w-1/2" />
                      
                      {/* Content Card */}
                      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                        <div className="neo-card-white p-6 group">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <span className="px-3 py-1 rounded-lg bg-[#09090b] border-2 border-zinc-800 text-[10px] font-black text-secondary uppercase tracking-widest">
                              {exp.type === "academic" ? "Academic" : "Professional"}
                            </span>
                            <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono font-bold">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              <span>{exp.date}</span>
                            </div>
                          </div>
                          <h4 className="text-xl font-black tracking-tight text-white mb-1 group-hover:text-primary transition-colors uppercase">{exp.company}</h4>
                          <h5 className="text-sm font-extrabold text-zinc-500 uppercase tracking-wide mb-4">{exp.role}</h5>
                          
                          <ul className="text-zinc-300 font-medium text-sm list-disc pl-4 space-y-1">
                            <li>{exp.description}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="organization-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-1 before:bg-zinc-800"
                >
                  {ORGANIZATIONS.map((org, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                      
                      {/* Central Node */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-[10px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-[3px] border-[#09090b] z-20 shadow-[2px_2px_0px_0px_#000]" />
                      
                      {/* Spacer/Empty box */}
                      <div className="hidden md:block w-1/2" />
                      
                      {/* Content Card */}
                      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                        <div className="neo-card-white p-6 group">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <span className="px-3 py-1 rounded-lg bg-[#09090b] border-2 border-zinc-800 text-[10px] font-black text-accent uppercase tracking-widest">
                              Organization
                            </span>
                            <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono font-bold">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              <span>{org.date}</span>
                            </div>
                          </div>
                          <h4 className="text-xl font-black tracking-tight text-white mb-1 group-hover:text-secondary transition-colors uppercase">{org.organization}</h4>
                          <h5 className="text-sm font-extrabold text-zinc-500 uppercase tracking-wide mb-4">{org.role}</h5>
                          
                          <ul className="text-zinc-300 font-medium text-sm list-disc pl-4 space-y-1">
                            <li>{org.description}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-zinc-800 mt-0.5 hidden md:block" />
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">Selected Works</h2>
            <div className="h-px flex-1 bg-zinc-800 mt-0.5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative neo-card-white p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-zinc-500">{project.date}</span>
                    <span className="px-3 py-1 rounded-lg bg-[#09090b] border-2 border-zinc-800 text-[10px] font-black text-secondary uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300 mb-1 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <h4 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-wider">{project.subtitle}</h4>
                  
                  <p className="text-zinc-400 font-medium text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology badging */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 text-[10px] font-extrabold bg-[#27272a] border border-zinc-700 rounded-lg text-zinc-300 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-black text-white uppercase tracking-wider hover:text-secondary transition-colors duration-300 group-hover:underline"
                    >
                      Visit Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-extrabold text-zinc-600 uppercase tracking-wider">
                      Internal / Desktop App
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS & AWARDS SECTION */}
        <section id="skills" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-6 mb-3">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">Technical & Soft Skills</h2>
                <div className="h-px w-16 bg-zinc-800 mt-0.5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Keahlian & Kemampuan</h3>
            </div>

            <div className="space-y-6">
              {/* Frontend */}
              <div className="p-6 bg-[#18181b] border-[2px] border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <h4 className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider mb-4">
                  <Code className="w-4 h-4 text-primary" /> Frontend Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.frontend.map((skill, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-[#09090b] border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg hover:bg-primary hover:text-black hover:border-black transition-all duration-150">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Desktop */}
              <div className="p-6 bg-[#18181b] border-[2px] border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <h4 className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider mb-4">
                  <Server className="w-4 h-4 text-secondary" /> Backend & Desktop
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.backend.map((skill, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-[#09090b] border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg hover:bg-secondary hover:text-black hover:border-black transition-all duration-150">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & DB */}
              <div className="p-6 bg-[#18181b] border-[2px] border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <h4 className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider mb-4">
                  <Wrench className="w-4 h-4 text-accent" /> Tools & Databases
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.toolsDb.map((skill, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-[#09090b] border border-zinc-800 text-xs font-bold text-zinc-300 rounded-lg hover:bg-accent hover:text-black hover:border-black transition-all duration-150">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="p-6 bg-[#18181b] border-[2px] border-zinc-800 rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <h4 className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-wider mb-4">
                  <Layers className="w-4 h-4 text-zinc-500" /> Professional Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.softSkills.map((skill, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-[#18181b] border border-zinc-800/60 text-xs font-bold text-zinc-400 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-between"
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-6 mb-3">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">Achievements</h2>
                  <div className="h-px w-16 bg-zinc-800 mt-0.5" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Penghargaan Kompetisi</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="bg-[#18181b] border-[2px] border-zinc-800 p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-start gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200 group">
                    <div className="p-3 bg-[#09090b] border border-zinc-800 text-accent rounded-xl group-hover:scale-110 transition-transform shrink-0">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white leading-snug mb-1 group-hover:text-primary transition-colors uppercase">{award.title}</h4>
                      <span className="text-xs font-mono font-black text-zinc-500">{award.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-callout for achievements */}
            <div className="mt-8 bg-primary border-[2px] border-zinc-800 p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] relative overflow-hidden flex flex-col justify-between min-h-[220px] text-black">
              <div className="absolute top-0 right-0 p-8 opacity-[0.08]">
                <Trophy className="w-36 h-36" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-primary px-2.5 py-1 rounded-md inline-block mb-3 border border-white">
                  Competitive Mindset
                </span>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-3">Selalu Siap Berkompetisi</h4>
                <p className="text-black/80 font-bold text-sm leading-relaxed">
                  Memenangkan penghargaan di tingkat nasional dan regional dalam bidang pengembangan web dan hackathon. Menunjukkan semangat belajar yang tinggi dan kecepatan dalam memecahkan masalah kompleks.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact" className="flex flex-col gap-12 max-w-4xl mx-auto w-full pt-12">
          <div>
            <div className="flex items-center justify-center gap-6 mb-3">
              <div className="h-px w-16 bg-zinc-800 mt-0.5" />
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap text-center">Get In Touch</h2>
              <div className="h-px w-16 bg-zinc-800 mt-0.5" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-center uppercase tracking-tight text-white">Hubungi Saya</h3>
            <p className="text-zinc-400 text-center max-w-lg mx-auto font-bold text-sm mt-4">
              Ada proyek yang ingin didiskusikan atau sekadar ingin menyapa? Kirim pesan Anda di bawah ini dan saya akan segera membalasnya.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#18181b] border-[2px] border-zinc-800 p-8 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#000]"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-zinc-400">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-[#09090b] border-[2px] border-zinc-800 text-white text-sm transition-all focus:border-primary focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)] focus:outline-none"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-wider text-zinc-400">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-[#09090b] border-[2px] border-zinc-800 text-white text-sm transition-all focus:border-primary focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)] focus:outline-none"
                    placeholder="nama@domain.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black uppercase tracking-wider text-zinc-400">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl bg-[#09090b] border-[2px] border-zinc-800 text-white text-sm transition-all focus:border-primary focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)] focus:outline-none"
                  placeholder="Judul pesan Anda"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-zinc-400">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl bg-[#09090b] border-[2px] border-zinc-800 text-white text-sm transition-all focus:border-primary focus:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.15)] focus:outline-none resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                {formStatus === "success" && (
                  <p className="text-sm text-primary font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Pesan berhasil dikirim! Terima kasih.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-sm text-red-500 font-bold">
                    Terjadi kesalahan. Silakan coba lagi.
                  </p>
                )}
                {formStatus === "idle" && <div className="hidden sm:block" />}
                
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full sm:w-auto px-8 py-4.5 rounded-xl bg-primary text-black border-[2px] border-black font-black text-xs tracking-wider uppercase shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t-2 border-zinc-800 bg-[#09090b] mt-24 text-[#f4f4f5]">
        <div className="container mx-auto px-6 py-16 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">DIMAS<span className="text-zinc-500">KENDIKA.</span></h2>
            <p className="text-zinc-500 max-w-sm text-center md:text-left text-sm font-bold leading-relaxed">
               Mahasiswa S1 Informatika & Web Developer yang berfokus menciptakan website berkualitas premium yang responsif, cepat, dan teroptimasi.
            </p>
          </div>
          
          <div className="flex items-center gap-3 border-[2px] border-zinc-800 p-2 rounded-xl bg-[#18181b] shadow-[4px_4px_0px_0px_#000]">
            <a href="mailto:dkendika1@gmail.com" aria-label="Email" className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#09090b] border border-zinc-800 hover:bg-primary hover:text-black text-zinc-400 hover:-translate-y-0.5 transition-all">
              <Mail className="w-5 h-5" />
            </a>
            <a href="http://www.linkedin.com/in/dimaskendika" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#09090b] border border-zinc-800 hover:bg-primary hover:text-black text-zinc-400 hover:-translate-y-0.5 transition-all">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://github.com/kendikadimas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#09090b] border border-zinc-800 hover:bg-primary hover:text-black text-zinc-400 hover:-translate-y-0.5 transition-all">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="http://kendika.my.id" target="_blank" rel="noopener noreferrer" aria-label="Website" className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#09090b] border border-zinc-800 hover:bg-primary hover:text-black text-zinc-400 hover:-translate-y-0.5 transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="py-8 border-t border-zinc-800/40 text-center text-xs text-zinc-600 font-black tracking-widest uppercase">
          © {new Date().getFullYear()} Dimas Kendika Fazrulfalah. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
