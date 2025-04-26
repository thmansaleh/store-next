import Products from "./Products"
import Title from "./Title"

function Content({data}) {
  return (
    <div className="p-3">
        <Title categoryName={data.category.name}/>
        <Products data={data.products}/>
    </div>
  )
}

export default Content