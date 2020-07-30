import Link from 'next/link'

export default function Timeline({userName}){
    return(
        <> 
            <h1>This is the timeline of {userName}</h1>
            <Link href="/"><a>Go Home</a></Link>
        </>
        )
}

//Esto solo funciona en las pages
Timeline.getInitialProps = () => {

    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response =>{
        console.log("Server side:",response)
        const{userName} = response
        return {userName}
    })

}