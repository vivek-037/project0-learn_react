import React, { useState } from 'react';
import { 
  Plane, 
  Building2, 
  Car, 
  Search, 
  MapPin, 
  Calendar, 
  User, 
  Menu, 
  X, 
  Star, 
  ArrowRightLeft,
  ChevronRight
} from 'lucide-react';

// Reusable Input Field Component
const InputField = ({ icon: Icon, label, placeholder, type = "text", defaultValue = "" }) => (
  <div className="flex flex-col p-3 border border-gray-200 rounded-xl hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-all bg-white w-full">
    <span className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">{label}</span>
    <div className="flex items-center gap-2">
      {Icon && <Icon size={18} className="text-blue-500 flex-shrink-0" />}
      <input 
        type={type} 
        placeholder={placeholder} 
        defaultValue={defaultValue}
        className="w-full outline-none text-gray-800 font-medium bg-transparent truncate" 
      />
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Plane size={24} className="text-white transform -rotate-45" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              TripMaker
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 border-b-2 border-blue-600 pb-1"><Plane size={18}/> Flights</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors"><Building2 size={18}/> Hotels</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1 transition-colors"><Car size={18}/> Cabs</a>
            <button className="bg-blue-50 text-blue-600 font-semibold px-5 py-2.5 rounded-full hover:bg-blue-100 transition-colors flex items-center gap-2">
              <User size={18} />
              Login / Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-3 rounded-md text-base font-semibold text-blue-600 bg-blue-50 flex items-center gap-3">
              <Plane size={20}/> Flights
            </a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-3">
              <Building2 size={20}/> Hotels
            </a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center gap-3">
              <Car size={20}/> Cabs
            </a>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors flex justify-center items-center gap-2">
                <User size={20} />
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const SearchWidget = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [tripType, setTripType] = useState('round-trip');

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden -mt-10 md:-mt-20 relative z-10 border border-gray-100">
      {/* Tabs */}
      <div className="flex border-b border-gray-100 overflow-x-auto hide-scrollbar">
        <button 
          onClick={() => setActiveTab('flights')}
          className={`flex-1 py-4 px-6 flex justify-center items-center gap-2 font-semibold text-sm sm:text-base transition-all whitespace-nowrap ${activeTab === 'flights' ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'}`}
        >
          <Plane size={20} className={activeTab === 'flights' ? 'text-blue-600' : 'text-gray-400'}/> Flights
        </button>
        <button 
          onClick={() => setActiveTab('hotels')}
          className={`flex-1 py-4 px-6 flex justify-center items-center gap-2 font-semibold text-sm sm:text-base transition-all whitespace-nowrap ${activeTab === 'hotels' ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'}`}
        >
          <Building2 size={20} className={activeTab === 'hotels' ? 'text-blue-600' : 'text-gray-400'}/> Hotels
        </button>
        <button 
          onClick={() => setActiveTab('cabs')}
          className={`flex-1 py-4 px-6 flex justify-center items-center gap-2 font-semibold text-sm sm:text-base transition-all whitespace-nowrap ${activeTab === 'cabs' ? 'text-blue-600 border-b-4 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'}`}
        >
          <Car size={20} className={activeTab === 'cabs' ? 'text-blue-600' : 'text-gray-400'}/> Cabs
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {/* Flights Form */}
        {activeTab === 'flights' && (
          <div className="space-y-6">
            {/* Trip Type Radios */}
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                <input type="radio" name="trip" checked={tripType === 'one-way'} onChange={() => setTripType('one-way')} className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                One Way
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                <input type="radio" name="trip" checked={tripType === 'round-trip'} onChange={() => setTripType('round-trip')} className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                Round Trip
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                <InputField icon={Plane} label="From" placeholder="New York (JFK)" />
                {/* Swap button - hidden on very small screens for better layout */}
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md border border-gray-100 text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                  <ArrowRightLeft size={16} />
                </div>
                <InputField icon={MapPin} label="To" placeholder="London (LHR)" />
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <InputField icon={Calendar} label="Departure" type="date" defaultValue="2026-03-15" />
                <div className={`transition-opacity ${tripType === 'one-way' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                   <InputField icon={Calendar} label="Return" type="date" defaultValue="2026-03-25" />
                </div>
              </div>

              <div className="lg:col-span-1">
                <InputField icon={User} label="Travellers & Class" placeholder="2 Adults, Economy" />
              </div>
            </div>
          </div>
        )}

        {/* Hotels Form */}
        {activeTab === 'hotels' && (
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-1">
                <InputField icon={MapPin} label="City, Property Name or Location" placeholder="Paris, France" />
              </div>
              <InputField icon={Calendar} label="Check-In" type="date" defaultValue="2026-04-10" />
              <InputField icon={Calendar} label="Check-Out" type="date" defaultValue="2026-04-15" />
              <InputField icon={User} label="Rooms & Guests" placeholder="1 Room, 2 Adults" />
            </div>
          </div>
        )}

        {/* Cabs Form */}
        {activeTab === 'cabs' && (
          <div className="space-y-6">
             <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                <input type="radio" name="cab-trip" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                Outstation
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                <input type="radio" name="cab-trip" className="w-4 h-4 text-blue-600 focus:ring-blue-500"/>
                Airport Transfer
              </label>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <InputField icon={MapPin} label="Pickup Location" placeholder="Current Location" />
              <InputField icon={MapPin} label="Drop Location" placeholder="Enter Drop City" />
              <InputField icon={Calendar} label="Pickup Date" type="date" defaultValue="2026-02-23" />
              <InputField icon={Calendar} label="Pickup Time" type="time" defaultValue="10:00" />
            </div>
          </div>
        )}

        {/* Search Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
            <Search size={24} />
            Search {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

const DestinationCard = ({ image, name, country, price, rating, reviews }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <Star size={14} className="text-yellow-500 fill-yellow-500" />
        <span className="text-sm font-bold text-gray-800">{rating}</span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-500 flex items-center gap-1 text-sm"><MapPin size={14}/> {country}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500 font-medium">Starting from</p>
          <p className="text-lg font-bold text-blue-600">${price} <span className="text-sm font-normal text-gray-500">/person</span></p>
        </div>
        <button className="bg-blue-50 text-blue-600 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      price: "899",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bali",
      country: "Indonesia",
      price: "649",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kyoto",
      country: "Japan",
      price: "1099",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Swiss Alps",
      country: "Switzerland",
      price: "1299",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-blue-900 h-[500px] md:h-[600px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80" 
            alt="Travel Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-gray-50/100"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Explore the World Together
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-8 drop-shadow">
            Find awesome flights, hotels, and cabs for your next adventure. Book with confidence and travel the world.
          </p>
        </div>
      </div>

      {/* Main Search Widget Wrapper */}
      <div className="px-4 sm:px-6 lg:px-8">
        <SearchWidget />
      </div>

      {/* Featured Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
            <p className="text-gray-500 text-lg">Most loved places by travelers around the globe</p>
          </div>
          <button className="hidden sm:flex text-blue-600 font-semibold hover:text-blue-700 items-center gap-1">
            See all <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
        <button className="sm:hidden w-full mt-8 text-blue-600 font-semibold bg-blue-50 py-3 rounded-xl hover:bg-blue-100 transition-colors">
            See all destinations
        </button>
      </div>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 border-t border-gray-200 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-md">
              <Plane size={18} className="text-white transform -rotate-45" />
            </div>
            <span className="text-xl font-bold text-gray-900">TripMaker</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a>
          </div>
          <p className="text-sm text-gray-400">© 2026 TripMaker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}