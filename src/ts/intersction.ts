//Intersection Types : & and

{
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employedId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employedId, person.work());
    }

    internWork({
        name: 'hyunjin',
        score: 1,
        employedId: 123,
        work: () => {
        }
    })
}