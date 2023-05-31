chrome.devtools.panels.create("Minha Aba", "", "panel.html", function(panel) {
  panel.onShown.addListener(function(window) {
    var environments = [
      { name: 'Dev', url: 'http://dev' },
      { name: 'Docker', url: 'http://docker' },
      { name: 'Homol AWS', url: 'http://homolaws' },
      { name: 'Piloto', url: 'http://piloto' },
      { name: 'Blue', url: 'http://blue' },
      { name: 'Green', url: 'http://green' }
    ];

    var paths = [
      { name: 'Residencial', path: '/resid' },
      { name: 'Automóvel', path: '/auto' }
    ];

    var environmentSelect = document.createElement('select');
    var pathSelect = document.createElement('select');
    var sendButton = document.createElement('button');
    sendButton.textContent = 'Enviar';

    environments.forEach(function(env) {
      var option = document.createElement('option');
      option.value = env.url;
      option.textContent = env.name;
      environmentSelect.appendChild(option);
    });

    paths.forEach(function(path) {
      var option = document.createElement('option');
      option.value = path.path;
      option.textContent = path.name;
      pathSelect.appendChild(option);
    });

    sendButton.addEventListener('click', function() {
      var environmentUrl = environmentSelect.value;
      var pathValue = pathSelect.value;
      var url = environmentUrl + pathValue;
      console.log('window.location =', url);
    });

    window.document.body.appendChild(environmentSelect);
    window.document.body.appendChild(pathSelect);
    window.document.body.appendChild(sendButton);
  });
});
