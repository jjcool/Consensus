

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"string"}],"name":"log","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"Premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_premium","type":"uint256"},{"name":"_flightno","type":"string"},{"name":"_yymmdd","type":"string"},{"name":"_arrtime","type":"uint256"}],"name":"new_policy","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"customer","type":"address"},{"name":"balance","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"flightNumber","type":"string"},{"name":"YearMonthDay","type":"string"},{"name":"arrivaltime","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"delay","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"carrierFlightNumber","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"LOG_PolicyApplied","type":"event"}]'/*[{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"send","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"queryBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"Premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_premium","type":"uint256"},{"name":"_flightno","type":"string"},{"name":"_yymmdd","type":"string"},{"name":"_arrtime","type":"uint256"}],"name":"new_policy","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"customer","type":"address"},{"name":"balance","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"flightNumber","type":"string"},{"name":"YearMonthDay","type":"string"},{"name":"arrivaltime","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"delay","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"carrierFlightNumber","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"LOG_PolicyApplied","type":"event"}]'*/)

VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0xdbde5790ed8945f01f309294f47eacbb2e867164');
//candidates = {"Jayesh": "candidate-1", "Pankaj": "candidate-2", "Jose": "candidate-3"}

function voteForCandidate(premium,flight) {
  premium = $("#premium").val();
  flightNumber = $("#flight").val();
  YearMonthDay = $("#date").val();
  arrivaltime = $("#arr").val();

  console.log(contractInstance.log(flightNumber,YearMonthDay,arrivaltime, {from: web3.eth.accounts[0]})/*, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  }*/);
}

$(document).ready(function() {
  // candidateNames = Object.keys(candidates);
  // for (var i = 0; i < candidateNames.length; i++) {
  //   let name = candidateNames[i];
  //   let val = contractInstance.totalVotesFor.call(name).toString()
  //   $("#" + candidates[name]).html(val);
  // }
});


