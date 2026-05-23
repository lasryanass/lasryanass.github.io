function setLang(lang) {
  // Hide both, show selected
  document.getElementById('content-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('content-fr').style.display = lang === 'fr' ? 'block' : 'none';
  
  // Update button states
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  
  // Update page language attribute for accessibility/SEO
  document.documentElement.lang = lang;
}

// Initialize language based on browser preference or default to EN
document.addEventListener('DOMContentLoaded', () => {
  const browserLang = navigator.language || navigator.userLanguage;
  setLang(browserLang.startsWith('fr') ? 'fr' : 'en');
});