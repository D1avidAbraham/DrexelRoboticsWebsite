export default async function People({
    params,
}: {
    params: Promise<{ people: string }>;
}) {
    const people = (await params).people;
    return(
        <h1>This is {people}</h1>
    )
}