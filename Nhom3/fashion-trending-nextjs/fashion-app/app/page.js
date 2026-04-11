import Image from 'next/image'

async function getRandomShirt() {
  const res = await fetch('https://dummyjson.com/products/category/mens-shirts', {
    cache: 'no-store',
  })
  const data = await res.json()
  const products = data.products
  return products[Math.floor(Math.random() * products.length)]
}

export default async function Home() {
  const product = await getRandomShirt()

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
    }}>
      <h1 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>
        Fashion Trending 2026
      </h1>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '20px',
        width: '300px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      }}>
        {/* Product Image */}
        <div style={{
          background: '#f5f5f5',
          borderRadius: '8px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            style={{ objectFit: 'contain', padding: '12px' }}
            priority
          />
        </div>

        {/* Badge + Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: '#4ecdc4', fontWeight: '500' }}>
            New Arrival
          </span>
          <span style={{ fontSize: '16px', color: '#e8272a', fontWeight: '700' }}>
            ${product.price}
          </span>
        </div>

        {/* Product Name */}
        <p style={{ fontWeight: '600', fontSize: '15px', margin: '0 0 14px' }}>
          {product.title}
        </p>

        {/* Button */}
        <button style={{
          width: '100%',
          padding: '10px',
          background: '#111',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '13px',
          cursor: 'pointer',
        }}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </main>
  )
}
