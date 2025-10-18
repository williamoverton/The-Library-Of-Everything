import Link from "next/link";

export default function Home() {
  const suggestedLinks = [
    {
      title: "The History of the Universe",
      link: "/history/the-history-of-the-universe",
      category: "History",
      description: "From the Big Bang to the present day",
    },
    {
      title: "Serverless Computing",
      link: "/technology/serverless-computing",
      category: "Technology",
      description: "The future of cloud computing",
    },
    {
      title: "Online Gaming",
      link: "/entertainment/online-gaming",
      category: "Entertainment",
      description: "Virtual worlds and digital adventures",
    },
    {
      title: "The Great British Bake Off",
      link: "/entertainment/television/the-great-british-bake-off",
      category: "Television",
      description: "Britain's most beloved baking competition",
    },
    {
      title: "Rainbows",
      link: "/nature/rainbows",
      category: "Nature",
      description: "Nature's most beautiful optical phenomenon",
    },
    {
      title: "Dachshunds",
      link: "/animals/dogs/dachshunds",
      category: "Animals",
      description: "The lovable sausage dogs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 -m-5">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            The Library Of Everything
          </h1>
          <p className="text-gray-600 mb-4">
            AI-generated content on any topic. Pages created on-demand.
          </p>
        </div>

        {/* Featured Links Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Explore Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestedLinks.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {link.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </div>
                  <svg
                    className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Navigate to any URL path and our AI will generate content instantly.
          </p>
          <div className="bg-gray-50 rounded p-3">
            <div className="text-xs font-medium text-gray-700 mb-1">
              Try these examples:
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>/space/black-holes</div>
              <div>/cooking/perfect-pasta</div>
              <div>/philosophy/meaning-of-life</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
