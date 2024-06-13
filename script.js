document.addEventListener("DOMContentLoaded", function() {
  var cloud = document.querySelector('.cloud');
  var targetZone = document.querySelector('.target-zone');
  var targetZoneRect = targetZone.getBoundingClientRect();

  // Limiti personalizzati
  var minLeft = targetZoneRect.left;
  var maxLeft = targetZoneRect.left + targetZoneRect.width - cloud.offsetWidth;
  var minTop = targetZoneRect.top;
  var maxTop = targetZoneRect.top + targetZoneRect.height - cloud.offsetHeight;

  function setRandomPosition() {
      var randomLeft = Math.floor(Math.random() * (maxLeft - minLeft - 15)) + minLeft;
      var randomTop = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
      cloud.style.left = randomLeft + "px";
      cloud.style.top = randomTop + "px";
  }

  setRandomPosition(); // Imposta la posizione iniziale

  cloud.addEventListener("animationiteration", function() {
      setRandomPosition(); // Quando l'animazione si ripete, reimposta la posizione casuale
  });
});





 /* barca di ricerca  */
/* document.getElementById('searchInput').addEventListener('input', function() {
    var input = this.value.toLowerCase();
    var items = document.querySelectorAll('#content .search-item');

    items.forEach(function(item) {
      var text = item.textContent;
      var innerHTML = '';

      if (input !== '') {
        var regex = new RegExp(`(${input})`, 'gi'); // Create a regex to match the input
        innerHTML = text.replace(regex, '<mark>$1</mark>'); // Replace the matched text with <mark>
        item.innerHTML = innerHTML;
      } else {
        item.innerHTML = text; // Reset if input is empty
      }
    });
  }); */

/*   document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const searchableDivs = document.querySelectorAll('.search-item');

    searchableDivs.forEach(div => {
        const originalText = div.textContent || div.innerText;
        div.innerHTML = originalText; // Reset div content

        if (searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const newText = originalText.replace(regex, '<span class="highlight">$1</span>');
            div.innerHTML = newText;
        }
    });
}); */

document.getElementById('search').addEventListener('input', function() {
  const searchTerm = this.value.trim().toLowerCase();
  const searchableDivs = document.querySelectorAll('.search-item');
  searchableDivs.forEach(div => {
      const originalText = div.textContent || div.innerText;
      div.innerHTML = originalText; // Reset div content

      if (searchTerm) {
          const regex = new RegExp(`(${searchTerm})`, 'gi');
          let match;
          let matches = 0;
          while ((match = regex.exec(originalText)) !== null) {
              const indicator = document.createElement('span');
              indicator.className = 'highlight-indicator';
              indicator.style.top = `${match.index}px`;
              div.appendChild(indicator);
              matches++;
          }
          if (matches === 0) {
              div.innerHTML = originalText;
          } else {
              const newText = originalText.replace(regex, '<span class="highlight">$1</span>');
              div.innerHTML = newText;
          }
      } else {
          div.innerHTML = originalText;
      }
  });
});


