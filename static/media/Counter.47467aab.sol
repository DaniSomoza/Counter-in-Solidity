pragma solidity ^0.8.0;

contract Counter {
    int256 public counter = 0;
    event CounterChanged(int256 counter, address userAddress);

    constructor() {}

    function increment() public {
        emit CounterChanged(counter++, msg.sender);
    }

    function decrement() public {
        emit CounterChanged(counter--, msg.sender);
    }

    function reset() public {
        counter = 0;
        emit CounterChanged(counter, msg.sender);
    }
}
