import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: "Electronics",
    description: 'Latest Tech & Gadgets',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'electronics',
    path: '/electronics'
  },
  {
    id: 2,
    title: "Men's Collection",
    description: 'Premium Fashion for Men',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    category: 'men',
    path: '/men'
  },
  {
    id: 3,
    title: "Women's Collection",
    description: 'Elegant Styles for Women',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    category: 'women',
    path: '/women'
  },
  {
    id: 4,
    title: 'Luxury Watches',
    description: 'Timeless Elegance',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    category: 'watches',
    path: '/watches'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Collections</h2>
        <p className="text-gray-600 text-center mb-12">Discover our curated selection of premium products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.path}
              className="group relative h-96 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="mb-4 text-gray-200">{collection.description}</p>
                  <span className="inline-block bg-white text-black px-6 py-2 rounded-full group-hover:bg-opacity-90 transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}