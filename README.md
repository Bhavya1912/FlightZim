# FlightZim Professional Flight Simulator

A playable full-stack flight simulator prototype inspired by Microsoft Flight Simulator, X-Plane, and Infinite Flight.

## Included

- React + TypeScript frontend powered by Three.js rendering and Zustand state.
- Playable aircraft physics: lift, drag, thrust, weight, stall/overspeed, pitch/roll/yaw, gear, flaps, brakes, turbulence, crosswind, fuel burn, climb/descent, and aircraft weight/performance differences.
- Professional aviation UI: PFD, speed/altitude tapes, FMC/navigation panel, weather, ATC, mission, training, career score, AI traffic, and camera modes.
- Aircraft fleet: Cessna 172, Cirrus SR22, Diamond DA40, Embraer E175, CRJ900, A320neo, A350, A380, 737 MAX 8, 787-9, 777-300ER, 747-8F, and Airbus Beluga.
- Backend: Node.js + Express REST APIs, WebSocket multiplayer endpoint, PostgreSQL schema.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL and press **Start Flight**.

## Controls

- `F` / `V`: throttle up/down
- `W` / `S`: pitch
- `A` / `D`: roll
- `Q` / `E`: rudder/yaw
- `G`: gear
- `P` / `O`: flaps up/down
- `B`: brakes
- `C`: camera
- `R`: reset aircraft

## Backend

```bash
npm run server
```

REST API runs on `http://localhost:3001`; multiplayer WebSocket runs at `/multiplayer`.
Set `DATABASE_URL` to enable PostgreSQL connectivity checks and use `db/schema.sql` as the baseline schema.
