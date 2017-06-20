

	web3 = require('web3')
	web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));

	code = fs.readFileSync('test.sol').toString();
	contract =  web3.eth.compile.solidity(code);

	VotingContract = web3.eth.contract(contract.info.abiDefinition);
	deployedContract = VotingContract.new({data: contract.code, from: web3.eth.accounts[0], gas: 4300000});
	contractInstance = VotingContract.at(deployedContract.address);

	// contractInstance.send( web3.eth.accounts[0],web3.eth.accounts[1],5,{from : web3.eth.accounts[0]})

	// console.log(contract.info.abiDefinition[5]);

	// //contractInstance.new_policy(2,"6E411","sds",5,{from: web3.eth.accounts[0], gas: '470000'});


	// contractInstance.call(web3.eth.accounts[0]).then(new_policy(2,"6E411")) 