const Products = ({products}) => {
    console.log(products)
    return (
        <div>
            {products.map((product) => {

                return (
                    <div key={product.id}>
                        <div>{product.Name}</div>
                        <div>{product.Description}</div>
                        <div>{product.Price}</div>
                        <div>{product.category.Name}</div>
                    </div>
                )
                
            })}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://icpdas-backend.herokuapp.com/products");
    const products = await res.json();
  
    return {
        props: { products },
      };
  }
  
export default Products;