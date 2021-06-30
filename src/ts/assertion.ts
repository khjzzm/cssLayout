{
    function jsStrFunc(): any {
        return 'hello';
    }

//function jsStrFunc(): any {
//  retrun 2;
//}

    const result2 = jsStrFunc();
    console.log((result2 as Array<number>).push(1));

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const number = findNumbers();
    number!.push(2);

    const button = document.querySelector('class');

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);
}



