import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Preloader from "../components/NavBar";
import CustomFooter from "../components/Footer";

const animationUrl = "https://assets10.lottiefiles.com/packages/lf20_q5yrau.json";

export default function NotFoundPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationUrl)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center m-32 justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )}
          <h2 className="text-3xl font-bold mt-4 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mt-2">
            We couldn’t find the page you were looking for.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </main>

      <CustomFooter />
    </div>
  );
}
