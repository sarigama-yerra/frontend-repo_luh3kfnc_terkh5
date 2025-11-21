import { CloudSun } from 'lucide-react';

function WeatherWidget() {
  return (
    <div className="px-5 mt-4">
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl">
        <div>
          <div className="text-xs text-[#D1D1D1]">San Francisco, CA</div>
          <div className="text-white text-xl font-semibold">18° C</div>
        </div>
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00E0FF]/30 to-[#3FFFAC]/30 border border-white/10">
          <CloudSun className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
