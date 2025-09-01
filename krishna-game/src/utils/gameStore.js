import { create } from 'zustand';

const useGameStore = create((set, get) => ({
  // Game State
  currentLevel: 0,
  totalLevels: 5,
  isPlaying: false,
  isPaused: false,
  isCompleted: false,
  
  // Audio State
  audioEnabled: true,
  volume: 0.7,
  
  // UI State
  showUI: true,
  showInstructions: false,
  showCredits: false,
  
  // Progress
  completedLevels: [],
  currentScore: 0,
  totalScore: 0,
  
  // Actions
  setCurrentLevel: (level) => set({ currentLevel: level }),
  
  nextLevel: () => {
    const { currentLevel, totalLevels, completedLevels } = get();
    if (currentLevel < totalLevels - 1) {
      const newLevel = currentLevel + 1;
      set({ 
        currentLevel: newLevel,
        completedLevels: [...completedLevels, currentLevel]
      });
    }
  },
  
  prevLevel: () => {
    const { currentLevel } = get();
    if (currentLevel > 0) {
      set({ currentLevel: currentLevel - 1 });
    }
  },
  
  startGame: () => set({ isPlaying: true, isPaused: false }),
  
  pauseGame: () => set({ isPaused: true }),
  
  resumeGame: () => set({ isPaused: false }),
  
  completeGame: () => set({ isCompleted: true, isPlaying: false }),
  
  toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
  
  setVolume: (volume) => set({ volume }),
  
  toggleUI: () => set((state) => ({ showUI: !state.showUI })),
  
  toggleInstructions: () => set((state) => ({ showInstructions: !state.showInstructions })),
  
  toggleCredits: () => set((state) => ({ showCredits: !state.showCredits })),
  
  addScore: (points) => set((state) => ({ 
    currentScore: state.currentScore + points,
    totalScore: state.totalScore + points
  })),
  
  resetGame: () => set({
    currentLevel: 0,
    isPlaying: false,
    isPaused: false,
    isCompleted: false,
    completedLevels: [],
    currentScore: 0,
    totalScore: 0
  }),
  
  // Getters
  getProgress: () => {
    const { currentLevel, totalLevels } = get();
    return (currentLevel / (totalLevels - 1)) * 100;
  },
  
  getLevelData: () => {
    const { currentLevel } = get();
    const levels = [
      { name: "नीलमणि तनु", description: "Divine Blue Form", verse: 1 },
      { name: "मुख छवि", description: "Beautiful Face", verse: 3 },
      { name: "मुकुट शोभा", description: "Crown Adornment", verse: 4 },
      { name: "नेत्र महिमा", description: "Eyes Glory", verse: 7 },
      { name: "चरण कमल", description: "Lotus Feet", verse: 11 }
    ];
    return levels[currentLevel] || levels[0];
  }
}));

export default useGameStore;
