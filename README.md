# Reanimated on web: stale sizes after a window resize

Run it with `npm install` and `npm run web`, then:

1. Make the browser window small.
2. Press "Open with a preset" and wait for the entering animation.
3. Enlarge the window and press "Close": the exit keeps the old size.
4. Make the window small, press "Open with a Keyframe" and wait 2 seconds.
5. Enlarge the window: the overlay keeps the old size while still open.
