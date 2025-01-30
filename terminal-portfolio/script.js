const input = document.querySelector('.input');
const output = document.querySelector('.output');

const commands = {
  help: `Available commands: <br>
  - about: Learn more about me. <br>
  - services: See what I offer. <br>
  - projects: View my projects. <br>
  - social: Find me on social media. <br>
  - clear: Clear the terminal. <br>
  - exit: Return to the homepage.`,

  about: `lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit`,

  services: `I offer:<br>
  - Web Development using Laravel<br>
  - API Integration<br>
  - Cloud Server Management<br>
  - Technical Consulting<br>
  - Project Management<br>
  - Database Management`,

  projects: `My Projects:<br>
  - Project 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
  - Project 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
  - Project 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
  - Project 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

  social: `Find me on: <br>
  - GitHub: <a href="https://github.com/username" target="_blank">github.com/username</a><br>
  - LinkedIn: <a href="https://www.linkedin.com/in/username/" target="_blank">linkedin.com</a><br>
  - X: <a href="https://x.com/username" target="_blank">x.com</a>`,

  exit: 'Goodbye! 👋',
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    input.value = '';

    if (command === 'clear') {
      output.innerHTML = '';
      return;
    }

    if (command === 'exit') {
      window.location.href = '../index.html';
      return;
    }

    const response = commands[command] || `Command not found: ${command}. Type <span class="highlight">help</span> for a list of commands.`;
    output.innerHTML += `<p class="command">adam@portfolio:~$ ${command}</p><p class="output">${response}</p>`;
    output.scrollTop = output.scrollHeight;
  }
});