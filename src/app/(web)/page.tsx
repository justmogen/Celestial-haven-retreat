import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom"
import Gallery from "@/components/Gallery/Gallery"
import HeroSection from "@/components/HeroSection/HeroSection"
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import PageSearch from "@/components/PageSearch/PageSearch"

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery />
      <NewsLetter />
      <FeaturedRoom />
    </>
  )
}

export default Home