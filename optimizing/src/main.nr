fn main(num: u32) -> pub u32 {
    let mut approx = num;
    let mut better_approx = (approx + 1) / 2;

    for _ in 0..20 { 
        approx = better_approx;
        better_approx = (approx + num / approx) / 2;
    }

    better_approx
}

// nargo info
// (after compilation) bb gates -b 