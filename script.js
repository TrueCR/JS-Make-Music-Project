// function music() {
    //var textAreaInput=document.getElementById("TextBox").value;
    //var output=document.querySelector("p");
   // var result=document.getElementById("TextBox").value.match(/[^.!?]+[.!?]+/g);
    //for (i = 0; i < result.length; i++ ) {
        //if (i <= 2) 
    //}
//} 

function highlight() {
  var txt = document.querySelector('textarea').val();

  var sentences = txt.split('\.?!');
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
    innerHTML += '<span class="'+className+'">'+sentence+'. </span>';
  });

  docment.getElementById('#output').innerHTML(html);
    
}

highlight();
document.querySelector('textarea').on('keyup', highlight);
