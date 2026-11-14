# TODO — Later

Ideas and improvements we decided to postpone.

- [ ] **Guaranteed path to every diamond** — the random level generator must make sure
      the player can always reach all diamonds (needs a path-checking algorithm, e.g. flood fill).
- [ ] **Naming consistency** — `KONZEPT.md` uses `DIRT`, the code uses Ground (`'G'`).
      Pick one name and use it everywhere.
- [ ] **Replace single-letter tile codes** (`'W'`, `'E'`, `'G'`, ...) with named constants
      (`WALL`, `EMPTY`, `GROUND`, ...) — letters are ambiguous and run out quickly (`D` = Diamond or Dirt?).
