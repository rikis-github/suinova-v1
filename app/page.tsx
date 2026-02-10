"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const highlights = [
  "Berpengalaman sejak 2019",
  "Melayani area Bandung & Sekitarnya",
  "Konsultasi mudah & cepat"
];

const aboutHighlights = [
  {
    title: "Sejak 2019",
    desc: "Pengalaman menangani proyek konstruksi dan renovasi secara konsisten."
  },
  {
    title: "Bandung & Sekitarnya",
    desc: "Jangkauan layanan fleksibel sesuai kebutuhan proyek Anda."
  },
  {
    title: "Konsultasi Gratis",
    desc: "Diskusi awal untuk menentukan kebutuhan, anggaran, dan timeline."
  }
];

const advantages = [
  {
    title: "Pengerjaan rapi & terstruktur",
    desc: "Setiap tahap pekerjaan terdokumentasi dan dipantau."
  },
  {
    title: "Tim berpengalaman",
    desc: "Dikerjakan oleh tenaga ahli dengan standar profesional."
  },
  {
    title: "Estimasi waktu jelas",
    desc: "Timeline disepakati sejak awal untuk menghindari keterlambatan."
  },
  {
    title: "Harga transparan",
    desc: "Rincian biaya jelas, tanpa biaya tersembunyi."
  },
  {
    title: "Support setelah pekerjaan selesai",
    desc: "Kami siap membantu untuk kebutuhan lanjutan."
  }
];

const services = [
  {
    title: "Pembangunan Rumah Tinggal",
    desc: "Melayani pembangunan rumah dari awal hingga selesai sesuai desain dan anggaran."
  },
  {
    title: "Renovasi Bangunan",
    desc: "Perbaikan dan pembaruan rumah, ruko, maupun kantor dengan pengerjaan rapi."
  },
  {
    title: "Interior & Finishing",
    desc: "Pemasangan plafon, partisi, lantai, cat, dan pekerjaan interior lainnya."
  },
  {
    title: "Perbaikan & Maintenance",
    desc: "Perbaikan atap bocor, retak dinding, dan kerusakan bangunan lainnya."
  }
];

const portfolioImages = [
  {
    label: "Pembangunan rumah",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Tukang renovasi",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Interior ruangan",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Pekerja bangunan",
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Pembangunan rumah",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "Interior ruangan",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  }
];

const steps = [
  "Konsultasi kebutuhan",
  "Survey / diskusi detail",
  "Proses pengerjaan",
  "Finishing & serah terima"
];

const testimonials = [
  {
    quote:
      "Pelayanan cepat dan hasilnya rapi, sesuai dengan yang dibicarakan di awal.",
    name: "Andi Saputra",
    role: "Pemilik Rumah"
  },
  {
    quote: "Komunikasi enak dan pengerjaan tepat waktu, sangat membantu.",
    name: "Rina Maharani",
    role: "Pemilik Ruko"
  },
  {
    quote: "Sudah 2 kali pakai jasanya, hasil selalu memuaskan.",
    name: "Budi Hartono",
    role: "Kantor Distribusi"
  }
];

const faqs = [
  {
    q: "Berapa lama pengerjaan?",
    a: "Menyesuaikan tingkat kesulitan pekerjaan, estimasi disampaikan di awal."
  },
  {
    q: "Apakah bisa konsultasi dulu?",
    a: "Ya, konsultasi gratis sebelum pengerjaan."
  },
  {
    q: "Area layanan dimana saja?",
    a: "Kami melayani area Bandung & Sekitarnya."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Alur", href: "#alur-kerja" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <div className="bg-base text-ink">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-white/80 backdrop-blur">
        <div className="container-pro flex h-16 items-center justify-between">
          <a href="#beranda" className="text-base font-semibold tracking-tight text-ink">
            CV Karya Mandiri Teknik
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-ink">
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Hubungi Kami
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`border-t border-line bg-white/95 px-6 py-4 text-sm font-medium text-ink shadow-sm transition-all lg:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>

      <header className="pt-40 pb-24" id="beranda">
        <div className="container-pro grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="reveal" data-reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Solusi Profesional
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Solusi Profesional di Bidang{" "}
              <span className="text-brand">Jasa Konstruksi & Renovasi Bangunan</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              CV Karya Mandiri Teknik hadir membantu kebutuhan Anda dengan pelayanan
              terpercaya, hasil rapi, dan proses yang jelas.
            </p>

            <ul className="mt-8 grid gap-3 text-sm font-medium text-ink">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M9.2 16.2 4.9 12l-1.4 1.4 5.7 5.7L21.5 6.8 20.1 5.4z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          <div className="relative reveal" data-reveal>
            <div className="absolute -right-16 -top-12 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[20px] border border-line bg-white shadow-soft">
              <Image
                src={portfolioImages[0].src}
                alt="Pembangunan rumah tinggal"
                width={1200}
                height={900}
                priority
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="section-pad" id="tentang">
        <div className="container-pro">
          <div className="mx-auto max-w-[760px] text-center reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Tentang Kami</h2>
            <p className="mt-4 text-[0.98rem] text-muted">
              CV Karya Mandiri Teknik merupakan penyedia layanan Jasa Konstruksi &
              Renovasi Bangunan yang berfokus pada kualitas pekerjaan dan kepuasan
              pelanggan.
            </p>
            <p className="mt-4 text-[0.98rem] text-muted">
              Kami memahami setiap kebutuhan memiliki detail berbeda, karena itu setiap
              pengerjaan dilakukan dengan perencanaan yang jelas, komunikasi terbuka, dan
              hasil yang dapat dipertanggungjawabkan.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <div
                key={item.title}
                className="card reveal"
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="keunggulan">
        <div className="container-pro">
          <div className="section-head reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Kenapa Memilih Kami</h2>
            <p className="mt-3 text-muted">
              Standar kerja yang konsisten dan terukur untuk memastikan kualitas terbaik.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="card reveal"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2 2 7l10 5 10-5-10-5zm0 7.8L6.2 7 12 4.2 17.8 7 12 9.8zM4 10.6v5.8l8 4 8-4v-5.8l-8 4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="layanan">
        <div className="container-pro">
          <div className="section-head reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Kami Menyediakan Layanan Berikut</h2>
            <p className="mt-3 text-muted">Solusi yang dapat disesuaikan dengan kebutuhan Anda.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card reveal"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="portofolio">
        <div className="container-pro">
          <div className="section-head reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Portofolio</h2>
            <p className="mt-3 text-muted">Berikut beberapa pekerjaan yang telah kami selesaikan.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:shadow-soft reveal"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-sm font-medium text-ink">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="alur-kerja">
        <div className="container-pro">
          <div className="section-head text-left reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Proses Pengerjaan</h2>
            <p className="mt-3 text-muted">Alur kerja transparan untuk memastikan hasil terbaik.</p>
          </div>
          <div className="relative overflow-x-auto">
            <div className="relative min-w-[900px]">
              <span className="absolute left-10 right-10 top-10 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                  <div
                    key={step}
                    className="reveal rounded-2xl border border-line bg-white p-6 text-center shadow-sm"
                    data-reveal
                    style={{ transitionDelay: `${idx * 120}ms` }}
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-base font-semibold text-white shadow-lg shadow-brand/30">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-medium text-muted">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-100" id="testimoni">
        <div className="container-pro">
          <div className="section-head reveal" data-reveal>
            <h2 className="text-3xl font-semibold">Testimoni</h2>
            <p className="mt-3 text-muted">Klien kami merasakan kualitas dan pelayanan yang konsisten.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testi, index) => (
              <div
                key={testi.name}
                className="testimonial-card reveal"
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-base font-medium text-ink">“{testi.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-ink">— {testi.name}</p>
                <p className="text-sm text-muted">{testi.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="faq">
        <div className="container-pro">
          <div className="section-head reveal" data-reveal>
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <p className="mt-3 text-muted">Jawaban singkat untuk pertanyaan yang sering diajukan.</p>
          </div>
          <div className="grid gap-5">
            {faqs.map((item, index) => (
              <div
                key={item.q}
                className="faq-card reveal"
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-20" id="kontak">
        <div className="container-pro text-center text-white">
          <h2 className="text-3xl font-semibold">Konsultasikan kebutuhan Anda sekarang</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/85">
            Tim kami siap membantu memberikan solusi terbaik.
          </p>
          <a
            href="https://wa.me/6281234567890"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-semibold text-brand shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
          >
            Tombol WhatsApp
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted">
        <div className="container-pro">&copy; 2019 CV Karya Mandiri Teknik. Semua hak dilindungi.</div>
      </footer>
    </div>
  );
}
