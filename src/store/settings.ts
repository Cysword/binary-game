import {defineStore} from 'pinia';
import {readonly} from 'vue';
import {useStorage} from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
  const showUserScore = useStorage('showUserScore', false);
  const showSwitchValues = useStorage('showSwitchValues', true);
  const trackMoves = useStorage('trackMoves', false);
  const limitMoves = useStorage('limitMoves', false);
  const allowSkips = useStorage('allowSkips', false);
  const gameTime = useStorage('gameTime', 2 * 60 * 1000);
  const amountOfBits = useStorage('amountOfBits', 8);
  const reversedOrder = useStorage('colourBlindMode', false);
  const keybindings = useStorage('keybindings', [
    '1', '2', '3', '4', 'q', 'w', 'e', 'r',
  ]);

  const updateSettings = (settings: {
    showUserScore?: boolean;
    showSwitchValues?: boolean;
    trackMoves?: boolean;
    limitMoves?: boolean;
    allowSkips?: boolean;
    gameTime?: number;
    amountOfBits?: number;
    reversedOrder?: boolean;
    resetValueWhenReached?: boolean;
    keybindings?: string[];
  }) => {
    showUserScore.value = settings.showUserScore ?? showUserScore.value;
    showSwitchValues.value = settings.showSwitchValues ?? showSwitchValues.value;
    trackMoves.value = settings.trackMoves ?? trackMoves.value;
    limitMoves.value = settings.limitMoves ?? limitMoves.value;
    allowSkips.value = settings.allowSkips ?? allowSkips.value;
    gameTime.value = settings.gameTime ?? gameTime.value;
    amountOfBits.value = settings.amountOfBits ?? amountOfBits.value;
    reversedOrder.value = settings.reversedOrder ?? reversedOrder.value;
    keybindings.value = settings.keybindings ?? keybindings.value;
  }

  return {
    showUserScore: readonly(showUserScore),
    showSwitchValues: readonly(showSwitchValues),
    trackMoves: readonly(trackMoves),
    limitMoves: readonly(limitMoves),
    allowSkips: readonly(allowSkips),
    gameTime: readonly(gameTime),
    amountOfBits: readonly(amountOfBits),
    reversedOrder: readonly(reversedOrder),
    keybindings: readonly(keybindings),
    updateSettings,
  };
});
