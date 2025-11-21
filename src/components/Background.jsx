import Spline from '@splinetool/react-spline';

function Background() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0A1F] to-[#22144A]" />

      {/* Nebula gradient blobs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-60 pointer-events-none"
           style={{background: 'radial-gradient(closest-side, rgba(162,89,255,0.45), rgba(10,10,25,0.0))'}} />
      <div className="absolute top-10 right-[-60px] h-72 w-72 rounded-full blur-3xl opacity-50 pointer-events-none"
           style={{background: 'radial-gradient(closest-side, rgba(0,224,255,0.35), rgba(10,10,25,0.0))'}} />

      {/* Spline hero object */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-80 opacity-70">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent,rgba(0,0,0,0.5))]" />
    </div>
  );
}

export default Background;
