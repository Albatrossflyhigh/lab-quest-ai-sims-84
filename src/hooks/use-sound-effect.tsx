
import { useCallback } from "react";

type SoundType = "hover" | "click" | "success" | "error" | "notification";

const audioCache: Record<string, HTMLAudioElement> = {};

export const useSoundEffect = () => {
  const playSound = useCallback((type: SoundType) => {
    // Check if audio is enabled in local storage
    const audioEnabled = localStorage.getItem("vk-sound") !== "disabled";
    if (!audioEnabled) return;

    let soundPath = "";
    
    switch (type) {
      case "hover":
        soundPath = "/sounds/fizz.mp3";
        break;
      case "click":
        soundPath = "/sounds/pour.mp3";
        break;
      case "success":
        soundPath = "/sounds/bubbling.mp3";
        break;
      case "error":
        soundPath = "/sounds/explosion.mp3";
        break;
      case "notification":
        soundPath = "/sounds/fizz.mp3";
        break;
      default:
        return;
    }

    try {
      // Use cached audio if available
      if (!audioCache[soundPath]) {
        audioCache[soundPath] = new Audio(soundPath);
        audioCache[soundPath].volume = 0.3; // Lower volume for better UX
      }
      
      // Reset and play
      audioCache[soundPath].currentTime = 0;
      audioCache[soundPath].play().catch(err => {
        // Silently fail - browser may restrict autoplay
        console.log("Audio playback restricted:", err);
      });
    } catch (error) {
      console.error("Error playing sound effect:", error);
    }
  }, []);

  return { playSound };
};
