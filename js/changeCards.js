
function saveFixCosts() {
    var cost = 0;
    for (let i=1;i<=4;i++){
        if(!isNaN(parseInt(document.getElementById("fixCost" + i).value)))
            cost  += parseInt(document.getElementById("fixCost" + i).value) ;
    } 
    

    document.getElementById("fixCostCard").innerText = "R$ " + cost;

    saveTotalCosts();
    
}

function saveTotalCosts () {

    var totalCost = 0;

    totalCost = document.getElementById("fixCostCard").innerText.replace('R$','');

    totalCost = document.getElementById("variableCostCard").innerText.replace('R$','');

    document.getElementById("totalCostCard").innerText = "R$ " + totalCost;

}

function saveVariableCosts () {
    var cost = 0;
    for (let i=1;i<=8;i++){
        if(!isNaN(parseInt(document.getElementById("variableCost" + i).value)))
            cost  += parseInt(document.getElementById("variableCost" + i).value) ;
    } 
    

    document.getElementById("variableCostCard").innerText = "R$ " + cost;

    saveTotalCosts();

}