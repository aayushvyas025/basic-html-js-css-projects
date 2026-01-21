document.addEventListener("DOMContentLoaded", () => {
  console.log("All DOM Content Loaded Successfully !!!");

  const typingText = document.querySelector(".typing-text");
  const typingField = document.querySelector(".typing-field");
  const givenTime = document.querySelector(".time");
  const userMistake = document.querySelector(".user-mistake");
  const userWPM = document.querySelector(".user-wordsPerMinutes");
  const userCPM = document.querySelector(".user-countPerMinutes");
  const resetButton = document.querySelector("#resetBtn");
  let timer;
  let maxTime = 60;
  let timeLeft = maxTime;
  let charIndex = 0;
  let mistakes = 0;
  let isTyping = false;

  function loadParagraph() {
    const paragraphs = [
      "Programming is a skill that improves with consistent practice and patience. Writing code daily helps in understanding logic, syntax, and problem-solving techniques more effectively.",

      "Learning to code is not just about memorizing syntax, but about thinking logically and breaking down complex problems into smaller, manageable steps.",

      "Every bug you encounter while coding teaches you something new. Debugging improves your understanding of how the program actually works behind the scenes.",

      "Clean and readable code is always better than clever but confusing code. A good programmer writes code that others can easily understand and maintain.",

      "Consistency matters more than motivation in programming. Even practicing for one hour daily can lead to significant improvement over time.",

      "Programming languages provide tools and structures that allow developers to instruct computers to perform specific tasks efficiently and accurately.",

      "Mistakes are a natural part of learning programming. Each error helps you grow and strengthens your problem-solving ability.",

      "Writing simple code first and then optimizing it later is a smart approach. Premature optimization often leads to unnecessary complexity.",

      "Understanding data structures and algorithms is essential for writing efficient and scalable software applications.",

      "Software development requires patience, logical thinking, and the ability to learn continuously as technologies evolve over time.",

      "A good programmer focuses on writing code that works correctly before worrying about performance or optimization.",

      "Programming teaches you how to think critically and approach problems with a structured and logical mindset.",

      "Version control systems like Git help developers manage code changes and collaborate effectively with team members.",

      "Learning programming is a journey, not a race. Everyone progresses at their own pace, and comparison only slows growth.",

      "Strong fundamentals in programming make it easier to learn new languages and adapt to different technologies in the future.",

      "Writing programs regularly improves not only coding skills but also confidence in handling real-world technical challenges.",
    ];
    const randomIndex = Math.floor(Math.random() * paragraphs.length);

    typingText.innerHTML = "";

    for (let chars of paragraphs[randomIndex]) {
      typingText.innerHTML += `<span>${chars}</span>`;
    }

    typingText.querySelectorAll("span")[0].classList.add("active-words");
  }

  function initiateTyping() {
   const characters = typingText.querySelectorAll('span'); 
   const typedChar = typingField.value.charAt(charIndex); 

   if(charIndex < characters.length && timeLeft > 0) {
    if(characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add('correct'); 
        console.log('correct');

    }else {
        characters[charIndex].classList.add('incorrect');
        console.log('incorrect');
    } 
    charIndex++; 
   }
  } 


  typingField.addEventListener("input", initiateTyping)

  loadParagraph();
});
