import Footer from '../components/Footer'
import Header from '../components/Header'

function AppLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default AppLayout