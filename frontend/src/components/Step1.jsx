import React, { useState } from 'react';

const PropertyCard = ({ image, title, rating, location, price, onSelect }) => {
  return (
    <div
      className="w-full flex items-center p-4 bg-blue-100 rounded-lg shadow-md space-x-4 cursor-pointer"
      onClick={onSelect}
    >
      <img src={image} alt={title} className="w-20 h-24 object-cover rounded-md" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm text-gray-500 flex-col items-center space-x-1">
          <div>⭐{rating}</div>
          <div>{location}</div>
        </div>
        <div className="text-lg font-semibold">₹{price}/month</div>
      </div>
    </div>
  );
};

const Step1 = ({ onProceed, showSearchBar, activeIcon, handleIconClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  const properties = [
    {
      image: 'https://5.imimg.com/data5/UU/NB/QJ/ANDROID-92035713/1572882152419-jpg-1000x1000.jpg',
      title: 'Sky Dandelions Apartment',
      rating: '4.9',
      location: 'Bolivali, Mumbai',
      price: '22,000',
      city: 'Mumbai'
    },
    {
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      title: 'Wings Tower',
      rating: '4.9',
      location: 'Church street, Bangalore',
      price: '17,000',
      city: 'Bangalore'
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/354906221/BF/PH/LW/9728889/3bhk-bungalow-construction-service-1000x1000.jpeg',
      title: 'Wayside Modern House',
      rating: '4.4',
      location: 'MG Road, Gurgaon',
      price: '18,000',
      city: 'Gurgaon'
    },
    {
      image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=1024x1024&w=is&k=20&c=1golptGIidGvd8qhQ7FvKAT2lFl7hIu8KGCJzBT_H8o=',
      title: 'Migson Altigo',
      rating: '4.8',
      location: 'Murti, Delhi',
      price: '21,000',
      city: 'Delhi'
    }
  ];

  // Filter properties based on the search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = properties.filter(property =>
      property.city.toLowerCase().includes(query)
    );
    setFilteredProperties(filtered);
  };

  const showContent = activeIcon === 'home' || (activeIcon === 'search' && searchQuery);

  return (
    <div className="mt-7 w-[320px] h-[650px] border-[16px] border-black rounded-[50px] bg-gray-100 mx-auto relative overflow-hidden shadow-lg flex flex-col">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/4 w-1/2 h-4 bg-black rounded-b-[20px]"></div>

      {/* Content inside iPhone */}
      <div className="flex-grow p-4 space-y-4 overflow-auto mb-14">
        <div className="flex items-center">
          <button
            className="text-xl flex-shrink-0"
            onClick={() => handleIconClick('home')}
          >
            ←
          </button>
          <h1 className="text-xl font-semibold flex-grow text-center ml-6">
            {activeIcon === 'search' ? 'Search results' : 'Properties'}
          </h1>
          <button className="text-xl flex-shrink-0">🔧</button>
        </div>

        {activeIcon === 'search' && showSearchBar && (
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search by city..."
              className="w-full p-2 rounded-lg shadow-inner focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="absolute top-0 right-0 p-2 m-2">🔍</button>
          </div>
        )}

        {showContent && (
          <div className="space-y-4">
            {(activeIcon === 'search' ? filteredProperties : properties).map((property, index) => (
              <PropertyCard
                key={index}
                image={property.image}
                title={property.title}
                rating={property.rating}
                location={property.location}
                price={property.price}
                onSelect={() => onProceed(property)}
              />
            ))}
          </div>
        )}

        {activeIcon === 'favorites' && <div>No content available</div>}
        {activeIcon === 'profile' && <div>No content available</div>}
      </div>

      {/* Bottom Navigation - Fixed at Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-around p-2 bg-white shadow-inner border-t border-gray-300">
        <button
          onClick={() => handleIconClick('home')}
          className={`text-xl ${activeIcon === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          🏠
        </button>
        <button
          onClick={() => handleIconClick('search')}
          className={`text-xl ${activeIcon === 'search' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          🔍
        </button>
        <button>
          💙
        </button>
        <button>
          👤
        </button>
      </div>
    </div>
  );
};

export default Step1;
