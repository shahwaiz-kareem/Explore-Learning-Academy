import { getContactDetails } from "@/actions/contact.action";
import ContactDeleteBtn from "@/components/dashboard/ContactDeleteBtn";

const Page = async () => {
  const data = await getContactDetails();
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-gray-800 font-bold py-4 text-xl">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg relative rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {item.email}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> {item.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Message:</span>
              <span className="block max-h-24 overflow-y-scroll mt-1">
                {item.message}
              </span>
            </p>
            <ContactDeleteBtn _id={item._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
