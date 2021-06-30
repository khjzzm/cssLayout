//Array
const fruits: string[] = ['1', '2', '3']
const scroes: Array<number> = [1,2,3]

//readonly 는 Array<number> 사용 불가능
function printArray(fruits: readonly string[]){

}

//Tuple (사용을 권장하지 않음) -> interface, type alias, class
let student: [string, number];
student = ['name', 123]
student[0]
student[1]


