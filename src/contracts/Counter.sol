// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

abstract contract CounterRegistryInterface {
    function registerNewContract(address newContract, address userAddress)
        public
        virtual;
}

contract Counter {
    event CounterChanged(
        string eventType,
        int256 prevCounter,
        int256 newCounter,
        address userAddress
    );

    int256 public counter;

    address counterRegistryAddress = 0x390AbC4148351a1570Da3B0E8F9c56AEa071Bf76;
    CounterRegistryInterface counterRegistry =
        CounterRegistryInterface(counterRegistryAddress);

    constructor() {
        counter = 0;
        counterRegistry.registerNewContract(address(this), msg.sender);
    }

    function increment() public {
        int256 prevCounter = counter;
        counter = counter + 1;
        emit CounterChanged("increment", prevCounter, counter, msg.sender);
    }

    function decrement() public {
        int256 prevCounter = counter;
        counter = counter - 1;
        emit CounterChanged("decrement", prevCounter, counter, msg.sender);
    }

    function reset() public {
        int256 prevCounter = counter;
        counter = 0;
        emit CounterChanged("reset", prevCounter, counter, msg.sender);
    }

    function setCounter(int256 value) public {
        int256 prevCounter = counter;
        counter = value;
        emit CounterChanged("setCounter", prevCounter, counter, msg.sender);
    }
}
