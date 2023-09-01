function optimalChange(s) {
  s *= 100;
  let remaining = s;
  let change = {
    bill500: 0,
    bill100: 0,
    bill50: 0,
    bill20: 0,
    bill10: 0,
    bill5: 0,
    coin2: 0,
    coin1: 0,
    coin050: 0,
    coin020: 0,
    coin010: 0,
    coin005: 0,
    coin002: 0,
    coin001: 0,
    total: 0
  };

  const denominations = [
    {name: 'bill500', value: 50000},
    {name: 'bill100', value: 10000},
    {name: 'bill50', value: 5000},
    {name: 'bill20', value: 2000},
    {name: 'bill10', value: 1000},
    {name: 'bill5', value: 500},
    {name: 'coin2', value: 200},
    {name: 'coin1', value: 100},
    {name: 'coin050', value: 50},
    {name: 'coin020', value: 20},
    {name: 'coin010', value: 10},
    {name: 'coin005', value: 5},
    {name: 'coin002', value: 2},
    {name: 'coin001', value: 1}
  ];

  for (const {name, value} of denominations) {
    const count = Math.floor(remaining / value);
    change[name] = count;
    change.total += count;
    remaining -= count * value;
  }

  return change;
}


function calculer() {
  let montant = parseFloat(document.getElementById("montant").value);
  let paye = parseFloat(document.getElementById("paye").value);

  if (montant <= 0 || paye <= 0) {
    alert("Entrez des montants valides !");
    return;
  }

  if (paye < montant) {
    alert("Le montant payé ne peut pas être inférieur au montant de la transaction !");
    return;
  }

  let aRendre = paye - montant;
  document.getElementById("montantRendu").innerHTML = aRendre.toFixed(2);

  if (aRendre === 0) {
    alert("Pas besoin de rendre de monnaie !");
    return;
  }

  let change = optimalChange(aRendre);

  const denominations = [
    'bill500', 'bill100', 'bill50', 'bill20', 'bill10', 'bill5',
    'coin2', 'coin1', 'coin050', 'coin020', 'coin010', 'coin005', 'coin002', 'coin001'
  ];

  for (const denom of denominations) {
    const element = document.getElementById(denom);
    const listItem = element.parentElement;
  
    if (change[denom] > 0) {
      element.innerHTML = change[denom];
      listItem.classList.remove("hidden");
    } else {
      listItem.classList.add("hidden");
    }
  }
}



