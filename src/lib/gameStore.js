import { writable } from 'svelte/store';

// This tracks which evidence IDs the player has "clicked" or "discovered"
export const discoveredClues = writable([]);

// This tracks if the case is solved
export const caseSolved = writable(false);