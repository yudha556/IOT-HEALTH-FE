
export default function BackgroundBlur() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.28), rgba(37,99,235,0.10) 40%, transparent 60%)",
          filter: "blur(80px)",
          transform: "translate3d(0,0,0)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-8%",
          bottom: "8%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle at 70% 70%, rgba(37,99,235,0.18), rgba(37,99,235,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate3d(0,0,0)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
