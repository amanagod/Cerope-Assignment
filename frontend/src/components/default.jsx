import Navbar from './navbar'
import Footer from './footer'

const structure = ({children})=>{
return(
<>
<Navbar />
<main>
{children}
</main>
<Footer />
</>
)
}

export default structure;