
const cepInput = document.querySelector("#cep");
const enderecoInput = document.querySelector("#endereco");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");


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
