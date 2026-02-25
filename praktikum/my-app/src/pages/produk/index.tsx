import Link from 'next/link';

export default function ProdukPage() {
  return (
    <div>
      <h1>Halaman Produk</h1>

      <ul>
        <li>
          <Link href="/produk/sepatu">Produk Sepatu</Link>
        </li>
        <li>
          <Link href="/produk/baju">Produk Baju</Link>
        </li>
      </ul>
    </div>
  );
}