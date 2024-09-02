use dep::std;

fn main(
    verification_key : [Field; 114], 
    proof : [Field; 93], 
    public_inputs : [Field; 1], 
) {
    let key_hash = std::hash::pedersen_hash(verification_key);
    std::verify_proof(
        verification_key.as_slice(), 
        proof.as_slice(), 
        public_inputs.as_slice(), 
        key_hash,
    );
}