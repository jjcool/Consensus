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
		string status ; 
	}
	 mapping (address => uint[]) public customerPolicies;
	 mapping (uint => uint) public counter ; 


	function new_request(string reference_id, string carrier , uint premium) returns (bool) {

		uint policyId = policies.length++;
        customerPolicies[this].push(policyId);
        policy p = policies[policyId];

        p.reference_id = reference_id ; 
        p.carrier = carrier ; 
        p.premium = premium ; 
        p.status = "To be approved " ;
        counter[policyId] = 0 ;
        
        return true ; 

	}
    // uint k  = 100 ;
	function counter(uint _policyId) returns (string) {

		
		counter[_policyId] = counter[_policyId]+  1; 
		policy x = policies[_policyId] ;

		if (counter[_policyId]  > 3 ){
			x.status = "approved";
		} 

		return x.status ;
	}


}