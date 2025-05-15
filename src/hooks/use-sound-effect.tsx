
import { useState, useEffect, useCallback } from 'react';

type SoundEffectType = 'hover' | 'click' | 'success' | 'error' | 'bubbling' | 'fizz' | 'pour' | 'explosion';

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

export const useSoundEffect = (initialMuted = false) => {
  const [muted, setMuted] = useState(initialMuted);
  const [soundsLoaded, setSoundsLoaded] = useState(false);
  const [sounds, setSounds] = useState<SoundMap>({});

  // Create and preload sound effects
  useEffect(() => {
    const soundMap: SoundMap = {
      hover: new Audio('/sounds/hover.mp3'),
      click: new Audio('/sounds/click.mp3'),
      success: new Audio('/sounds/success.mp3'),
      error: new Audio('/sounds/error.mp3'),
      bubbling: new Audio('/sounds/bubbling.mp3'),
      fizz: new Audio('/sounds/fizz.mp3'),
      pour: new Audio('/sounds/pour.mp3'),
      explosion: new Audio('/sounds/explosion.mp3'),
    };

    // Set initial volume levels
    Object.values(soundMap).forEach(audio => {
      audio.volume = 0.3;
      // Preload audio
      audio.load();
    });

    // Specific volume adjustments
    if (soundMap.hover) soundMap.hover.volume = 0.1;

    setSounds(soundMap);
    setSoundsLoaded(true);

    // Cleanup function to remove audio elements
    return () => {
      Object.values(soundMap).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  // Play sound effect function
  const playSound = useCallback((type: SoundEffectType) => {
    if (muted || !soundsLoaded) return;

    const sound = sounds[type];
    if (sound) {
      // Stop and reset current sound before playing again
      sound.pause();
      sound.currentTime = 0;
      
      // Play the sound
      const playPromise = sound.play();
      
      // Handle potential play() rejection (browsers may block autoplay)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
    }
  }, [sounds, muted, soundsLoaded]);

  // Toggle mute function
  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
  }, []);

  return { playSound, muted, toggleMute };
};
