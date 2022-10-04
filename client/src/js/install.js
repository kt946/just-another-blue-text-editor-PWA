const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // stash the event so it can be triggered later
  window.deferredPrompt = event;
  // display install button to user
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    // deferred prompt isn't available
    return;
  }

  // show install prompt
  promptEvent.prompt();

  // prompt() can only be called once
  window.deferredPrompt = null;
  
  // disable install button
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'App has been installed!', event);
});
