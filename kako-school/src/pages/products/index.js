import ProductCard from "src/products/components/Card"
import { supabase } from "supabase"

console.log(supabase)

export default function ProductsPage({products}) {
    console.log(products)
    return(
        <>
            <div className="section bg-blue">
                <div className="container">
                    <div className="section-intro">
                        <h1>The latest products</h1>
                    </div>
                </div>
            </div>

            <div className="section small">
                <div className="container">
                    <ul className="product-card-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        )

                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library


    
let { data: products} = await supabase
.from('product')
.select('*')

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
    }
  }