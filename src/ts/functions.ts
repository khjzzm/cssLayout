function fetchNum(id: string) : Promise<number> {
    //code...
    //code...
    //code...
    return new Promise((resolve, reject) => {
        resolve(100);
    })
}

//Optional
function printName(firstName: string, lastName?: string){
    console.log(firstName);
    console.log(lastName);
}

//Default parameter
function printMessage(message: string 'default message'){
    console.log(message);
}


//Rest parameter
function addNumbers(...numbers: number[]) : number {
    return numbers.reduce((a,b)=>a+b);
}