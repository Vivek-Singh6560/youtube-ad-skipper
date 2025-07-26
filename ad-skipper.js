let userInteracted = false;

// Detect user interaction (once)
document.addEventListener('click', () => {
  userInteracted = true;
}, { once: true });

document.addEventListener('keydown', () => {
  userInteracted = true;
}, { once: true });

function skipAds() {
  const skipBtn = document.querySelector('.ytp-ad-skip-button');
  if (skipBtn) {
    skipBtn.click();
    console.log("✅ Skip button clicked");
  }

  const overlayAdClose = document.querySelector('.ytp-ad-overlay-close-button');
  if (overlayAdClose) {
    overlayAdClose.click();
    console.log("✅ Overlay ad closed");
  }

  const video = document.querySelector('video');
  const adContainer = document.querySelector('.ad-showing');

  if (video && adContainer) {
    // Mute and fast-forward
    video.muted = true;
    if (video.duration - video.currentTime > 1) {
      video.currentTime = video.duration;
      console.log("⏩ Fast-forwarded ad");
    }
  } else if (video && userInteracted) {
    // Only unmute if the user interacted
    video.muted = false;
    console.log("🔊 Unmuted video after user interaction");
  }
}

// Run every 500ms
setInterval(skipAds, 500);
