import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "./ImageGallery";
import GetCallback from "./GetCallback";
import InteractiveMap from "./InteractiveMap";
const Header = () => {
  const slideRef = useRef(null);
  const [loadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Life is short and the world is wide. Better get started.",
      name: "96 HOLIDAYS",
    },
    {
      id: 2,
      imgUrl:
        "https://images.pexels.com/photos/2474691/pexels-photo-2474691.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      desc: "Life is not meant to be lived in one place.",
      name: "96 HOLIDAYS",
    },
    {
      id: 3,
      imgUrl:
        "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "An adventure is only an inconvenience rightly considered.",
      name: "96 HOLIDAYS",
    },
    {
      id: 5,
      imgUrl:
        "https://images.pexels.com/photos/2088282/pexels-photo-2088282.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Happiness is not a station you arrive at, but a manner of traveling.",
      name: "96 HOLIDAYS",
    },
    {
      id: 6,
      imgUrl:
        "https://images.pexels.com/photos/2249285/pexels-photo-2249285.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Always say yes to new adventures.",
      name: "96 HOLIDAYS",
    },
  ];

return (
    <>
        <div className="starterHome">
            <h1 className="posterHead">World Class Travel</h1>

            <div className="relative w-[480px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
                    placeholder="Search Destinations..."
                />
                <button className="absolute right-1 top-1 bottom-1 px-6 bg-[#9faa0b] text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
                    Search
                </button>
            </div>
        </div>
        <h1 className="typing">Explore New Destination With Us</h1>
        <div className="container1">
            <div className="carousel-container">
                <div
                    className="loadbar"
                    style={{ width: `${loadingProgress}%` }}
                ></div>
                <div id="slide" ref={slideRef}>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="item"
                            style={{ backgroundImage: `url(${item.imgUrl})` }}
                        >
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="des">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button id="prev" onClick={handleClickPrev}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button id="next" onClick={handleClickNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
        <ImageGallery />
        <GetCallback />
        <InteractiveMap />

    </>
);
};

export default Header;
