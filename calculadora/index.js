// calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function Calculadora(){
    try{
        var resultado = eval(display.value);
    
        if (!isFinite(resultado)) {
            throw new Error("Divisão por zero não é permitida");
        }
        
        display.value = resultado;
    } catch (error) {
        display.value = "Erro: " + error.message;
    }
    
}