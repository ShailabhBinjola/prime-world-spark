
const GallerySection = () => {
  const propertyImages = [
    {
      id: 1,
      url: `/interior.jpg`,
      title: "Luxury Living Spaces",
      description: "Spacious 2 & 3 BHK apartments with premium interiors",
      category: "Interior"
    },
    {
      id: 2,
      url: `architecture.jpg`,
      title: "Modern Architecture",
      description: "Contemporary design with earthquake-resistant structure",
      category: "Architecture"
    },
    {
      id: 3,
      url: `/exterior.jpg`,
      title: "Premium Tower Complex",
      description: "G+20 floors with high-speed elevators",
      category: "Exterior"
    },
    {
      id: 4,
      url: `/amenities.jpg`,
      title: "Rooftop Amenities",
      description: "Premium amenities like a swimming pool, tennis court, and cricket pitch and many more.",
      category: "Amenities"
    },
    {
      id: 5,
      url: `/entrance.jpg`,
      title: "Grand Entrance",
      description: "Impressive lobby with 24/7 security",
      category: "Entrance"
    },
    {
      id: 6,
      url: `/landscape.jpg`,
      title: "Landscaped Gardens",
      description: "Central courtyard with walking paths and seating",
      category: "Landscape"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-real-estate-champagne/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-real-estate-navy mb-4">
            Experience <span className="luxury-text-gradient">Pride World City</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thoughtfully designed spaces that blend modern architecture with premium amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-2xl hover-lift animate-scale-in bg-white shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Property Category Badge */}
              <div className="absolute top-4 left-4 bg-real-estate-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
                {image.category}
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-real-estate-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-real-estate-platinum">{image.description}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-luxury-gradient text-real-estate-navy px-3 py-1 rounded-full text-xs font-semibold">
                Premium
              </div>
            </div>
          ))}
        </div>

        {/* Property Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-real-estate-navy mb-2">2000+</div>
            <div className="text-gray-600">Premium Apartments</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-real-estate-navy mb-2">20+</div>
            <div className="text-gray-600">Floors</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-real-estate-navy mb-2">400</div>
            <div className="text-gray-600">Acres Land</div>
          </div>
        </div>

        {/* Gallery CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const message = "Hello, I would like to schedule a site visit to Pride World City. Please arrange a convenient time.";
              const whatsappUrl = `https://wa.me/917721873487?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-real-estate-navy text-white px-8 py-3 rounded-full font-semibold hover-lift"
          >
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
