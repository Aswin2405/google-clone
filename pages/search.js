import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/Header'
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../Keys';
import Response from '../Response';
function Search({results}) {
    const router =useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Aswin Search</title>
                <link rel="icon" href="https://banner2.cleanpng.com/20180419/hde/kisspng-search-engine-optimization-web-search-engine-searc-b-5ad8b0d90f3260.7434457915241504890623.jpg"/>
            </Head>
            <Header/>
            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData=false;
    const startIndex=context.query.start || "0"
    const data= useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(res=>res.json())
    return{
        props:{
            results:data
        }
    }
}