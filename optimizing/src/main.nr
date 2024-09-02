fn main(num: u32) -> pub u32 {
    let square = sqrt(num);
    assert(square * square == num);
    
    square
}

unconstrained fn sqrt(num: u32) -> u32 {
    let mut approx = num;
    let mut better_approx = (approx + 1) / 2;

    for _ in 0..10 { 
        approx = better_approx;
        better_approx = (approx + num / approx) / 2;
    }

    better_approx
}