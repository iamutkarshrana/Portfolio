// Tailwind Config
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    'manrope': ['Manrope', 'sans-serif'],
                    'inter': ['Inter', 'sans-serif'],
                },
                colors: {
                    'primary': '#ff4300',
                    'primary-light': '#ffe0a4',
                    'bg-dark': '#111',
                    'bg-light': '#333',
                }
            }
        }
    };
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    
    // ===== THEME SWITCHER =====
    const profileSlider = document.querySelector('.profile-slider');
    let hoverTimer;
    
    // Multiple profile images array (you can add your actual image paths)
    const profileImages = [
        './Utkarsh Rana.png'
    ];
    let currentImageIndex = 0;
    
    // Hover to change theme after 3-4 seconds
    profileSlider.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => {
            document.body.classList.add('theme-green');
        }, 3000);
    });
    
    profileSlider.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
    });
    
    // Click to cycle through images
    profileSlider.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        document.getElementById('profile-img').src = profileImages[currentImageIndex];
        
        // Toggle theme on click
        document.body.classList.toggle('theme-green');
    });
    
    
    // ===== TAB SWITCHING =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const workContent = document.getElementById('work-content');
    const fbtab = document.querySelectorAll('.ftab-btn');
    const frontendtab = document.getElementById('fsvg-logos');
    const backendtab = document.getElementById('bsvg-logos');
    const educationContent = document.getElementById('education-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show/hide content based on tab
            const tab = button.getAttribute('data-tab');
            if (tab === 'work') {
                workContent.classList.remove('hidden');
                educationContent.classList.add('hidden');
            } else {
                workContent.classList.add('hidden');
                educationContent.classList.remove('hidden');
            }
        });
    });

    fbtab.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            fbtab.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show/hide content based on tab
            const tab = button.getAttribute('data-tab');
            if (tab === 'frontend') {
                frontendtab.classList.remove('hidden');
                backendtab.classList.add('hidden');
            } else {
                frontendtab.classList.add('hidden');
                backendtab.classList.remove('hidden');
            }
        });
    });
    
    
    // ===== GSAP ANIMATIONS =====
    
    // Profile Image Animation
    gsap.to('.profile-slider', {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2
    });
    
    // Hero Title Animation
    gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.4
    });
    
    // Hero Subtitle Animation
    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6
    });
    
    // Hero Description Animation
    gsap.to('.hero-desc', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.8,
        stagger: 0.1
    });
    
    // Hero Links Animation
    gsap.to('.hero-links', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 1
    });
    
    // Work Items Animation
    gsap.utils.toArray('.work-item, .education-item').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 1.2 + (index * 0.1)
        });
    });
    
    // Tech Stack Animation
    gsap.utils.toArray('.fsvg-logos svg, .bsvg-logos svg').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 1.2 + (index * 0.1)
        });
    });

    // Projects Animation (Scroll Triggered)
    gsap.utils.toArray('.project-item').forEach((item, index) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.15
        });
    });
    
    // Blog Items Animation (Scroll Triggered)
    gsap.utils.toArray('.blog-item').forEach((item, index) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
    
    
    // ===== SMOOTH SCROLL FOR NAV LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    
    // ===== LOADING STATE =====
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
    
});


// Game 
/* =========================
   PREVENT PAGE SCROLL
========================= */
window.addEventListener("keydown", e => {
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) {
    e.preventDefault();
  }
});

/* =========================
   CANVAS SETUP
========================= */
const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

const nextCanvas = document.getElementById("next");
const nextCtx = nextCanvas.getContext("2d");

const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlayText");
const playBtn = document.getElementById("playBtn");
const scoreEl = document.getElementById("score");

const COLS = 12;
const ROWS = 20;
const BLOCK = 30;

canvas.width = COLS * BLOCK;
canvas.height = ROWS * BLOCK;

/* =========================
   TETROMINOES
========================= */
const SHAPES = {
  I: [[1,1,1,1]],
  J: [[1,0,0],[1,1,1]],
  L: [[0,0,1],[1,1,1]],
  O: [[1,1],[1,1]],
  S: [[0,1,1],[1,1,0]],
  T: [[0,1,0],[1,1,1]],
  Z: [[1,1,0],[0,1,1]]
};

const COLORS = {
  I: "#00f0f0",
  J: "#0000f0",
  L: "#f0a000",
  O: "#f0f000",
  S: "#00f000",
  T: "#a000f0",
  Z: "#f00000"
};

/* =========================
   GAME STATE
========================= */
let board;
let current;
let next;
let score = 0;
let gameOver = true;
let running = false;

/* =========================
   HELPERS
========================= */
function createPiece() {
  const keys = Object.keys(SHAPES);
  const type = keys[Math.floor(Math.random() * keys.length)];
  return {
    shape: SHAPES[type],
    color: COLORS[type],
    x: Math.floor(COLS / 2) - 1,
    y: 0
  };
}

function drawBlock(x, y, color, c = ctx) {
  c.fillStyle = color;
  c.fillRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
  c.strokeStyle = "#111";
  c.strokeRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.forEach((row, y) =>
    row.forEach((cell, x) => cell && drawBlock(x, y, cell))
  );
}

function drawPiece(piece) {
  piece.shape.forEach((row, y) =>
    row.forEach((v, x) => v && drawBlock(piece.x + x, piece.y + y, piece.color))
  );
}

function collide(piece) {
  return piece.shape.some((row, y) =>
    row.some((v, x) => {
      if (!v) return false;
      const nx = piece.x + x;
      const ny = piece.y + y;
      return nx < 0 || nx >= COLS || ny >= ROWS || board[ny]?.[nx];
    })
  );
}

function merge() {
  current.shape.forEach((row, y) =>
    row.forEach((v, x) => {
      if (v) board[current.y + y][current.x + x] = current.color;
    })
  );
}

function clearLines() {
  let cleared = 0;
  for (let y = ROWS - 1; y >= 0; y--) {
    if (board[y].every(Boolean)) {
      board.splice(y, 1);
      board.unshift(Array(COLS).fill(0));
      cleared++;
      y++;
    }
  }
  if (cleared) {
    score += cleared * 100;
    scoreEl.textContent = score;
  }
}

function rotate(piece) {
  const rotated = piece.shape[0].map((_, i) =>
    piece.shape.map(row => row[i]).reverse()
  );
  const prev = piece.shape;
  piece.shape = rotated;
  if (collide(piece)) piece.shape = prev;
}

function drawNext() {
  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
  next.shape.forEach((row, y) =>
    row.forEach((v, x) => v && drawBlock(x, y, next.color, nextCtx))
  );
}

/* =========================
   GAME LOOP
========================= */
let dropCounter = 0;
let lastTime = 0;

function update(time = 0) {
  if (!running) return;

  const delta = time - lastTime;
  lastTime = time;
  dropCounter += delta;

  if (dropCounter > 700) {
    current.y++;
    if (collide(current)) {
      current.y--;
      merge();
      clearLines();

      current = next;
      current.y = 0;
      current.x = Math.floor(COLS / 2) - 1;

      if (collide(current)) {
        endGame();
        return;
      }

      next = createPiece();
      drawNext();
    }
    dropCounter = 0;
  }

  drawBoard();
  drawPiece(current);
  requestAnimationFrame(update);
}

/* =========================
   START / END
========================= */
function startGame() {
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  current = createPiece();
  next = createPiece();
  score = 0;
  scoreEl.textContent = 0;

  overlay.classList.add("hidden");
  running = true;
  gameOver = false;
  lastTime = 0;

  drawNext();
  update();
}

function endGame() {
  running = false;
  gameOver = true;
  overlayText.textContent = "GAME OVER";
  playBtn.textContent = "▶ Play Again";
  overlay.classList.remove("hidden");
}

/* =========================
   CONTROLS
========================= */
document.addEventListener("keydown", e => {
  if (!running) return;

  if (e.key === "ArrowLeft") {
    current.x--;
    if (collide(current)) current.x++;
  }
  if (e.key === "ArrowRight") {
    current.x++;
    if (collide(current)) current.x--;
  }
  if (e.key === "ArrowDown") {
    current.y++;
    if (collide(current)) current.y--;
  }
  if (e.key === "ArrowUp") rotate(current);
});

/* =========================
   INIT
========================= */
playBtn.addEventListener("click", startGame);
drawBoard();
