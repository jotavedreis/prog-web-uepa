(function () {
  function loadVLibras() {
    const script = document.createElement('script');

    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = function () {
      new window.VLibras.Widget({
        rootPath: 'https://vlibras.gov.br/app',
        personalization: 'https://vlibras.gov.br/config/default_logo.json',
        avatar: 'random',
        position: 'L'
      });
    };

    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadVLibras);
  } else {
    loadVLibras();
  }
})();