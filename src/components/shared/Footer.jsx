const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-green-400 via-teal-400 to-blue-400 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium">
          Created with <span className="text-red-400 text-xl">❤️</span> by{" "}
          <span className="font-semibold">Shahwaiz Kareem</span>
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Mountain Coders. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
