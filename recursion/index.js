import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';
import main from './circuits/main/target/recursion.json' with { type: "json" };
import recursion from './circuits/recursive/target/recursion.json' with { type: "json" };

async function runRecursion() {
    try {
        console.log("Initializing backends...");
        const mainBackend = new BarretenbergBackend(main, { threads: 8 });
        const recursionBackend = new BarretenbergBackend(recursion, { threads: 8 });

        console.log("Creating Noir instances...");
        const mainNoir = new Noir(main);
        const recursiveNoir = new Noir(recursion);
        const input = { x: 1, y: 2 };
        
        console.log("Creating main witness...");
        const { witness: mainWitness } = await mainNoir.execute(input);

        console.log("Generating main proof...");
        const { proof: mainProof, publicInputs: mainPublicInputs } = await mainBackend.generateProof(mainWitness);

        console.log("Generating recursive proof artifacts...");
        try {
            const publicInputsArray = Array.isArray(mainPublicInputs) ? mainPublicInputs : [mainPublicInputs];
            const { proofAsFields, vkAsFields, vkHash } = await mainBackend.generateRecursiveProofArtifacts(
                { 
                    publicInputs: publicInputsArray, 
                    proof: mainProof 
                }, 
                publicInputsArray.length
            );

            console.log("Recursive proof artifacts generated successfully");

            const recursiveInputs = {
                verification_key: vkAsFields,
                proof: proofAsFields,
                public_inputs: publicInputsArray,
                key_hash: vkHash,
                x: input.x,
                y: input.y
            };

            console.log("Creating witness for recursive proof...");
            let recursionWitness;
            try {
                const result = await recursiveNoir.execute(recursiveInputs);
                recursionWitness = result.witness;
                console.log("Recursive witness created");
            } catch (witnessError) {
                console.error("Error creating recursive witness:", witnessError);
                return;
            }

            console.log("Generating recursive proof...");
            const { proof: recursionProof, publicInputs: recursionPublicInputs } = await recursionBackend.generateProof(recursionWitness);

            console.log("Verifying proof...");
            const verified = await recursionBackend.verifyProof({ proof: recursionProof, publicInputs: recursionPublicInputs });

            console.log("Verified:", verified);
        } catch (artifactError) {
            console.error("Error in recursive proof generation process:");
            console.error(artifactError);
            if (artifactError.stack) {
                console.error("Stack trace:", artifactError.stack);
            }
        }
    } catch (error) {
        console.error("An error occurred:");
        console.error(error);
        if (error.stack) {
            console.error("Stack trace:", error.stack);
        }
    }
}

runRecursion().catch(console.error);