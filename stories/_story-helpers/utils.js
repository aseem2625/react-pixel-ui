export function freezeRoot() {
  document.getElementById('root').classList.add('scroll-fix');
}

export function unfreezeRoot() {
  document.getElementById('root').classList.remove('scroll-fix');
}
