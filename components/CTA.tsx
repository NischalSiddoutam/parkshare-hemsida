import { Button } from "@/components/ui/button";
import { Camera, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-orange-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Börja parkera smart med P Link
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
            Träffa Parky och upptäck framtidens parkering. Från skyltskanning till belöningar – allt i en app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Ladda ner P Link
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Hyr ut din plats
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">AI-Assistent</div>
              <p className="text-emerald-100">Parky hjälper dig 24/7</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Digital Åtkomst</div>
              <p className="text-emerald-100">Smarta lås och automatisering</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Belöningar</div>
              <p className="text-emerald-100">Tjäna poäng för hållbara val</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
