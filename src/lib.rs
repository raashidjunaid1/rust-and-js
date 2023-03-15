#[no_mangle]
pub extern "C" fn add2numbers(firstNumber: i32, secondNumber: i32) -> i32 {
    return firstNumber + secondNumber;
}
