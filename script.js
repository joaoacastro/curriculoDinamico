const menuElement = document.getElementById("menu");
const contentElement = document.getElementById("content");
const inputElement = document.getElementById("input");

const exibirMenu = () => {
  menuElement.innerHTML = `
Menu:<br>
        1. Sobre;<br>
        2. Cursos;<br>
        3. Formação;<br>
        4. Idiomas;<br>
        5. Skills;<br>
        6. Contato;<br>
        7. Sair;<br><br>`;
};

const processarEscolha = (escolha) => {
  escolha = escolha.trim();
  contentElement.innerHTML = ""; // Limpa o conteúdo anterior

  if (escolha === "1" || escolha.toLowerCase() === "sobre") {
    contentElement.innerHTML =
      `SOBRE: <br> <br>
      <p style="text-align: justify">
      Sou um profissional versátil e apaixonado pela integração entre tecnologia, design e comunicação. Com uma base sólida em Produção Audiovisual pelo Centro Universitário Senac e em constante aprimoramento na área de Desenvolvimento de Sistemas, tenho experiência em ferramentas como HTML, CSS, JavaScript, e recentemente concluí um curso de Acelerador de Carreira com foco em Power BI, ampliando minhas habilidades em análise e visualização de dados. Estou em busca de oportunidades que me permitam expandir meus horizontes e aplicar minhas habilidades em desenvolvimento de sistemas e análise de dados de forma criativa e inovadora. Meu portfólio reflete minha dedicação e paixão por cada área em que atuo, especialmente em soluções tecnológicas e análise de dados. Estou entusiasmado para colaborar em projetos desafiadores e contribuir com minha experiência e criatividade.
      </p><br><br>`;
  } else if (escolha === "2" || escolha.toLowerCase() === "cursos") {
    contentElement.innerHTML = `
    CURSOS:<br><br>
    Imersão Acelerador de Carreira com Microsoft Power BI (10h)<br>
    Empowerdata | Profº. Lorennzo Rodrigues e Profª. Julia Melo | 2024)<br><br>

    Curso Web Moderno Completo (97,5h)<br>
    Udemy | Cod3r Cursos Online - Leonardo Moura Leitao | 2024 | Concluído<br><br>

    Modelagem 3D no Fusion 360 Autodesk (12h)<br>
    Udemy | Professor Audrey Novelli Gonçalves | 2024 | Concluído<br><br>

    Linguagem de programação com foco em React (20h)<br>
    Programação em linguagem JavaScript e com foco em CSS (20h)<br>
    Alura Cursos Online - Quarentena Dev | 2020 | Concluído<br><br>

    Bootcamp Desenvolvedor Full Stack (132h)<br>
    Instituto de Gestão e Tecnologia da Informação - IGTI | 2020 | Concluído<br><br>`;
  } else if (escolha === "3" || escolha.toLowerCase() === "formação") {
    contentElement.innerHTML = `
    FORMAÇÃO:<br><br>
    Graduação em Produção Audiovisual<br>Centro Universitário Senac (Concluído)<br>
    <br>
    Graduação Análise e Desenvolvimento de Sistemas<br>Faculdade Anhembi Morumbi (1º Semestre)<br><br>`;
  } else if (escolha === "4" || escolha.toLowerCase() === "idiomas") {
    contentElement.innerHTML =
      "IDIOMAS<br><br>- Inglês: Intermediário<br>- Espanhol: Básico<br><br>";
  } else if (escolha === "5" || escolha.toLowerCase() === "skills") {
    contentElement.innerHTML = `
    SKILLS:<br><br>
    Excel...................Intermediário<br>
    HTML....................Intermediário<br>
    CSS.....................Intermediário<br>
    JavaScript..............Intermediário<br>
    React...................Básico<br>
    Node....................Básico<br><br>

    Power Bi................Intermediário<br>
    Pacote Office...........Avançado<br>
    Adobe Photoshop.........Intermediário<br>
    Adobe Premiere..........Intermediário<br>
    Adobe Lightroom.........Intermediário<br>
    Adobe Illustrator.......Intermediário<br>
    Adobe After Effects.....Básico<br>
    Instagram Ads...........Básico<br>
    TikTok Ads..............Básico<br><br>

    Autodesk Fusion 360.....Intermediário<br>
    Autodesk Maya...........Intermediário<br>
    Blender.................Intermediário<br>
    Creality Print..........Avançado<br>
    Ultimaker Cura..........Intermediário<br>
    OBS Studio..............Avançado<br><br>`;
  } else if (escolha === "6" || escolha.toLowerCase() === "contato") {
    contentElement.innerHTML = `
                CONTATO:<br><br>
                Front End Developer - JOÃO ANTÔNIO CUCHERA DE CASTRO<br>
                <a href="mailto:joaoaccastro@gmail.com"  target="_blank" style="color:#00ff00; text-decoration: none;">  ⇝ Envie-me um e-mail</a>
                <br>
                <a href="https://wa.me/5511972788335?text=Olá, peguei seu contato no link do seu portfólio dev"  target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ WhatsApp</a>
                <br>
                <a href="https://www.linkedin.com/in/joao-ac-castro/" target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ LinkedIn</a>
                <br>
                <a href="https://github.com/joaoacastro" target="_blank" style="color:#00ff00; text-decoration: none;"> ⇝ Github</a>
                `;
  } else if (escolha === "7" || escolha.toLowerCase() === "sair") {
    contentElement.innerHTML =
      "Saindo do programa, obrigado pela visita...<br><br>Para voltar ao programa, favor atualizar a página.<br>";
    inputElement.disabled = true; // Desabilita a entrada
    return;
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
