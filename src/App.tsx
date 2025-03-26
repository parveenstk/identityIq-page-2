import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import IdentityIQ from "./components/IdentityIQ"
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row px-4 sm:px-0 justify-center gap-8">
        <Body className="sm:w-7/13" />
        <div className="sm:w-1/4 hidden sm:block">
          <IdentityIQ />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App