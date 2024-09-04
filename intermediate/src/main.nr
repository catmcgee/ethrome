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

    break_and_continue()
}

unconstrained fn break_and_continue() {
    for i in 0..10 {
        if i==1 {
            std::println(i);
            continue;
        }
        else if i%2==0 {
            std::println(i);
            continue;
        }
        else {
            std::println(i);
            std::println("breaking");
            break;
        }
    }
}