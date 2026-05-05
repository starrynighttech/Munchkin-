export default function SmokeLayout({ children }) {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>

      {/* 🎬 FULL SCREEN SMOKE VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2
        }}
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* 🌑 FULL SCREEN DARK OVERLAY */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.65)",
          zIndex: -1
        }}
      />

      {/* 🧊 CONTENT LAYER */}
      <div style={{ position: "relative", zIndex: 1, height: "100vh", overflow: "auto" }}>
        {children}
      </div>

    </div>
  )
}
