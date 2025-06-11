
const GallerySection = () => {
  const images = [
    {
      id: 1,
      url: `https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&q=80`,
      title: "Luxury Living Room",
      description: "Spacious and elegantly designed living spaces"
    },
    {
      id: 2,
      url: `https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80`,
      title: "Modern Architecture",
      description: "Contemporary design with premium finishes"
    },
    {
      id: 3,
      url: `https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80`,
      title: "Building Exterior",
      description: "Striking facade with modern aesthetics"
    },
    {
      id: 4,
      url: `https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&q=80`,
      title: "Sky Lounge",
      description: "Panoramic views from premium floors"
    },
    {
      id: 5,
      url: `https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&q=80`,
      title: "Architectural Marvel",
      description: "Award-winning design excellence"
    },
    {
      id: 6,
      url: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80`,
      title: "Landscaped Gardens",
      description: "Serene green spaces for relaxation"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-real-estate-champagne/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-real-estate-navy mb-4">
            Experience <span className="luxury-text-gradient">Prime World City</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into a world of luxury and sophistication with our thoughtfully designed spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-real-estate-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-real-estate-platinum">{image.description}</p>
                </div>
              </div>

              {/* Luxury Badge */}
              <div className="absolute top-4 right-4 bg-luxury-gradient text-real-estate-navy px-3 py-1 rounded-full text-xs font-semibold">
                Premium
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="text-center mt-12">
          <button className="bg-real-estate-navy text-white px-8 py-3 rounded-full font-semibold hover-lift">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
