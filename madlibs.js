function generateMadlib() {
  
  
  var story = "Happy New Year! Hope that your winter break was ADJECTIVE.  I VERB all winter break! I spent all winter at PLACE. My break was pretty AdJECTIVE, I really hope you had a better winter break than me.";
  

  var inputValue = document.getElementById("adjective").value;
  story = story.replace("ADJECTIVE", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  inputValue = document.getElementById("place").value;
  story = story.replace("PLACE", inputValue);
  
  inputValue = document.getElementById("adjective").value;
  story = story.replace("ADJECTIVE"), inputValue);
  
  document.getElementById("result").innerHTML = story;
}