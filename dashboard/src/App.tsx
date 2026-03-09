import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { ShieldAlert, Globe, Activity } from 'lucide-react';
import './App.css';

// 3D Cyber Globe Component
const CyberGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 48, 48]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe={true}
        transparent={true}
        opacity={0.3}
        emissive="#0044ff"
        emissiveIntensity={0.8}
      />

      {/* Inner core */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#001133" transparent opacity={0.8} />
      </mesh>
    </mesh>
  );
};

// Main Dashboard App
function App() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    fetch('/zencefil_report.json')
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(err => console.error("Could not load report data:", err));
  }, []);

  return (
    <div className="w-screen h-screen bg-[#020205] text-[#00ffcc] font-mono overflow-hidden relative selection:bg-[#00ffcc] selection:text-black">

      {/* 3D Background / Holo Display */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00ffff" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={1} />
          <CyberGlobe />
          <OrbitControls enableZoom={true} maxDistance={15} minDistance={4} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Cyber UI Overlay grid */}
      <div className="relative z-10 w-full h-full p-6 lg:p-10 pointer-events-none flex flex-col">

        {/* Header */}
        <header className="flex justify-between items-end border-b-2 border-[#00ffcc]/40 pb-4 mb-6 relative">
          <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-[#00ffcc] shadow-[0_0_10px_#00ffcc]"></div>

          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex items-center justify-center border-2 border-[#00ffcc] rounded-full shadow-[0_0_15px_rgba(0,255,204,0.5)] bg-[#00ffcc]/10 backdrop-blur-md">
              <Activity className="w-6 h-6 text-[#00ffcc] animate-pulse" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-widest text-[#00ffcc] drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]">
                ZENCEFILSCAN
              </h1>
              <div className="text-sm tracking-[0.3em] opacity-80 mt-1">HOLO-COMMAND CENTER</div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-sm">
            <div className="bg-[#00ffcc]/10 px-4 py-1.5 rounded-sm border border-[#00ffcc]/50 backdrop-blur-md flex items-center gap-3">
              <span className="opacity-70">SYSTEM STATUS:</span>
              <span className="text-[#00ffcc] font-bold blink shadow-[#00ffcc]">ONLINE & ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-[#00ffcc] animate-ping ml-1"></div>
            </div>
          </div>
        </header>

        {/* Content layout: Left stats, right threats */}
        {report ? (
          <div className="flex-1 flex justify-between items-start pt-4">

            {/* Left Column: Target Info */}
            <div className="flex flex-col gap-6 w-[350px]">
              <div className="bg-[#050b14]/70 p-6 border border-[#00ffcc]/30 backdrop-blur-xl pointer-events-auto rounded-xl shadow-[0_0_20px_rgba(0,255,204,0.15)] relative overflow-hidden group hover:border-[#00ffcc]/60 transition-colors">
                {/* scanning laser effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent opacity-50 animate-[scan_2s_ease-in-out_infinite]" style={{ boxShadow: "0 5px 15px #00ffcc" }}></div>

                <h2 className="text-xl font-bold mb-6 flex items-center gap-3 border-b border-[#00ffcc]/20 pb-3 uppercase tracking-wider">
                  <Globe className="w-5 h-5 text-[#00ffcc]" /> Intelligence
                </h2>

                <div className="space-y-6">
                  <div className="group/item">
                    <span className="text-[#00ffcc]/60 text-xs tracking-widest block mb-1">TARGET DOMAIN</span>
                    <div className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
                      <span className="text-[#00ffcc] opacity-50">&gt;</span> {report.target || 'N/A'}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#00ffcc]/60 text-xs tracking-widest block mb-1">SCAN DURATION</span>
                    <div className="text-xl text-white font-mono">{report.scan_time_seconds ? `${Number(report.scan_time_seconds).toFixed(2)}s` : 'Unknown'}</div>
                  </div>
                  <div className="bg-red-900/20 -mx-6 -mb-6 p-6 border-t border-red-500/30 mt-2">
                    <span className="text-red-400 text-xs tracking-widest block mb-1">TOTAL VULNS DETECTED</span>
                    <div className="text-5xl font-black text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">{report.total_vulns || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vulnerability Feed */}
            <div className="flex flex-col w-[450px] h-[calc(100vh-200px)]">
              <div className="bg-[#050b14]/70 p-6 border border-[#00ffcc]/30 backdrop-blur-xl flex-1 flex flex-col pointer-events-auto rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] relative">

                <h2 className="text-xl font-bold mb-4 flex items-center gap-3 border-b border-[#00ffcc]/20 pb-3 uppercase tracking-wider text-yellow-400">
                  <ShieldAlert className="w-6 h-6 shrink-0" /> Threat Matrix
                </h2>

                <div className="overflow-y-auto pr-3 space-y-4 flex-1 custom-scrollbar">
                  {report.vulnerabilities?.length > 0 ? (
                    report.vulnerabilities.map((vuln: string, idx: number) => (
                      <div key={idx} className="bg-[#1a0505]/80 border-l-4 border-red-500 p-4 rounded text-sm shadow-[0_4px_10px_rgba(255,0,0,0.1)] hover:bg-red-900/30 transition-all hover:translate-x-1 duration-300">
                        <div className="text-red-500 font-bold mb-1 flex items-center justify-between">
                          <span>[CRITICAL ALERT]</span>
                          <span className="text-xs opacity-50">VULN_{idx.toString().padStart(3, '0')}</span>
                        </div>
                        <div className="text-red-100 font-mono leading-relaxed opacity-90">{vuln.split('*').join(' -> ')}</div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-green-500 opacity-80 gap-4">
                      <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center text-3xl">✓</div>
                      <div className="tracking-widest text-center">NO CRITICAL THREATS<br />DETECTED IN SCOPE</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center flex-col gap-6">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-[#00ffcc]/20 border-t-[#00ffcc] rounded-full animate-spin"></div>
              <div className="w-16 h-16 border-4 border-[#00ffcc]/20 border-b-[#00ffcc] rounded-full animate-[spin_1.5s_reverse_infinite] absolute"></div>
            </div>
            <div className="tracking-widest text-xl animate-pulse drop-shadow-[0_0_5px_#00ffcc]">AWAITING TELEMETRY...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
