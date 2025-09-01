import { Howl } from 'howler';

class AudioManager {
  constructor() {
    this.sounds = {};
    this.music = null;
    this.isEnabled = true;
    this.volume = 0.5;
    
    this.initSounds();
  }

  initSounds() {
    // Background music (ambient spiritual music)
    this.music = new Howl({
      src: ['https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'], // Placeholder
      loop: true,
      volume: this.volume,
      html5: true
    });

    // Sound effects
    this.sounds = {
      click: new Howl({
        src: ['https://www.soundjay.com/misc/sounds/bell-ringing-01.wav'], // Placeholder
        volume: this.volume * 0.7
      }),
      levelComplete: new Howl({
        src: ['https://www.soundjay.com/misc/sounds/bell-ringing-02.wav'], // Placeholder
        volume: this.volume * 0.8
      }),
      divine: new Howl({
        src: ['https://www.soundjay.com/misc/sounds/bell-ringing-03.wav'], // Placeholder
        volume: this.volume * 0.6
      })
    };
  }

  playMusic() {
    if (this.isEnabled && this.music) {
      this.music.play();
    }
  }

  stopMusic() {
    if (this.music) {
      this.music.stop();
    }
  }

  playSound(soundName) {
    if (this.isEnabled && this.sounds[soundName]) {
      this.sounds[soundName].play();
    }
  }

  setVolume(volume) {
    this.volume = volume;
    if (this.music) {
      this.music.volume(volume);
    }
    Object.values(this.sounds).forEach(sound => {
      sound.volume(volume * 0.7);
    });
  }

  toggleAudio() {
    this.isEnabled = !this.isEnabled;
    if (!this.isEnabled) {
      this.stopMusic();
    } else {
      this.playMusic();
    }
    return this.isEnabled;
  }

  destroy() {
    this.stopMusic();
    Object.values(this.sounds).forEach(sound => {
      sound.unload();
    });
  }
}

export default new AudioManager();
