function highlight() {
  var text = document.querySelector('textarea').val();

  var sentences = text.split('\.?!');
  var html = '';
  sentences.forEach(function(sentence) {
    sentence = sentence.trim();
    if (!sentence) {
      return;
    }
    var className = 'longest';
    var count = sentence.split(" ").length;
    if (count < 3) {
      className = 'shortest';
    } else if (count < 5) {
      className = 'short';
    } else if (count == 5) {
      className = 'medium';           
    } else if (count < 20) {
      className = 'long';
    }
    html += '<span class="'+className+'">'+sentence+'. </span>';
  });

  docment.getElementById('#output').innerHTML(html);
    
}

highlight();
document.querySelector('textarea').on('keyup', highlight);
