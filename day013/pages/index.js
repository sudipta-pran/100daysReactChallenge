import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Bitprice from '../components/Bitprice'

function Home(props){
    return (
        <Layout>            
            <h1>Current Bitcoin Prices</h1>
            <hr/>
            <Bitprice bpi={props.bpi} />
        </Layout>
    )
}

Home.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data.bpi
    }
}

export default Home