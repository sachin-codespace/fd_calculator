function calculateMaturity() {

    const principal = parseFloat(document.querySelector("#principal").value);
    const interest = parseFloat(document.querySelector("#interest").value);
    const tenure = parseFloat(document.querySelector("#tenure").value);
    const maturity = principal + (principal * interest * tenure) / 100;

    if (principal && interest && tenure) {
        document.querySelector(".result").innerText = `Maturity Amount: ${maturity.toFixed(2)}`;
    }
    else {
        document.querySelector(".result").style.color = 'red';
        document.querySelector(".result").innerText = `Fill Correct details`;
    }
}
document.querySelector("button").addEventListener("click", calculateMaturity)