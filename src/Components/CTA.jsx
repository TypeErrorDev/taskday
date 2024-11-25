const CTA = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-16">Track Projects with</h1>
      <span className="text-4xl font-bold text-purple-600">Confidence</span>
      <div className="flex justify-center items-center text-wrap w-[400px] text-center mt-5 text-lg">
        <p className="text-slate-500 leading-loose">
          Streamline your workflow, boost productivity, and never miss a
          deadline. The ultimate project tracking solution for developers and
          teams.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-purple-600 text-white font-semibold h-9 w-96 rounded-md">
          Get Started Free <span className="font-bold h-4 w-3">→</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;
