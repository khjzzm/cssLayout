{
//Array
    const fruits: string[] = ['1', '2', '3']
    const scores: Array<number> = [1, 2, 3]

//readonly 는 Array<number> 사용 불가능
    function printArray(fruits: readonly string[]) {

    }

//Tuple (사용을 권장하지 않음) -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123]
    console.log(student[0]);
    console.log(student[1]);
}