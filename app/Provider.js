"use client"
import { Provider } from "react-redux"
import store from "./store/store"
import Navigation from './components/navigation/Navigation'
import NavigationBar from "./components/NavigationBar"

function ProviderPage({children}) {
  return <Provider store={store}>{children}

<Navigation/>

</Provider>
    
  
}

export default ProviderPage