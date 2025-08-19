// AI Coding Theme - Dark/Light Mode Toggle
// Vanilla JavaScript implementation for static GitHub Pages

class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('ai-theme') || 'light';
    this.init();
  }

  init() {
    // Apply saved theme immediately
    this.applyTheme(this.theme);
    
    // Create theme toggle button
    this.createToggleButton();
    
    // Add system theme change listener
    this.watchSystemTheme();
    
    // Initialize scroll animations
    this.initScrollAnimations();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.theme = theme;
    localStorage.setItem('ai-theme', theme);
    
    // Update toggle button icon
    this.updateToggleIcon();
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  createToggleButton() {
    // Create toggle button
    const toggle = document.createElement('button');
    toggle.className = 'ai-theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark/light theme');
    toggle.setAttribute('title', 'Toggle theme');
    
    // Add click handler
    toggle.addEventListener('click', () => this.toggleTheme());
    
    // Add keyboard handler
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
    
    // Insert into page
    document.body.appendChild(toggle);
    this.toggleButton = toggle;
    
    // Update icon
    this.updateToggleIcon();
  }

  updateToggleIcon() {
    if (!this.toggleButton) return;
    
    const isDark = this.theme === 'dark';
    this.toggleButton.innerHTML = isDark 
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/></svg>';
  }

  watchSystemTheme() {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('ai-theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  initScrollAnimations() {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ai-revealed');
        }
      });
    }, observerOptions);

    // Observe elements with scroll reveal class
    document.querySelectorAll('.ai-scroll-reveal').forEach(el => {
      observer.observe(el);
    });
  }
}

// Code typing animation
class CodeTypingEffect {
  constructor(element, lines, options = {}) {
    this.element = element;
    this.lines = lines;
    this.options = {
      speed: 50,
      delay: 1000,
      cursor: '|',
      ...options
    };
    this.currentLine = 0;
    this.currentChar = 0;
    this.isDeleting = false;
  }

  start() {
    this.element.innerHTML = '';
    this.type();
  }

  type() {
    const currentText = this.lines[this.currentLine];
    
    if (!this.isDeleting) {
      // Typing
      this.element.innerHTML = currentText.slice(0, this.currentChar + 1) + this.options.cursor;
      this.currentChar++;
      
      if (this.currentChar === currentText.length) {
        // Finished typing current line
        setTimeout(() => {
          this.currentLine = (this.currentLine + 1) % this.lines.length;
          this.currentChar = 0;
          this.isDeleting = true;
          this.type();
        }, this.options.delay);
        return;
      }
    } else {
      // Deleting
      this.element.innerHTML = currentText.slice(0, this.currentChar) + this.options.cursor;
      this.currentChar--;
      
      if (this.currentChar < 0) {
        this.isDeleting = false;
        this.currentChar = 0;
        this.type();
        return;
      }
    }
    
    setTimeout(() => this.type(), this.options.speed);
  }
}

// Research card interactions
class ResearchCardManager {
  constructor() {
    this.initCardAnimations();
  }

  initCardAnimations() {
    const cards = document.querySelectorAll('.ai-research-card, .ai-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', this.onCardHover.bind(this));
      card.addEventListener('mouseleave', this.onCardLeave.bind(this));
    });
  }

  onCardHover(e) {
    const card = e.currentTarget;
    card.style.transform = 'translateY(-4px)';
    card.style.boxShadow = 'var(--shadow-ai)';
  }

  onCardLeave(e) {
    const card = e.currentTarget;
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'var(--shadow-md)';
  }
}

// Progress bar animations
class ProgressAnimator {
  constructor() {
    this.initProgressBars();
  }

  initProgressBars() {
    const progressBars = document.querySelectorAll('.ai-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.ai-progress__bar');
          const width = bar.dataset.width || '75%';
          
          setTimeout(() => {
            bar.style.width = width;
          }, 500);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
  }
}

// Copy to clipboard functionality
class ClipboardManager {
  constructor() {
    this.initCopyButtons();
  }

  initCopyButtons() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre code, .ai-code-block');
    
    codeBlocks.forEach(block => {
      if (block.parentElement.querySelector('.copy-btn')) return; // Already has button
      
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '📋';
      copyBtn.setAttribute('title', 'Copy to clipboard');
      
      copyBtn.addEventListener('click', () => this.copyCode(block, copyBtn));
      
      block.parentElement.style.position = 'relative';
      block.parentElement.appendChild(copyBtn);
    });
  }

  async copyCode(block, button) {
    try {
      const text = block.textContent || block.innerText;
      await navigator.clipboard.writeText(text);
      
      button.innerHTML = '✅';
      button.style.background = 'var(--success)';
      
      setTimeout(() => {
        button.innerHTML = '📋';
        button.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
      button.innerHTML = '❌';
      setTimeout(() => {
        button.innerHTML = '📋';
      }, 2000);
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  new ThemeManager();
  
  // Initialize other components
  new ResearchCardManager();
  new ProgressAnimator();
  new ClipboardManager();
  
  // Initialize typing effect on hero section if present
  const typingElement = document.querySelector('.ai-typing-effect');
  if (typingElement) {
    const lines = [
      'AI for Software Engineering',
      'Large Language Models for Code',
      'Code Generation & Representation',
      'Intelligent Programming Tools'
    ];
    new CodeTypingEffect(typingElement, lines).start();
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add stagger animation classes to cards
  document.querySelectorAll('.ai-research-grid .ai-card').forEach((card, index) => {
    card.classList.add('ai-scroll-reveal');
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// Add CSS for copy button
const copyButtonCSS = `
.copy-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--secondary-bg);
  border: 1px solid var(--border-medium);
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all var(--transition-fast);
  z-index: 10;
}

.copy-btn:hover {
  background: var(--ai-primary);
  color: white;
  transform: scale(1.1);
}
`;

// Inject copy button styles
const style = document.createElement('style');
style.textContent = copyButtonCSS;
document.head.appendChild(style);