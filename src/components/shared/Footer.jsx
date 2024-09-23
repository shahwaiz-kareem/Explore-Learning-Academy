const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-teal-400 via-teal-400 to-blue-400text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium">
          Developed with <span className="text-red-400 text-xl">❤️</span> by{" "}
          <span className="font-semibold">Shahwaiz Kareem</span>
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Explore Learning Academy Yasin. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
