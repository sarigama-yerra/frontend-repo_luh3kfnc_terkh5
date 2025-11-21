import Background from './components/Background';
import TopBar from './components/TopBar';
import QuickStats from './components/QuickStats';
import OutfitCard from './components/OutfitCard';
import WeatherWidget from './components/WeatherWidget';
import QuickAccess from './components/QuickAccess';
import BottomNav from './components/BottomNav';
import FAB from './components/FAB';

function App() {
  return (
    <div className="min-h-screen relative text-white">
      <Background />

      {/* Screen container (mobile width) */}
      <div className="relative mx-auto max-w-md min-h-screen">
        <TopBar />
        <QuickStats />
        <OutfitCard />
        <WeatherWidget />
        <QuickAccess />

        <FAB />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
