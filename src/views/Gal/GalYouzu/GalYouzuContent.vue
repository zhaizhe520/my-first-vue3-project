<template>
  <div class="portfolio" v-once>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content max-w-5xl mx-auto px-6">
        <div class="hero-text" ref="heroText">
          <p class="greeting">Hello, I'm</p>
          <h1 class="name">Zhang Wei</h1>
          <h2 class="role">
            <span class="role-prefix">Frontend</span>
            <span class="role-divider">/</span>
            <span class="role-suffix">Developer</span>
          </h2>
          <p class="tagline">
            Crafting delightful web experiences with clean code and creative design.
            Passionate about building products that people love to use.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section max-w-5xl mx-auto px-6" ref="skillsSection">
      <h2 class="section-title">Tech Stack</h2>
      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
        >
          <div class="skill-icon" v-html="skill.icon"></div>
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}</span>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section max-w-5xl mx-auto px-6" ref="projectsSection">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="project-image">
            <div class="project-img-placeholder" :style="{ background: project.gradient }">
              <span class="project-img-letter">{{ project.title.charAt(0) }}</span>
            </div>
            <div class="project-overlay">
              <span class="overlay-text">View Details</span>
            </div>
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="project-tag"
              >{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="project.demo" class="project-link link-demo" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
              <a :href="project.source" class="project-link link-source" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Source
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section max-w-5xl mx-auto px-6" ref="aboutSection">
      <h2 class="section-title">About Me</h2>
      <div class="about-card">
        <div class="about-text">
          <p>
            I'm a frontend developer with <strong>5+ years</strong> of experience building modern web applications.
            I specialize in <strong>Vue 3</strong> and <strong>React</strong> ecosystems, with a strong focus on
            performance optimization, component architecture, and delightful user experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
            or writing technical articles about frontend best practices.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat" v-for="stat in stats" :key="stat.label">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section max-w-5xl mx-auto px-6" ref="contactSection">
      <h2 class="section-title">Let's Work Together</h2>
      <div class="contact-card">
        <p class="contact-intro">
          I'm currently open to freelance opportunities and interesting projects.
          Whether you have a question or just want to say hello, feel free to reach out!
        </p>
        <div class="contact-links">
          <a href="mailto:hello@zhangwei.dev" class="contact-link" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>hello@zhangwei.dev</span>
          </a>
          <a href="https://github.com" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <span>github.com/zhangwei</span>
          </a>
          <a href="https://linkedin.com" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>linkedin.com/in/zhangwei</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="portfolio-footer">
      <p>&copy; {{ currentYear }} Zhang Wei. Built with Vue 3.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentYear = new Date().getFullYear()

const heroText = ref(null)
const skillsSection = ref(null)
const projectsSection = ref(null)
const aboutSection = ref(null)
const contactSection = ref(null)

const skills = [
  {
    name: 'Vue 3',
    level: 'Expert',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M14.4 3.0L12 0L9.6 3.0L1.3 3.0L0 5.2L3.6 11.5L0 17.8L1.3 20L9.6 20L12 23L14.4 20L22.7 20L24 17.8L20.4 11.5L24 5.2L22.7 3.0L14.4 3.0Z" fill="#35495E"/><path d="M14.4 3.0L9.6 3.0L12 7.0L14.4 3.0Z" fill="#41B883"/><path d="M9.6 20.0L12 16.0L14.4 20.0L9.6 20.0Z" fill="#41B883"/><path d="M1.3 3.0L3.6 7.0L5.9 3.0L1.3 3.0Z" fill="#41B883"/><path d="M18.1 3.0L20.4 7.0L22.7 3.0L18.1 3.0Z" fill="#41B883"/><path d="M3.6 16.0L1.3 20.0L5.9 20.0L3.6 16.0Z" fill="#41B883"/><path d="M20.4 16.0L18.1 20.0L22.7 20.0L20.4 16.0Z" fill="#41B883"/><path d="M12 7.0L7.5 14.8L9.2 14.8L12 9.8L14.8 14.8L16.5 14.8L12 7.0Z" fill="#35495E"/></svg>'
  },
  {
    name: 'React',
    level: 'Expert',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1" fill="none" transform="rotate(120 12 12)"/></svg>'
  },
  {
    name: 'TypeScript',
    level: 'Expert',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="2" fill="#3178C6"/><text x="4" y="17" font-size="12" font-weight="bold" fill="white" font-family="monospace">TS</text></svg>'
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 4.8C9.6 4.8 8.1 6 7.5 8.4C8.4 7.2 9.45 6.75 10.65 7.05C11.36 7.22 11.87 7.74 12.43 8.32C13.35 9.28 14.4 10.4 16.5 10.4C18.9 10.4 20.4 9.2 21 6.8C20.1 8 19.05 8.45 17.85 8.15C17.14 7.98 16.63 7.46 16.07 6.88C15.15 5.92 14.1 4.8 12 4.8ZM7.5 10.4C5.1 10.4 3.6 11.6 3 14C3.9 12.8 4.95 12.35 6.15 12.65C6.86 12.82 7.37 13.34 7.93 13.92C8.85 14.88 9.9 16 12 16C14.4 16 15.9 14.8 16.5 12.4C15.6 13.6 14.55 14.05 13.35 13.75C12.64 13.58 12.13 13.06 11.57 12.48C10.65 11.52 9.6 10.4 7.5 10.4Z" fill="#06B6D4"/></svg>'
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 1L2 6.5V17.5L12 23L22 17.5V6.5L12 1Z" fill="#8CC84B" stroke="#689F38" stroke-width="0.5"/><path d="M12 1L2 6.5V17.5L12 23L22 17.5V6.5L12 1Z" fill="none" stroke="#33691E" stroke-width="0.3"/><path d="M7 9.5L12 12L17 9.5" fill="none" stroke="white" stroke-width="0.8"/><path d="M7 12L12 14.5L17 12" fill="none" stroke="white" stroke-width="0.8"/></svg>'
  },
  {
    name: 'Git',
    level: 'Advanced',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#F05032"/><circle cx="12" cy="12" r="3" fill="white"/><path d="M6 6L18 18" stroke="white" stroke-width="2"/></svg>'
  },
  {
    name: 'Figma',
    level: 'Intermediate',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#1E1E1E"/><circle cx="8" cy="8" r="3" fill="#FF7262"/><circle cx="8" cy="16" r="3" fill="#1ABCFE"/><circle cx="16" cy="12" r="3" fill="#0ACF83"/><circle cx="16" cy="19.5" r="3" fill="#A259FF"/></svg>'
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="3" fill="#2496ED"/><text x="4" y="17" font-size="11" font-weight="bold" fill="white" font-family="monospace">D</text></svg>'
  }
]

const projects = [
  {
    title: 'ShopVue E-Commerce',
    description: 'A full-featured online store built with Vue 3 and Pinia. Includes cart management, product filtering, and Stripe payment integration.',
    tags: ['Vue 3', 'Pinia', 'Tailwind', 'Stripe'],
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)',
    demo: '#',
    source: '#'
  },
  {
    title: 'TaskFlow Dashboard',
    description: 'Real-time project management dashboard with drag-and-drop boards, team collaboration features, and analytics charts.',
    tags: ['React', 'TypeScript', 'DnD Kit', 'Chart.js'],
    gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #EA580C 100%)',
    demo: '#',
    source: '#'
  },
  {
    title: 'WeatherWave App',
    description: 'Progressive web app with location-based weather forecasts, interactive radar maps, and severe weather alerts.',
    tags: ['Vue 3', 'PWA', 'Mapbox', 'API'],
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #D97706 100%)',
    demo: '#',
    source: '#'
  },
  {
    title: 'DevBlog CMS',
    description: 'A markdown-based blogging platform with syntax highlighting, full-text search, and RSS feed generation.',
    tags: ['Nuxt 3', 'Markdown', 'Search', 'RSS'],
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #EA580C 100%)',
    demo: '#',
    source: '#'
  }
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  { value: '2k+', label: 'GitHub Stars' }
]

let observer = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )

  const refs = [heroText.value, skillsSection.value, projectsSection.value, aboutSection.value, contactSection.value]
  refs.forEach((el) => {
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ===== Font Import ===== */
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

/* ===== Color Tokens ===== */
:root {
  --color-bg: #FFF8E7;
  --color-bg-warm: #FFF3D6;
  --color-primary: #F59E0B;
  --color-primary-dark: #D97706;
  --color-secondary: #FBBF24;
  --color-cta: #EA580C;
  --color-cta-hover: #C2410C;
  --color-text: #292524;
  --color-text-muted: #78716C;
  --color-card: #FFFFFF;
  --color-border: #FDE68A;
  --color-gradient-start: #FFF8E7;
  --color-gradient-end: #FEF3C7;
}

/* ===== Base ===== */
.portfolio {
  font-family: 'Space Grotesk', 'Archivo', system-ui, sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
  overflow-x: hidden;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 20%, rgba(251, 191, 36, 0.18), transparent),
    radial-gradient(ellipse 60% 80% at 80% 80%, rgba(234, 88, 12, 0.12), transparent),
    radial-gradient(ellipse 50% 50% at 50% 50%, rgba(245, 158, 11, 0.08), transparent);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-text {
  max-width: 700px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero-text.visible {
  opacity: 1;
  transform: translateY(0);
}

.greeting {
  font-family: 'Archivo', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-cta);
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.name {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.05;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.role {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.role-prefix {
  color: var(--color-primary-dark);
  font-weight: 600;
}

.role-divider {
  color: var(--color-cta);
  font-weight: 200;
}

.role-suffix {
  font-weight: 300;
}

.tagline {
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.25s ease-out;
  cursor: pointer;
  border: 2px solid transparent;
  line-height: 1;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-cta));
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(234, 88, 12, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.45);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary-dark);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: #FFFFFF;
}

/* ===== Section Titles ===== */
.section-title {
  font-family: 'Archivo', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-cta));
  border-radius: 2px;
}

/* ===== Skills Section ===== */
.skills-section {
  padding: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.skills-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.25rem;
}

.skill-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  transition: all 0.25s ease-out;
  cursor: pointer;
}

.skill-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.15);
  transform: translateY(-3px);
}

.skill-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon :deep(svg) {
  width: 28px;
  height: 28px;
}

.skill-name {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
}

.skill-level {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  background: var(--color-bg-warm);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

/* ===== Projects Section ===== */
.projects-section {
  padding: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.projects-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.project-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 30px rgba(245, 158, 11, 0.18);
  transform: translateY(-4px);
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease-out;
}

.project-card:hover .project-img-placeholder {
  transform: scale(1.05);
}

.project-img-letter {
  font-family: 'Archivo', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(41, 37, 36, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-text {
  color: #FFFFFF;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  border: 2px solid rgba(255, 255, 255, 0.6);
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-family: 'Archivo', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.625rem;
}

.project-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.project-tag {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary-dark);
  background: var(--color-bg-warm);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
}

.project-links {
  display: flex;
  gap: 1.25rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Archivo', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.link-demo {
  color: var(--color-cta);
}

.link-demo:hover {
  color: var(--color-cta-hover);
}

.link-source {
  color: var(--color-text-muted);
}

.link-source:hover {
  color: var(--color-text);
}

/* ===== About Section ===== */
.about-section {
  padding: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.about-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.5rem;
  align-items: center;
}

.about-text p {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-text strong {
  color: var(--color-text);
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  min-width: 220px;
}

.stat {
  text-align: center;
  padding: 1.25rem;
  background: var(--color-bg);
  border-radius: 1rem;
  border: 1px solid var(--color-border);
}

.stat-number {
  display: block;
  font-family: 'Archivo', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-cta);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  line-height: 1.3;
}

/* ===== Contact Section ===== */
.contact-section {
  padding: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.contact-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-card {
  background: linear-gradient(135deg, var(--color-primary), var(--color-cta));
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
  color: #FFFFFF;
}

.contact-intro {
  font-size: 1.125rem;
  line-height: 1.75;
  opacity: 0.95;
  margin-bottom: 2rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75rem;
  color: #FFFFFF;
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 0.25s ease-out;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* ===== Footer ===== */
.portfolio-footer {
  text-align: center;
  padding: 2rem 1.5rem 3rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
}

/* ===== Reduced Motion ===== */
@media (prefers-reduced-motion: reduce) {
  .hero-text,
  .skills-section,
  .projects-section,
  .about-section,
  .contact-section {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .btn,
  .skill-card,
  .project-card,
  .contact-link,
  .project-img-placeholder {
    transition: none;
  }
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .about-card {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .about-stats {
    grid-template-columns: repeat(4, 1fr);
    min-width: 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }

  .contact-card {
    padding: 2rem 1.25rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
  }

  .hero {
    min-height: 90vh;
  }
}
</style>
