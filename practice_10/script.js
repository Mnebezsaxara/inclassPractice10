// Task 1:
const paragraph = document.getElementById("text");
const words = paragraph.innerHTML.split(" ");
paragraph.innerHTML = words.map(word => {
  return word.length > 8 ? `<span style="background-color: yellow;">${word}</span>` : word;
}).join(" ");

// Task 2:
const sourceLink = document.createElement("a");
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.innerText = "Source of the text";
paragraph.insertAdjacentElement('afterend', sourceLink);

// Task 3:
const sentences = paragraph.innerHTML.split(". ");
paragraph.innerHTML = sentences.join(".<br><br>");

// Task 4:
const wordCount = words.length;
const wordCountDiv = document.getElementById("word-count");
wordCountDiv.innerText = `Word count: ${wordCount}`;

// Task 5: 
paragraph.innerHTML = paragraph.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/!/g, '😲');
