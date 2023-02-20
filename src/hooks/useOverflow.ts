function enableOverflowY() {
  document.body.style.overflowY = 'auto'
}

function disableOverflowY() {
  document.body.style.overflowY = 'hidden'
}

export function useOverflow() {
  return { enableOverflowY, disableOverflowY }
}
