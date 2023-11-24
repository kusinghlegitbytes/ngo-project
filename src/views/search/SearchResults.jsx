import "./search-results.css"
import Search from "../../components/search/Search"
import Card from "../../components/card/Card"
import Logo from "../../components/logo/Logo"
import Tags from "./Tags"
import AppContext from "../../ctx/AppContext"
import { useContext, useEffect } from "react"
const SearchResults = () => {
  const {setAnimateSearchButton}=useContext(AppContext)
  useEffect(()=>{
    setAnimateSearchButton(false)
  },[])
  return <div className='bg-neutral-100 pt-10'>
    <Logo/>
    <Search/>
    <main className="results-main">
      <div style={{marginTop:"-40px"}}>
        <Tags/>
      </div>
      <div className="w-7/12 mx-auto grid grid-cols-1 sm:grid-cols-2 mt-10 justify-around gap-3 pb-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  </div>
}

export default SearchResults