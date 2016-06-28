'use strict';

const brain = require('brain');

const net = new brain.NeuralNetwork();

net.train([
    { input: { 'test-1': 'hahaha' }, output: { 'si': 1 } },
    { input: { 'test-1': 'hihihi' }, output: { 'design': 1 } },
]);

let output = net.run({ 'test-1': 'hahaha' });

console.log("output: ", output);
