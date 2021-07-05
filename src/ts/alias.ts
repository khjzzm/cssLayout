{
    type Text = string;
    const name: Text = 'hyunjin';

    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: "aa",
        age: 12,
    }

    console.log(student);

    //String Literal Types
    type Name = 'name';
    let ellieName: 'name';
}