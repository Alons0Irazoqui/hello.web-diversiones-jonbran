(function () {
  const WA_NUMBER = "523311833586";

  document.body.classList.add("is-loading");

  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  };

  onReady(() => {
    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mob-menu");
    const year = document.getElementById("year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    const loadDone = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      window.addEventListener("load", resolve, { once: true });
    });
    const minimumLoader = new Promise((resolve) => window.setTimeout(resolve, 2900));

    Promise.all([loadDone, minimumLoader]).then(() => {
      loader?.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      window.setTimeout(() => loader?.remove(), 950);
    });

    const loaderText = document.querySelector(".loader-text");
    if (loaderText) {
      const phases = ["Cargando experiencia...", "Activando luces LED...", "Preparando catalogo..."];
      phases.forEach((phase, index) => {
        window.setTimeout(() => {
          loaderText.textContent = phase;
        }, 650 + index * 760);
      });
    }

    const setNavState = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 18);
    };
    setNavState();
    window.addEventListener("scroll", setNavState, { passive: true });

    hamburger?.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("is-open");
      mobileMenu?.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger?.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        hamburger?.setAttribute("aria-expanded", "false");
      });
    });

    const marquee = document.getElementById("marquee");
    if (marquee) {
      const items = [
        "Maquinas de videojuegos",
        "Tableros",
        "Simuladores",
        "Futbolitos",
        "Montables",
        "Mesas de billar",
        "Brincolines",
        "Diversiones Jonbran"
      ];
      const line = items.map((item) => `<span>${item}</span>`).join("");
      marquee.innerHTML = line + line + line;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    initTypewriter();
    initStats();
    initHeroCanvas();
    initParticleFields();
    initParallax();
    initWhatsAppForm(WA_NUMBER);
  });

  function initTypewriter() {
    const target = document.getElementById("typed-word");
    if (!target) return;

    const phrases = [
      "con maquinas reales.",
      "con luz arcade.",
      "con juego real."
    ];
    let phraseIndex = 0;

    window.setInterval(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      target.classList.add("is-switching");

      window.setTimeout(() => {
        target.textContent = phrases[phraseIndex];
        target.classList.remove("is-switching");
      }, 260);
    }, 2400);
  }

  function initStats() {
    const stats = document.querySelectorAll(".stat-num");
    if (!stats.length) return;

    const animateNumber = (el) => {
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || "";
      const duration = target > 100 ? 1800 : 1300;
      const startTime = performance.now();

      const frame = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = `${current}${suffix}`;
        if (progress < 1) requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });

    stats.forEach((stat) => observer.observe(stat));
  }

  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = [];
    const colors = ["#F2811D", "#FFC94A", "#2EC4F1"];
    let width = 0;
    let height = 0;
    let animationId = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const count = Math.max(36, Math.min(86, Math.floor(width / 16)));
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2.4 + 0.8,
          vx: (Math.random() - 0.5) * 0.42,
          vy: (Math.random() - 0.5) * 0.42,
          color: colors[i % colors.length],
          alpha: Math.random() * 0.42 + 0.18
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = hexToRgba(p.color, p.alpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        const next = particles[index + 1];
        if (next && Math.hypot(p.x - next.x, p.y - next.y) < 130) {
          ctx.beginPath();
          ctx.strokeStyle = hexToRgba(p.color, 0.12);
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      });

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (prefersReducedMotion) cancelAnimationFrame(animationId);
  }

  function initParticleFields() {
    document.querySelectorAll(".particle-field").forEach((field, fieldIndex) => {
      const count = fieldIndex === 0 ? 34 : 26;
      for (let i = 0; i < count; i += 1) {
        const dot = document.createElement("span");
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.setProperty("--dur", `${6 + Math.random() * 8}s`);
        dot.style.animationDelay = `${Math.random() * 5}s`;
        field.appendChild(dot);
      }
    });
  }

  function initParallax() {
    const heroBg = document.querySelector(".hero-bg");
    const fixedBgs = document.querySelectorAll(".section-fixed-bg");

    const update = () => {
      const y = window.scrollY || 0;
      if (heroBg) {
        heroBg.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(1.08)`;
      }

      fixedBgs.forEach((bg) => {
        const rect = bg.parentElement.getBoundingClientRect();
        const offset = rect.top * -0.06;
        bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initWhatsAppForm(number) {
    const form = document.getElementById("wa-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const name = document.getElementById("f-name")?.value.trim();
      const interest = document.getElementById("f-interest")?.value.trim();
      const detail = document.getElementById("f-msg")?.value.trim();

      const message = [
        "Hola, quiero solicitar una cotizacion con Diversiones Jonbran.",
        "",
        `Nombre: ${name}`,
        `Interes: ${interest}`,
        `Detalle: ${detail}`
      ].join("\n");

      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  }

  function hexToRgba(hex, alpha) {
    const clean = hex.replace("#", "");
    const num = parseInt(clean, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
})();
