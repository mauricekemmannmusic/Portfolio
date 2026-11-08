// Sorgt dafür, dass nie zwei Tonquellen gleichzeitig laufen:
// Startet die Playlist, wird das Landevideo stummgeschaltet – und umgekehrt.

type Source = "playlist" | "hero-video"

const EVENT = "audio:start"

export function announceAudioStart(source: Source) {
  window.dispatchEvent(new CustomEvent<Source>(EVENT, { detail: source }))
}

export function onOtherAudioStart(self: Source, callback: () => void) {
  const handler = (e: Event) => {
    if ((e as CustomEvent<Source>).detail !== self) callback()
  }
  window.addEventListener(EVENT, handler)
  return () => window.removeEventListener(EVENT, handler)
}
