function criptografar() {
    processarTexto(true);
}

function descriptografar() {
    processarTexto(false);
}

function processarTexto(criptografar) {
    const texto = document.getElementById('inputText').value;
    const deslocamento = parseInt(document.getElementById('deslocamento').value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + (criptografar ? deslocamento : 26 - deslocamento)) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + (criptografar ? deslocamento : 26 - deslocamento)) % 26) + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }

    document.getElementById('outputText').value = resultado;
}

function limpar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function atualizarDeslocamento() {
    const deslocamento = document.getElementById('deslocamento').value;
    document.getElementById('valorDeslocamento').textContent = deslocamento;
}

window.onload = atualizarDeslocamento;

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});