const ImageGallery = () => {
    const images = [
      {
        src: "https://images.pexels.com/photos/20000867/pexels-photo-20000867/free-photo-of-raja-mahal-in-jhansi-in-india.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Fearless leader",
        title: "Indian Tour Packages ",
      },
      {
        src: "https://images.pexels.com/photos/2240361/pexels-photo-2240361.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Southbank - Strike a Pose",
        title: "International Tour Packages",
      },
      {
        src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Tower Bridge, light trails",
        title: "Honeymoon Packages",
      },
      {
        src: "https://images.pexels.com/photos/9943048/pexels-photo-9943048.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "The Clyde Arc",
        title: "Group Tour Packages",
      },
      {
        src: "https://images.pexels.com/photos/27028888/pexels-photo-27028888/free-photo-of-woman-sitting-on-boat-on-lake-and-photographing.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Reflections at St Pauls",
        title: "Solo Tour Packages",
      },
    ];
  
    return (
      <div className="gallery">
        <h1 className="typing">Popular Packages</h1>
        <section className="container_1">
          {images.map((image, index) => (
            <article className="container__item" key={index}>
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} />
                <div className="overlay">
                  <h1 className="image-title">{image.title}</h1>
                  <button className="explore-btn">Explore</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  };
  
  export default ImageGallery;
  