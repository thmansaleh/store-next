"use client"
import { Provider } from "react-redux"
import store from "./store/store"
import Navigation from './components/navigationnnnn/Navigation'
import NavigationBar from "@/app/components/navigationBar/NavigationBar" 
function ProviderPage({children}) {
  return <Provider store={store}>{children}
<NavigationBar/>

</Provider>

}

export default ProviderPage