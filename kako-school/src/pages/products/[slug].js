import Image from "next/image";
import { supabase } from "supabase"

export default function ProductPage({product}) {
  console.log(product.slug)
  const aa= product.slug
  return(
      <>
            <section className="product-section">
              <article className="product">
                <div className="product-wrap">
                  <Image src={`/assets/${product.slug}.png`} width={1000} height={300} alt={product.name} />
                </div>
                <section></section>
              </article>
            </section>
      </>
    )
        
  
}


export async function getStaticPaths() {

  const {data: products} = await supabase.from("product").select("slug")

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  console.log(paths)


    return {
      paths,// See the "paths" section below
      fallback: true, // false or "blocking"
    }
  }
   
  export async function getStaticProps(context) {
    const slug = context.params.slug

    let { data: product } = await supabase
  .from('product')
  .select("*")
  .eq("slug", slug)

    return { 
      props:{
        product
      }
     }
  }
   
  // export default function Page({ repo }) {
  //   return repo.stargazers_count
  // }