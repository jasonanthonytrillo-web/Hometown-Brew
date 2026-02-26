import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

const heroImages = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&h=1080&fit=crop'
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">Hometown Brew</h1>
          <p className="hero-subtitle">Coffee and Pastries Made with Passion</p>
          <Link to="/menu" className="btn btn-primary hero-btn">
            Order Now
          </Link>
        </div>
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <div className="container">
          <h2 className="section-title fade-in">Our Specialties</h2>
          <p className="section-subtitle fade-in-delay-1">
            Discover our handcrafted selection of premium products
          </p>
          
          <div className="featured-grid">
            {/* Coffee Card */}
            <div className="featured-card fade-in-delay-1">
              <div className="card-image img-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" 
                  alt="Coffee" 
                />
              </div>
              <div className="card-content">
                <h3>Coffee</h3>
                <p>
                  Sourced from the finest beans around the world, our coffee is 
                  expertly roasted to bring out the rich, complex flavors that 
                  coffee lovers crave.
                </p>
              </div>
            </div>

            {/* Dairies Card */}
            <div className="featured-card fade-in-delay-2">
              <div className="card-image img-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop" 
                  alt="Dairy Products" 
                />
              </div>
              <div className="card-content">
                <h3>Dairies</h3>
                <p>
                  Fresh, creamy dairy products from local farms. From rich milk 
                  to artisan cheeses, we bring you the best nature has to offer.
                </p>
              </div>
            </div>

            {/* Pastries Card */}
            <div className="featured-card fade-in-delay-3">
              <div className="card-image img-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" 
                  alt="Pastries" 
                />
              </div>
              <div className="card-content">
                <h3>Pastries</h3>
                <p>
                  Freshly baked pastries crafted by our expert bakers. From 
                  flaky croissants to delicious muffins, perfect with your coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
