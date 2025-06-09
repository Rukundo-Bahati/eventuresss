import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";

interface UserCardProps {
  title: string;
  description: string;
  seats: number;
  date: string;
  image: string;
  price: number;
  location: string;
  category: string;
}

const UserCard: React.FC<UserCardProps> = ({
  title,
  description,
  seats,
  date,
  image,
  price,
  location,
  category,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${price}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="h-5 w-5 mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UsersIcon className="h-5 w-5 mr-2" />
            <span>{seats} seats available</span>
          </div>
        </div>

        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition duration-300 ${
            seats > 0
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={seats === 0}
        >
          {seats > 0 ? "Book Now" : "Sold Out"}
        </button>
      </div>
    </motion.div>
  );
};

export default UserCard;
