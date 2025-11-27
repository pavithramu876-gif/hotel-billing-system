function generateBill() {
    let idli = document.getElementById("idli").value * 30;
    let dosa = document.getElementById("dosa").value * 50;
    let poori = document.getElementById("poori").value * 45;
    let meals = document.getElementById("meals").value * 80;
    let friedrice = document.getElementById("friedrice").value * 90;

    let total = idli + dosa + poori + meals + friedrice;

    document.getElementById("result").innerHTML =
        "Total Bill Amount: ₹" + total;
}
