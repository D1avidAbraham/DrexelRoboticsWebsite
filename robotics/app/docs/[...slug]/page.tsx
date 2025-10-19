export default async function Docs({
    params,
}:{
    params: Promise<{ slug: string[] }>;
}){
    const { slug } = await params;
    if (slug?.length === 2 ){
        return (
            <h1>folder {slug[0]} and page {slug[1]}</h1>
        );
    }else if ( slug?.length == 1){
        return (<h1> page is {slug[0]}</h1>);
    }
    return(
        
        <h1>hello and welcome to docs {slug[0]}</h1>
    );
}