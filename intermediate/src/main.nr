use dep::std;

fn main() {
    // loop over a range
    for i in 0..5 {
        std::println(i);
    }

    let foo = [123, 456, 789];
    for i in 0..foo.len() {
        let elem = foo[i];
        std::println(elem);
    }

    for elem in foo {
        std::println(elem);
    }
}