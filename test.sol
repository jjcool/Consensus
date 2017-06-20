pragma solidity ^0.4.0 ;

contract Conses{
	
	policy[] public policies;

	uint constant ShaLength = 40 ; 

	enum ResponseCodes {
		build,
		firm_order,
		quotation ,
		order_complete
	}

	struct policy{
		uint id;
		string reference_id;
		string carrier ; 
		string doc_url;
		uint createdAt;
		uint premium ; 
	}
	 mapping (address => uint[]) public customerPolicies;

	function new_request(string reference_id, string carrier , uint premium) returns (bool) {

		uint policyId = policies.length++;
        customerPolicies[this].push(policyId);
        policy p = policies[policyId];
        
        p.reference_id = reference_id ; 
        p.carrier = carrier ; 
        p.premium = premium ; 

        return true ; 

	}


}