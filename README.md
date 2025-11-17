# 🌐 Projeto_Ong
Plataforma web para ONGs que facilita gestão de projetos, divulgação de campanhas e captação de recursos, conectando organizações a voluntários e apoiadores de forma prática e eficiente.

# 🌱 HopeLink – Conectando Solidariedade e Transformação

O **HopeLink** é uma plataforma web desenvolvida como projeto acadêmico, com o objetivo de aproximar pessoas interessadas em ajudar de iniciativas que precisam de apoio.  
O site apresenta informações sobre voluntariado, formas de doação, depoimentos e uma experiência simples, rápida e intuitiva.

O projeto foi construído com **HTML, CSS e JavaScript puros**, garantindo leveza e fácil manutenção.  
A hospedagem é feita via **Vercel**, que oferece HTTPS automático e deploy contínuo integrado ao GitHub.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e organizada  
- **CSS3** – Layout moderno, responsivo e profissional  
- **JavaScript Vanilla** – Interações básicas e rápidas  
- **API Pública BuscaCEP** – Sistema de busca automática de endereços via CEP  
- **GitHub** – Versionamento  
- **Vercel** – Hospedagem e deploy com HTTPS

---

## 🧩 Funcionalidades Principais

- 🌐 **Layout totalmente responsivo**  
- 🎨 **Header hero** com design moderno  
- 📚 Seções organizadas e intuitivas:
  - Por que ser voluntário?
  - Tipos de voluntariado
  - Como participar
  - Galeria interativa
  - Depoimentos
- 📱 **Menu mobile deslizante**
- 🔍 **Busca de CEP integrada**  
   - Campo para digitar o CEP  
   - Consulta à API pública **BuscaCEP**  
   - Preenchimento automático de endereço (rua, bairro, cidade, estado)
- 🔒 **Certificado HTTPS automático** pela Vercel  
- ⚡ **Deploy automático** ao enviar atualizações no GitHub

---

## 📁 Estrutura de Pastas

/OngHopelink
│── css/
│ └── voluntario.css
│── js/
│ └── buscacep.js
│── img/
│ └── imagens do projeto
│── index.html
└── README.md

---

## 📦 Integração com a API BuscaCEP

O projeto utiliza uma requisição `fetch` para consultar automaticamente o endereço do usuário:

**Exemplo utilizado no projeto:**

async function buscarCEP(cep) {
  const cepLimpo = cep.replace(/\D/g, "");
  if (cepLimpo.length !== 8) {
    return;
  }
  try {

    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

    const data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado!");
      enderecoInput.value = "";
      bairroInput.value = "";
      cidadeInput.value = "";
      return;
    }

    enderecoInput.value = data.logradouro;
    bairroInput.value = data.bairro;
    cidadeInput.value = data.localidade;

  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    alert("Não foi possível buscar o endereço. Tente novamente.");
  }
}

cepInput.addEventListener("blur", () => {
  buscarCEP(cepInput.value);
});

---

## 🌐 Deploy

O projeto está hospedado na Vercel.

🔗 **Acesse aqui:** https://projeto-ong-ten.vercel.app

A cada novo push no GitHub, a Vercel faz o **deploy automático**.

---

## 🛠 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Guilherme-bite/Projeto_Ong.git

👨‍💻 Autor

Guilherme Claudino
Projeto desenvolvido para fins acadêmicos.