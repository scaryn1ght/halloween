document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript carregado"); // Verificação se o JS está carregado

    // Adiciona o evento de clique ao botão "Saiba mais"
    document.querySelector('.btn[href="#info"]').addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const infoSection = document.querySelector('info');
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção de informações
        } else {
            console.log("Seção de informações não encontrada");
        }
    });

    // Adiciona o evento de clique ao botão "Comprar Ingressos"
    document.querySelector('.btn[href="ingressos"]').addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const ingressosSection = document.querySelector('#ingressos');
        if (ingressosSection) {
            ingressosSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção de ingressos
        } else {
            console.log("Seção de ingressos não encontrada");
        }
    });
});


function toggleDetails(elementId) {
    const details = document.getElementById(elementId);
    if (!details) {
        console.error(`Elemento com ID ${elementId} não encontrado.`);
        return; // Se o elemento não existir, sai da função
    }
    

    const arrow = details.previousElementSibling.querySelector(".arrow");

    if (details.classList.contains("details-hidden")) {
        details.classList.remove("details-hidden");
        details.classList.add("details-visible"); // Adiciona a classe para mostrar
        arrow.textContent = "˄"; // Indica que está visível
    } else {
        details.classList.add("details-hidden");
        details.classList.remove("details-visible"); // Adiciona a classe para ocultar
        arrow.textContent = "˅"; // Indica que está oculto
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fantasyItem = document.querySelector(".entretenimento ul li:nth-child(1)");
    const treasureItem = document.querySelector(".entretenimento ul li:nth-child(2)");
    const karaokeItem = document.querySelector(".entretenimento ul li:nth-child(3)");

    // Adicionando eventos de clique aos itens de entretenimento
    if (fantasyItem) {
        fantasyItem.addEventListener("click", function() {
            toggleDetails("fantasy-details");
        });
    } else {
        console.error("Elemento 'fantasyItem' não encontrado.");
    }

    if (treasureItem) {
        treasureItem.addEventListener("click", function() {
            toggleDetails("treasure-details");
        });
    } else {
        console.error("Elemento 'treasureItem' não encontrado.");
    }

    if (karaokeItem) {
        karaokeItem.addEventListener("click", function() {
            toggleDetails("karaoke-details");
        });
    } else {
        console.error("Elemento 'karaokeItem' não encontrado.");
    }

    // Adicionando o botão flutuante de WhatsApp
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/5575999203956";
    whatsappButton.target = "_blank";
    whatsappButton.classList.add("whatsapp-float");
    whatsappButton.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon" aria-label="Converse conosco pelo WhatsApp">
    `;
    document.body.appendChild(whatsappButton);

    // Adicionando a contagem regressiva para o evento
    const countdown = document.createElement("div");
    countdown.id = "countdown";
    countdown.style.position = "fixed";
    countdown.style.top = "20px";
    countdown.style.right = "20px";
    countdown.style.background = "#ff7518";
    countdown.style.color = "#fff";
    countdown.style.padding = "10px";
    countdown.style.borderRadius = "5px";
    countdown.style.zIndex = "1000";
    document.body.appendChild(countdown);

    const eventDate = new Date("2024-10-25T00:00:00");
    const updateCountdown = () => {
        const now = new Date();
        const distance = eventDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    setInterval(updateCountdown, 1000);
});

// Adicionando o estilo do botão flutuante
const style = document.createElement('style');
style.innerHTML = `
    .whatsapp-float {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: transform 0.3s;
    }
    
    .whatsapp-float:hover {
        transform: scale(1.1);
    }

    .whatsapp-icon {
        width: 50px;
        height: 50px;
    }

    /* Adicionando novas classes para animações */
    .details-visible {
        opacity: 1;
        transition: opacity 0.3s ease-in;
    }

    .details-hidden {
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    /* Efeito para lista de entretenimento */
    .entretenimento ul li {
        transition: background-color 0.3s;
    }

    .entretenimento ul li:hover {
        background-color: #ff914d;
    }

    /* Estilos adicionais para a contagem regressiva */
    #countdown {
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
`;
document.head.appendChild(style);
