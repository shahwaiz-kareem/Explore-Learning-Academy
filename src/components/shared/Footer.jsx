const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00a1b4] via-[#00a8b4] to-[#00d899] text-white py-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-medium">
          Developed with <span className="text-red-400 text-base">❤️</span> by{" "}
          <span className="font-semibold">Shahwaiz Kareem</span>
        </p>
        <p className="text-sm  mt-2">🖂 Email: shah.dev23k@gmail.com</p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Explore Learning Academy Yasin. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
