// src/utils/storage.ts

// Generic localStorage helper for mock persistence

export function saveToStorage(key: string, data: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function getFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const stored = localStorage.getItem(key);
  if (!stored) return fallback;
  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("Error parsing localStorage data:", err);
    return fallback;
  }
}

export function removeFromStorage(key: string) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}
