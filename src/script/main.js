const menuElement = document.getElementById("menu");
const contentElement = document.getElementById("content");
const inputElement = document.getElementById("input");

const exibirMenu = () => {
  menuElement.innerHTML = `
        <div align="center">
          <a href="https://git.io/typing-svg">
          <img class="img-large" src="https://readme-typing-svg.herokuapp.com?font=Ubuntu&weight=500&size=40&pause=1000&color=15F72A&center=true&vCenter=true&width=735&height=80&lines=Hi+there!+👋;You+can+call+me+João+Castro;Welcome+to+my+Dinamic+Resume+😁" alt="Large IMG" />
          <img class="img-small" src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=40&pause=1000&color=15F72A&center=true&vCenter=true&width=200&lines=Hi+there!+%F0%9F%91%8B;You+can+call+me;Jo%C3%A3o+Castro;Welcome+to+my;Dinamic+Resume+%F0%9F%98%81" alt="Typing SVG" />
          </a>
        </div>
        <br>      
        <span class="menu-item" data-escolha="0">Choose an option below:
        <br>
        <br>
        <br>
        <span class="menu-item" data-escolha="1">1. About;
        <br><br>
        <span class="menu-item" data-escolha="2">2. Better Projects;
        <br><br>
        <span class="menu-item" data-escolha="3">3. Courses;
        <br><br>
        <span class="menu-item" data-escolha="4">4. Education;
        <br><br>
        <span class="menu-item" data-escolha="5">5. Languages;
        <br><br>
        <span class="menu-item" data-escolha="6">6. Skills;
        <br><br>
        <span class="menu-item" data-escolha="7">7. Contact;
        <br><br>
        <span class="menu-item" data-escolha="8">8. Exit;<br><br>`;

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const escolha = event.target.getAttribute("data-escolha");
      processarEscolha(escolha);
    });
  });
};

const processarEscolha = (escolha) => {
  escolha = escolha.trim();
  contentElement.innerHTML = ""; // Limpa o conteúdo anterior

  if (escolha === "1" || escolha.toLowerCase() === "about") {
    contentElement.innerHTML = `ABOUT: <br> <br>
      <p style="text-align: justify">
      I am a versatile professional passionate about the integration of technology, design, and communication. With a solid background in Audiovisual Production from Centro Universitário Senac and ongoing development in Systems Development, I have experience with tools such as HTML, CSS, and JavaScript. I recently completed a Career Accelerator course focused on Power BI, expanding my skills in data analysis and visualization.
      <br>
      <br>
      I am seeking opportunities that allow me to expand my horizons and apply my skills in systems development and data analysis creatively and innovatively. My portfolio reflects my dedication and passion for each area I work in, especially in technological solutions and data analysis. I am eager to collaborate on challenging projects and contribute with my experience and creativity.
      </p><br><br>`;
  } else if (escolha === "2" || escolha.toLowerCase() === "projects") {
    contentElement.innerHTML = `
    BELOW ARE SOME OF MY BEST PROJECTS:<br><br>
    <a href="https://github.com/joaoacastro/RockPaperScissorsLizardSpockGame" target="_blank">Rock Paper Scissors Lizard Spock</a> <a href="https://joaoacastro.github.io/RockPaperScissorsLizardSpockGame/" target="_blank">(Online)</a><br>
    Rock-paper-scissors-lizard-Spock is an expansion of the classic rock-paper-scissors selection method. It operates on the same basic principle but includes two additional weapons: the lizard (formed by shaping the hand like a puppet's mouth) and Spock (formed by the Vulcan salute from Star Trek). This reduces the chances of a round ending in a tie. The game was invented by Sam Kass and Karen Bryla as "Rock Paper Scissors Lizard Spock.
    <br>
    <br>
    <a href="https://github.com/joaoacastro/popflix" target="_blank">Popflix</a> <a href="https://popflix.vercel.app/" target="_blank">(Online)</a><br>
    The aim of the project is to create a page similar to Netflix, but cataloging some of my favorite videos, separated by groups, and when finished, having the ability to modify, delete, or add videos to the catalog. In other words, allowing the user to create their own "Netflix" with their favorite videos. Developed using React.js.
    <br>
    <br>
    <a href="https://github.com/joaoacastro/projeto-react-costs" target="_blank">React Costs</a> <a href="https://projeto-react-costs.vercel.app/" target="_blank">(Online)</a><br>
    The React Costs project is an application developed in React that simulates project cost management. It allows users to create and manage projects, define budgets, and add or remove associated services. The focus of the application is on financial organization and expense control, featuring an intuitive and easy-to-navigate interface.
    <br>
    <br>
    <a href="https://github.com/joaoacastro/MultiversoSpiderMan" target="_blank">Multiverso Spider-Man</a> <a href="" target="_blank"></a><br>
    This project is an interactive simulation of the Spider-Man multiverse, allowing users to explore different versions of this iconic comic book character.
    <br>
    <br>
    <br>
    For other projects, please check my <a href="https://github.com/joaoacastro" target="_blank">GitHub</a>
    <br>
    <br>
    `;
  } else if (escolha === "3" || escolha.toLowerCase() === "courses") {
    contentElement.innerHTML = `
    COURSES:<br><br>
    Bootcamp Ri Happy Group - Front End from Scratch (75h)<br>
    DIO Plataform | 2024 | Completed<br><br>


    Career Accelerator Immersion with Microsoft Power BI (10h)<br>
    Empowerdata | Prof. Lorennzo Rodrigues and Prof. Julia Melo | 2024 | Completed<br><br>

    Complete Modern Web Course (97.5h)<br>
    Udemy | Cod3r Online Courses - Leonardo Moura Leitao | 2024 | Completed<br><br>

    3D Modeling in Fusion 360 Autodesk (12h<br>
    Udemy | Professor Audrey Novelli Gonçalves | 2024 | Completed<br><br>

    Programming Language with Focus on React (20h)<br>
    JavaScript Programming with Focus on CSS (20h)<br>
    Alura Online Courses - Quarentena Dev | 2020 | Completed<br><br>

    Full Stack Developer Bootcamp (132h)<br>
    Institute of Information Management and Technology - IGTI | 2020 | Completed<br><br>`;
  } else if (escolha === "4" || escolha.toLowerCase() === "education") {
    contentElement.innerHTML = `
    EDUCATION:<br><br>
    Bachelor's Degree in Audiovisual Production<br>
    Centro Universitário Senac (Completed)<br>
    <br>
    Bachelor's Degree in Systems Analysis and Development<br>
    Faculdade Anhembi Morumbi (1st Semester)<br><br>`;
  } else if (escolha === "5" || escolha.toLowerCase() === "languages") {
    contentElement.innerHTML =`
      "LANGUAGES:<br><br>
      - Portuguese: Native<br>
      - English: Intermediate<br>
      - Spanish: Basic<br><br>
      `;
  } else if (escolha === "6" || escolha.toLowerCase() === "skills") {
    contentElement.innerHTML = `
    SKILLS:<br><br>
    HTML....................Intermediate<br>
    CSS.....................Intermediate<br>
    JavaScript..............Intermediate<br>
    React...................Basic<br>
    Node....................Basic<br><br>

    Excel...................Intermediate<br>
    Power Bi................Intermediate<br>
    Pacote Office...........Advanced<br>
    Adobe Photoshop.........Intermediate<br>
    Adobe Premiere..........Intermediate<br>
    Adobe Lightroom.........Intermediate<br>
    Adobe Illustrator.......Intermediate<br>
    Adobe After Effects.....Basic<br>
    Instagram Ads...........Basic<br>
    TikTok Ads..............Basic<br><br>

    Autodesk Fusion 360.....Intermediate<br>
    Autodesk Maya...........Intermediate<br>
    Blender.................Intermediate<br>
    Creality Print..........Advanced<br>
    Ultimaker Cura..........Intermediate<br>
    OBS Studio..............Advanced<br><br>`;
  } else if (escolha === "7" || escolha.toLowerCase() === "contact") {
    contentElement.innerHTML = `
                CONTACT:<br><br>
                JOÃO ANTÔNIO CUCHERA DE CASTRO | Front End Developer 
                <br>
                <br>
                <a href="mailto:joaoaccastro@gmail.com"  target="_blank" style="color:#00ff00; text-decoration: none;">  ⇝ E-mail</a>
                <br>
                <br>
                <a href="https://wa.me/5511972788335?text=Hey there, I got your contact from the link on your dynamic resume! 🚀"  target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ WhatsApp</a>
                <br>
                <br>
                <a href="https://www.linkedin.com/in/joao-ac-castro/" target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ LinkedIn</a>
                <br>
                <br>
                <a href="https://github.com/joaoacastro" target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ Github</a>
                <br>
                <br>
                `;
  } else if (escolha === "8" || escolha.toLowerCase() === "exit") {
    contentElement.innerHTML =
      `Leaving the program, thanks for the visit..
      <br><br>
      To return to the program, please refresh the page.<br>`;

    inputElement.disabled = true; // Desabilita a entrada
    return;
  } else if (escolha === "0" || escolha.toLowerCase() === "easter egg") {
    contentElement.innerHTML = `

                `;
  } else {
    alert("Opção inválida. Tente novamente!");
  }
};

// Exibir o menu no início
exibirMenu();

// Lidar com a entrada do usuário
inputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const escolha = inputElement.value;
    inputElement.value = ""; // Limpa o campo de entrada
    processarEscolha(escolha);
  }
});
