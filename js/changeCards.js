
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

    var totalCost1 = parseInt(0);
    var totalCost2 = parseInt(0);

    if(!isNaN(document.getElementById("fixCostCard").innerText.replace('R$','')))
        totalCost1 = parseInt(document.getElementById("fixCostCard").innerText.replace('R$',''));
    
    if(!isNaN(document.getElementById("fixCostCard").innerText.replace('R$','')))
        totalCost2 = parseInt(document.getElementById("variableCostCard").innerText.replace('R$',''));

        var totalCost = totalCost1 + totalCost2;

    document.getElementById("totalCostCard").innerText = "R$ " + parseInt(totalCost);

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

function saveInitialCosts () {
    var cost = 0;
    for (let i=1;i<=4;i++){
        if(!isNaN(parseInt(document.getElementById("initialCost" + i).value)))
            cost  += parseInt(document.getElementById("initialCost" + i).value) ;
    } 
    

    document.getElementById("initialCostCard").innerText = "R$ " + cost;


}