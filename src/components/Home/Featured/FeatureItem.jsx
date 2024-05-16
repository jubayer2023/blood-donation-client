const FeatureItem = ({ item }) => {
  return (
    <div className="bg-rose-100 w-full p-4 rounded-lg shadow-lg shadow-yellow-950 text-center space-y-4">
      <h3 className="text-lg font-bold text-neutral-800">{item.title}</h3>
      <p className="text-sm font-semibold ">{item.description}</p>
    </div>
  );
};

export default FeatureItem;
