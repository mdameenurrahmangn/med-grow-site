import React from "react";
import healthcareGrowthImage from "../assets/images/1234.png";

const orbitIcons = [
  ["instagram", "Instagram"],
  ["facebook", "Facebook"],
  ["linkedin", "LinkedIn"],
  ["youtube", "YouTube"],
  ["whatsapp", "WhatsApp"],
  ["x", "X"],
];

const SocialIcon = ({ type }) => {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="instagramOrbitGradient" x1="4" x2="28" y1="28" y2="4">
            <stop stopColor="#feda75" />
            <stop offset="0.36" stopColor="#fa7e1e" />
            <stop offset="0.64" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="7" y="7" width="18" height="18" rx="5" fill="none" stroke="url(#instagramOrbitGradient)" strokeWidth="3" />
        <circle cx="16" cy="16" r="4.1" fill="none" stroke="url(#instagramOrbitGradient)" strokeWidth="3" />
        <circle cx="21.5" cy="10.5" r="1.6" fill="#d62976" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#1877f2" />
        <path d="M17.8 25v-7.5h2.5l.4-3h-2.9v-1.9c0-.9.3-1.5 1.6-1.5H21V8.4c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.3 1.6-4.3 4.5v1.8h-3v3h3V25h3.7Z" fill="#fff" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" rx="3.5" fill="#0a66c2" />
        <path d="M10.1 14h3.1v9h-3.1v-9Zm1.6-4.6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM15.2 14h3v1.2c.5-.8 1.5-1.5 3-1.5 3.1 0 3.7 2.1 3.7 4.8V23h-3.1v-4c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.2V23h-3.1v-9Z" fill="#fff" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4.5" y="8.5" width="23" height="15" rx="4.2" fill="#ff0000" />
        <path d="M14 12.5v7l6-3.5-6-3.5Z" fill="#fff" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="12.5" fill="#25d366" />
        <path d="M10.1 23.1l1-3.5a7.1 7.1 0 1 1 2.7 2.6l-3.7.9Z" fill="#fff" />
        <path d="M20.2 17.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1a5.8 5.8 0 0 1-2.9-2.5c-.2-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.1.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.5-.3Z" fill="#25d366" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="#050505" />
      <path d="M10 9h4.2l3.2 4.2L21.1 9H24l-5.2 6 5.5 8h-4.2l-3.5-4.9L12.3 23H9.4l5.8-6.6L10 9Zm2.3 1.7 8.6 10.6h1L13.2 10.7h-.9Z" fill="#fff" />
    </svg>
  );
};

const SocialMarketingVisual = () => {
  return (
    <div className="social-visual relative aspect-square w-full">
      <div className="social-orbit-system pointer-events-none absolute left-1/2 top-[51%] z-20">
        <div className="social-orbit-ring social-orbit-ring-main" />
        <div className="social-orbit-ring social-orbit-ring-soft" />
        <div className="social-orbit-track">
          {orbitIcons.map(([type, name], index) => (
            <span
              aria-label={name}
              className="social-orbit-item"
              key={name}
              style={{ "--orbit-angle": `${index * (360 / orbitIcons.length)}deg` }}
            >
              <span className="social-orbit-chip">
                <SocialIcon type={type} />
              </span>
            </span>
          ))}
        </div>
      </div>

      <img
        src={healthcareGrowthImage}
        alt="Healthcare growth doctor visual"
        className="social-person-img relative top-10 z-40 mx-auto h-full w-[88%] object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:top-12 lg:top-16"
      />
    </div>
  );
};

export default SocialMarketingVisual;
