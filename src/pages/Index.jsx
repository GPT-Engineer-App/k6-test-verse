import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Cat className="mx-auto h-16 w-16 text-indigo-600" />
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">All About Cats</h1>
          <p className="mt-4 text-xl text-gray-600">Discover the fascinating world of our feline friends</p>
        </div>
        
        <div className="mt-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="A cute cat" className="mx-auto object-cover rounded-lg shadow-lg w-full h-[400px]" />
          
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">Characteristics of Cats</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Independent and curious nature</li>
            <li>• Excellent hunters with sharp claws and teeth</li>
            <li>• Flexible bodies and great balance</li>
            <li>• Keen senses, especially hearing and night vision</li>
            <li>• Communicate through vocalizations, body language, and scent</li>
          </ul>
          
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">Popular Cat Breeds</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Siamese: Known for their distinctive coloring and vocal nature</li>
            <li>• Maine Coon: Large, friendly cats with long fur</li>
            <li>• Persian: Recognizable by their flat faces and long, fluffy coats</li>
            <li>• Bengal: Wild-looking cats with spotted or marbled coats</li>
            <li>• Scottish Fold: Characterized by their folded ears and round faces</li>
          </ul>
          
          <p className="mt-8 text-gray-600">Cats make wonderful companions and have been domesticated for thousands of years. Whether you're a cat owner or simply an admirer, these fascinating creatures continue to captivate us with their grace, independence, and affectionate nature.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
