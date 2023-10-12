import Link from "next/link";

export default function ProductCard({product}) {
    return(
        <>
            <article className="product-card">
                <Link href={`/products/${product.slug}`}>
                    <img src={`/assets/${product.slug}.png`}  alt={product.slug}/>
                </Link>
                <header>
                    <p>
                        {product.name}
                    </p>
                </header>
                <footer>
                    <Link href={`/product/${product.slug}`} className="more">
                        See more →
                    </Link>
                    <span className="pill">{product.category}</span>
                </footer>
            </article>
        </>
    )
}
