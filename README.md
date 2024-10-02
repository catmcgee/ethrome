# ETHRome Workshop

Find the slides [here](https://docs.google.com/presentation/d/1IQeb5c4W7kCc0ep6W1Pw0vZuD2Sv62Wi9rSUr6lxtcM/edit?usp=sharing).

## ZK Intuitions: Writing your first circuits in Noir

In this workshop, we will 

- introduce the Alibaba cave to get an intuition for zero knowledge
- start a new Noir program from scratch and write a circuit, generate a proof, and verify it
- explore more advanced verions of the Alibaba cave to understand SNARKs and more up-to-date ZK cryptography
- use these advanced versions to write circuits, understanding how Noir differs from functional programming in Rust
- deploy a Solidity verifier so we can verify our circuits in EVM

## Commands

### Install Noir

1. Install noirup

```bash
curl -L https://raw.githubusercontent.com/noir-lang/noirup/main/install | bashcurl -L https://raw.githubusercontent.com/noir-lang/noirup/main/install | bash
```
2. Update terminal

```bash
source ~/.bashrc
```

(it might also be `source ~/.zshrc`)

3. Run `noirup`

```bash
noirup
```

4. Check version

```bash
nargo --version
```

(should be `0.33.0`)

5. Install bbup

```bash
curl -L https://raw.githubusercontent.com/AztecProtocol/aztec-packages/master/barretenberg/cpp/installation/install | bash
```

6. Update terminal

```bash
source ~/.bashrc
```

7. Install compatible version of `bb`

```bash
bbup --version 0.47.1
```
(this is compatible with noir 0.33.0)

8. Check version

```bash
bb --version
```

## Circuits

In this repo, find:

- [Simple circuit](./simple/README.md)
- [Intermediate circuit with loops](./intermediate/README.md)
- [A circuit that recursively verifies another circuit (+ bonus NoirJS)](./recursion/README.md)
- [An optimized circuit using unconstrained functions](./optimizing/README.md)