export default function Listings() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="bg-[#1B2D4F] pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Current Listings</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg">
            Find your next property across Central &amp; Eastern Kentucky
          </p>
        </div>
      </div>

      <div className="flex-1 w-full">
        <iframe
          src="https://highpointky.idxbroker.com/idx/map/mapsearch"
          title="High Point Realty MLS Listings"
          className="w-full"
          style={{ height: "calc(100vh - 180px)", minHeight: "600px", border: "none" }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
