import ParallaxSection from '../components/ParallaxSection';
import FeaturedCollections from '../components/FeaturedCollections';
import TrendingProducts from '../components/TrendingProducts';
import FeatureHighlights from '../components/FeatureHighlights';

export default function Home() {
  return (
    <div>
      <ParallaxSection />
      <FeaturedCollections />
      <TrendingProducts />
      <FeatureHighlights />
    </div>
  );
}