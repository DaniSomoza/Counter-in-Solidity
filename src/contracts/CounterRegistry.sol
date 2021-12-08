pragma solidity ^0.8.0;

contract CounterRegistry {
    mapping(address => address[]) userContracts;

    function registerNewContract(address newContract, address userAddress)
        public
    {
        userContracts[userAddress].push(newContract);
    }

    function findUserContracts(address user)
        public
        view
        returns (address[] memory)
    {
        return userContracts[user];
    }
}
