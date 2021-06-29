const num:number = 1;

const str:string = 'hello';

const bool:boolean = false;

let age: number | undefined;

let person : string | null;

function find() : number | undefined {
    return 1;
}

let notsure : unknown = 0; //자바스크립트에서 리턴하는 타입을 모르는 경우 사용

let anything : any;

function throwError(message: string) : never {
    throw new Error(message);
}