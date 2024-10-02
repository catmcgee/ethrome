# ETHRome Workshop

## ZK Intuitions: Writing your first circuits in Noir

In this workshop, we will 

- introduce the Alibaba cave to get an intuition for zero knowledge
- start a new Noir program from scratch and write a circuit, generate a proof, and verify it
- explore more advanced verions of the Alibaba cave to understand SNARKs and more up-to-date ZK cryptography
- use these advanced versions to write circuits, understanding how Noir differs from functional programming in Rust
- deploy a Solidity verifier so we can verify our circuits in EVM

## Circuits

In this repo, find:

- [Simple circuit](./simple/README.md)
- [Intermediate circuit with loops](./intermediate/README.md)
- [A circuit that recursively verifies another circuit (+ bonus NoirJS)](./recursion/README.md)
- [An optimized circuit using unconstrained functions](./optimizing/README.md)