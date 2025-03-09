<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>James Anderson - AI Researcher & ML Enthusiast</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#6366f1',
secondary: '#4f46e5'
},
borderRadius: {
'none': '0px',
'sm': '4px',
DEFAULT: '8px',
'md': '12px',
'lg': '16px',
'xl': '20px',
'2xl': '24px',
'3xl': '32px',
'full': '9999px',
'button': '8px'
}
}
}
}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet">
<style>
:where([class^="ri-"])::before { content: "\f3c2"; }
.typing-effect::after {
content: "|";
animation: blink 1s infinite;
}
@keyframes blink {
0%, 100% { opacity: 1; }
50% { opacity: 0; }
}
:root {
  --primary-color: #6366f1;
  --secondary-color: #4f46e5;
}
.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
  --border-color: #404040;
}
.light {
  --bg-primary: #ffffff;
  --bg-secondary: #f3f4f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}
</style>
</head>
<body class="min-h-screen transition-colors duration-300">
<nav class="fixed top-0 w-full bg-[var(--bg-primary)]/80 backdrop-blur-md z-50 border-b border-[var(--border-color)]">
<div class="absolute right-4 top-4">
  <button id="themeToggle" class="p-2 rounded-full hover:bg-[var(--bg-secondary)]">
    <i class="ri-sun-line dark:ri-moon-line text-[var(--text-primary)]"></i>
  </button>
</div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<div class="flex items-center">
<a href="#" class="font-['Pacifico'] text-2xl text-primary">Mehedi</a>
</div>
<div class="hidden md:block">
<div class="flex items-center space-x-8">
<a href="#about" class="text-gray-700 hover:text-primary">About</a>
<a href="#projects" class="text-gray-700 hover:text-primary">Projects</a>
<a href="#blog" class="text-gray-700 hover:text-primary">Blog</a>
<a href="#research" class="text-gray-700 hover:text-primary">Research</a>
<a href="#contact" class="text-gray-700 hover:text-primary">Contact</a>
</div>
</div>
</div>
</div>
</nav>
<section id="hero" class="pt-24 pb-16 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div class="text-center">
<img src="https://static.readdy.ai/image/3ab2e2089957a0d4aba682a0cdf8efe4/e65a59645ac433874f4f08a651f913b6.png"
alt="Md. Mehedi Hasan"
class="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg">
<h1 class="text-4xl font-bold text-gray-900 mb-4">Md. Mehedi Hasan</h1>
<p class="typing-effect text-xl text-gray-600 mb-8">AI Researcher | ML Enthusiast | Space & SaaS Innovator</p>
<div class="flex justify-center space-x-6">
<a href="https://www.linkedin.com/in/meetmehedi/" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary">
<i class="ri-linkedin-line ri-xl"></i>
</a>
<a href="https://github.com/meetmehedi" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary">
<i class="ri-github-line ri-xl"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary">
<i class="ri-medium-line ri-xl"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary">
<i class="ri-twitter-x-line ri-xl"></i>
</a>
</div>
</div>
</div>
</section>
<section id="about" class="py-16 bg-[var(--bg-secondary)]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<img src="https://public.readdy.ai/ai/img_res/13d4d4f1bcad57a3604813e40c832b27.jpg"
alt="About Me"
class="rounded-lg shadow-lg">
</div>
<div>
<h2 class="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
<p class="text-gray-600 mb-6">
Hi, I'm Md. Mehedi Hasan. As a designer, researcher, and machine learning enthusiast, I blend creativity with analytical rigor to explore innovative solutions. With a strong foundation in design principles and a commitment to user-centered research, I am passionate about creating meaningful, intuitive experiences.
</p>
<div class="space-y-4">
<h3 class="text-xl font-semibold text-gray-900">Skills</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TensorFlow</span>
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PyTorch</span>
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Django</span>
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
<span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Three.js</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="projects" class="py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/2ea6cbc6d6f2df15551bf23943b97849.jpg"
alt="AstroVision"
class="w-full h-48 object-cover">
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-900 mb-2">AstroVision</h3>
<p class="text-gray-600 mb-4">AI-powered space data explorer utilizing advanced machine learning algorithms for celestial object detection and analysis.</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Python</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">TensorFlow</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">WebGL</span>
</div>
<a href="#" class="text-primary hover:text-secondary font-medium">Learn More →</a>
</div>
</div>
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/11bf5dacbc0dd494671a80f72a553017.jpg"
alt="SaaS AI Assistant"
class="w-full h-48 object-cover">
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-900 mb-2">AI Assistant</h3>
<p class="text-gray-600 mb-4">Advanced AI assistant platform with natural language processing and contextual understanding capabilities.</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Django</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">React</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">GPT-3</span>
</div>
<a href="#" class="text-primary hover:text-secondary font-medium">Learn More →</a>
</div>
</div>
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/a9777a631d16cde1f34e49e80ed72b75.jpg"
alt="RL Project"
class="w-full h-48 object-cover">
<div class="p-6">
<h3 class="text-xl font-semibold text-gray-900 mb-2">RL Framework</h3>
<p class="text-gray-600 mb-4">Open-source reinforcement learning framework for training and deploying AI agents in complex environments.</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">PyTorch</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Ray</span>
<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Docker</span>
</div>
<a href="#" class="text-primary hover:text-secondary font-medium">Learn More →</a>
</div>
</div>
</div>
</div>
</section>
<section id="blog" class="py-16 bg-[var(--bg-secondary)]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/0357569ecd54b215ed900fc1b7f6b812.jpg"
alt="AI Article"
class="w-full h-48 object-cover">
<div class="p-6">
<div class="flex items-center text-sm text-gray-500 mb-2">
<span>March 5, 2025</span>
<span class="mx-2">•</span>
<span>8 min read</span>
</div>
<h3 class="text-xl font-semibold text-gray-900 mb-2">The Future of Reinforcement Learning in Space Exploration</h3>
<p class="text-gray-600 mb-4">Exploring how advanced RL algorithms are revolutionizing autonomous space navigation and decision-making systems.</p>
<a href="#" class="text-primary hover:text-secondary font-medium">Read More →</a>
</div>
</div>
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/e1acc29360fa1184aa4d5a79c20e1760.jpg"
alt="ML Article"
class="w-full h-48 object-cover">
<div class="p-6">
<div class="flex items-center text-sm text-gray-500 mb-2">
<span>February 28, 2025</span>
<span class="mx-2">•</span>
<span>6 min read</span>
</div>
<h3 class="text-xl font-semibold text-gray-900 mb-2">Building Scalable ML Systems: Best Practices</h3>
<p class="text-gray-600 mb-4">A comprehensive guide to architecting and deploying production-ready machine learning systems.</p>
<a href="#" class="text-primary hover:text-secondary font-medium">Read More →</a>
</div>
</div>
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
<img src="https://public.readdy.ai/ai/img_res/1399f7f10dd73c8b7f4ff0ed03204700.jpg"
alt="SaaS Article"
class="w-full h-48 object-cover">
<div class="p-6">
<div class="flex items-center text-sm text-gray-500 mb-2">
<span>February 20, 2025</span>
<span class="mx-2">•</span>
<span>5 min read</span>
</div>
<h3 class="text-xl font-semibold text-gray-900 mb-2">The Evolution of AI-Powered SaaS Solutions</h3>
<p class="text-gray-600 mb-4">Insights into how artificial intelligence is transforming the SaaS industry and business operations.</p>
<a href="#" class="text-primary hover:text-secondary font-medium">Read More →</a>
</div>
</div>
</div>
</div>
</section>
<section id="research" class="py-16">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Research & Publications</h2>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<div class="bg-white p-8 rounded-lg shadow-lg mb-8">
<h3 class="text-xl font-semibold text-gray-900 mb-4">Academic Background</h3>
<div class="space-y-4">
<div>
<p class="text-gray-900 font-medium">B.Sc. in Computer Science & Engineering</p>
<p class="text-gray-600">Dhaka International University</p>
</div>
</div>
</div>
<div class="bg-white p-8 rounded-lg shadow-lg">
<h3 class="text-xl font-semibold text-gray-900 mb-4">Research Metrics</h3>
<div class="grid grid-cols-2 gap-4">
<div class="text-center">
<p class="text-3xl font-bold text-primary">25+</p>
<p class="text-gray-600">Publications</p>
</div>
<div class="text-center">
<p class="text-3xl font-bold text-primary">1000+</p>
<p class="text-gray-600">Citations</p>
</div>
<div class="text-center">
<p class="text-3xl font-bold text-primary">15</p>
<p class="text-gray-600">Patents</p>
</div>
<div class="text-center">
<p class="text-3xl font-bold text-primary">8</p>
<p class="text-gray-600">Awards</p>
</div>
</div>
</div>
</div>
<div class="space-y-6">
<div class="bg-white p-6 rounded-lg shadow-lg">
<p class="text-sm text-gray-500 mb-2">Latest Publication - 2025</p>
<h3 class="text-xl font-semibold text-gray-900 mb-2">Advanced Reinforcement Learning Algorithms for Autonomous Space Navigation</h3>
<p class="text-gray-600 mb-4">Published in Nature Machine Intelligence</p>
<a href="#" class="text-primary hover:text-secondary font-medium">View Paper →</a>
</div>
<div class="bg-white p-6 rounded-lg shadow-lg">
<p class="text-sm text-gray-500 mb-2">2024</p>
<h3 class="text-xl font-semibold text-gray-900 mb-2">Optimizing Large Language Models for Space Communication Systems</h3>
<p class="text-gray-600 mb-4">Published in NeurIPS Conference Proceedings</p>
<a href="#" class="text-primary hover:text-secondary font-medium">View Paper →</a>
</div>
<div class="bg-white p-6 rounded-lg shadow-lg">
<p class="text-sm text-gray-500 mb-2">2024</p>
<h3 class="text-xl font-semibold text-gray-900 mb-2">Quantum-Inspired Neural Networks for Spacecraft Trajectory Optimization</h3>
<p class="text-gray-600 mb-4">Published in Quantum Machine Intelligence Journal</p>
<a href="#" class="text-primary hover:text-secondary font-medium">View Paper →</a>
</div>
</div>
</div>
</div>
</section>
<section id="contact" class="py-16 bg-[var(--bg-secondary)]">
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
<div class="bg-[var(--bg-primary)] rounded-lg shadow-lg p-8">
<form id="contactForm" class="space-y-6">
<div>
<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
<input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
</div>
<div>
<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
</div>
<div>
<label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
<textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-button focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required></textarea>
</div>
<button type="submit" class="w-full bg-primary text-white py-2 px-4 rounded-button hover:bg-secondary transition-colors duration-200">Send Message</button>
</form>
</div>
</div>
</section>
<footer class="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-12">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 class="font-['Pacifico'] text-2xl mb-4">Mehedi</h3>
<p class="text-gray-400">AI Researcher & ML Enthusiast</p>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Quick Links</h3>
<ul class="space-y-2">
<li><a href="#about" class="text-gray-400 hover:text-white">About</a></li>
<li><a href="#projects" class="text-gray-400 hover:text-white">Projects</a></li>
<li><a href="#blog" class="text-gray-400 hover:text-white">Blog</a></li>
<li><a href="#research" class="text-gray-400 hover:text-white">Research</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Connect</h3>
<div class="flex space-x-4">
<a href="https://www.linkedin.com/in/meetmehedi/" class="text-gray-400 hover:text-white">
<i class="ri-linkedin-line ri-xl"></i>
</a>
<a href="https://github.com/meetmehedi" class="text-gray-400 hover:text-white">
<i class="ri-github-line ri-xl"></i>
</a>
<a href="#" class="text-gray-400 hover:text-white">
<i class="ri-medium-line ri-xl"></i>
</a>
<a href="#" class="text-gray-400 hover:text-white">
<i class="ri-twitter-x-line ri-xl"></i>
</a>
</div>
</div>
</div>
<div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
<p>&copy; 2025 Md. Mehedi Hasan. All rights reserved.</p>
</div>
</div>
</footer>
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Default to light theme
    htmlElement.classList.add('light');
    updateThemeIcon('light');
  }
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.classList.remove(currentTheme);
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
  });
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  }
const text = "AI Researcher | ML Enthusiast | Space & SaaS Innovator";
const typingElement = document.querySelector('.typing-effect');
let i = 0;
function typeWriter() {
if (i < text.length) {
typingElement.textContent = text.substring(0, i + 1);
i++;
setTimeout(typeWriter, 100);
}
}
typeWriter();
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(contactForm);
const data = Object.fromEntries(formData);
const notification = document.createElement('div');
notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300';
notification.textContent = 'Message sent successfully!';
document.body.appendChild(notification);
setTimeout(() => {
notification.remove();
}, 3000);
contactForm.reset();
});
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
targetElement.scrollIntoView({ behavior: 'smooth' });
});
});
});
</script>
</body>
</html>
