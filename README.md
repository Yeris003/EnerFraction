# EnerFraction

EnerFraction is a collaborative prototype for making renewable-energy infrastructure easier to explore and finance through fractional ownership. This repository currently contains a frontend-only investor dashboard with clearly labeled illustrative data. It does not connect to a wallet, accept funds, or represent an investment offer.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Check the production bundle with `npm run build`, or preview it with `npm run preview`.

## Project map

- `src/App.jsx`: dashboard views, demo data, filtering, and interactions.
- `src/index.css`: design system and responsive layout.
- `docs/ARCHITECTURE.md`: current frontend boundary and planned blockchain integration.
- `docs/TEAM_WORKFLOW.md`: suggested work split and shared project-board workflow.
- `CONTRIBUTING.md`: Git branches, commits, pull requests, and conflict handling.

## Team setup

1. Create an empty GitHub repository named `EnerFraction` (do not initialize it with a README) and add your partner as a collaborator with write access.
2. From this folder, publish the local project. Replace `<owner>` with your GitHub account or organization:

	```sh
	git branch -M main
	git add .
	git commit -m "feat: scaffold EnerFraction dashboard"
	git remote add origin https://github.com/<owner>/EnerFraction.git
	git push -u origin main
	```

3. Your partner clones the repository and installs dependencies:

	```sh
	git clone https://github.com/<owner>/EnerFraction.git
	cd EnerFraction
	npm install
	npm run dev
	```

4. Use short-lived branches and pull requests for normal changes. For a pairing session, both collaborators install the VS Code Live Share extension; the host starts a session and invites the partner. Live Share is for real-time co-editing, while GitHub remains the source of truth for durable changes.
5. Track ownership, acceptance criteria, and blockers in the shared GitHub Project board. See `docs/TEAM_WORKFLOW.md` for a suggested task split.

See `CONTRIBUTING.md` and `docs/TEAM_WORKFLOW.md` before splitting work. Never commit wallet secrets, private keys, or real investor information.
