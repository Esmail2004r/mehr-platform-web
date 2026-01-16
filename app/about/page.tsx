export default function About() {
  const districts = [
    'Medical District',
    'Engineering District',
    'Education District',
    'Industrial District',
    'Virtual Conference Hall',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Districts</h1>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {districts.map((district, index) => (
          <li 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{district}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
