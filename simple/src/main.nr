fn main(x: Field, y: pub Field) {
    assert(x != y);
}

#[test]
fn test_main() {
    main(1, 2);
}

// nargo check
// nargo execute witness
// bb prove -b ./target/simple -w ./target/witness.gz -o ./target/proof
// bb write_vk -b ./target/hello_world.json -o ./target/vk
// bb verify -p ./target/proof -k ./target/vk