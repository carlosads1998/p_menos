// script.js
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    // Alterna a classe "active" para mostrar ou esconder o menu
    sidebar.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    setInterval(showSlide, 3000);
  });

  //copiar texto
  function copyText(elementId) {
    const text = document.getElementById(elementId).textContent; // Obtém o texto pelo ID
    navigator.clipboard.writeText(text) // Copia para a área de transferência
        .then(() => alert("Texto copiado com sucesso!"))
        .catch((err) => console.error("Erro ao copiar texto: ", err));
}

//pesquisa por palavra chaves
function filterCells() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const keywords = input.split(" ").filter(word => word.trim() !== ""); // Divide a entrada em palavras-chave

  const cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
      const title = cell.getAttribute("data-title") ? cell.getAttribute("data-title").toLowerCase() : "";
      
      // Verifica se algum dos keywords está presente no título
      const matches = keywords.some(keyword => title.includes(keyword));
      
      if (matches || keywords.length === 0) {
          cell.style.display = "block"; // Mostra o box correspondente
      } else {
          cell.style.display = "none"; // Esconde o box não correspondente
      }
  });
}

function copyText(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text)
      .catch(err => console.error("Erro ao copiar texto:", err));
}


function copyText(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text)

      .catch((err) => console.error("Erro ao copiar texto: ", err));
}


function copyFormattedText() {
        var content = "Para dar continuidade, poderia me informar:\n\n";
        content += "• CPF\n";
        content += "• NOME\n";
        content += "• ENDEREÇO\n";
        content += "• CEP\n";
        content += "• EMAIL\n\n";
        content += "Assim consigo acessar os estoques próximo a sua região.";
    
        // Cria um campo temporário para copiar o conteúdo
        var tempTextArea = document.createElement("textarea");
        document.body.appendChild(tempTextArea);
    
        // Coloca o conteúdo a ser copiado no campo temporário
        tempTextArea.value = content;
    
        // Seleciona o conteúdo do campo temporário
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis
    
        // Copia o texto para a área de transferência
        try {
            document.execCommand('copy');
            alert("Texto copiado com sucesso!"); // Alerta de sucesso
        } catch (err) {
            alert("Falha ao copiar o texto.");
        }
    
        // Remove o campo temporário
        document.body.removeChild(tempTextArea);
    }
    