"use client"
import { Provider } from "react-redux"
import store from "./store/store"
import Navigation from './components/navigation/Navigation'

function ProviderPage({children}) {
  return <Provider store={store}>{children}
<Navigation/>
</Provider>
    
  
}

export default ProviderPage