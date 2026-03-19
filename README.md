# Microsoft Account Rating Bot (Discord)

A minimal Discord bot that provides a **mock rating** for a Microsoft account (e.g., an email address). This project is intended as a starting point for building a more advanced rating system.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create and configure your environment file**

   Copy the sample and fill in your Discord bot credentials:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your bot token, client ID, and (optionally) a guild ID for command registration.

3. **Register slash commands**

   This project uses Discord slash commands. Run:

   ```bash
   npm run register-commands
   ```

   If you set `DISCORD_GUILD_ID`, commands will register faster (guild-scoped).

4. **Start the bot**

   ```bash
   npm start
   ```

## Usage

In Discord, type `/rate` and supply a Microsoft account (email). The bot responds with a mocked rating.

## Notes

- This project does **not** validate or access real Microsoft account data. It is a template for building a rating system.
- You can extend the logic in `src/commands/rate.js` to implement real scoring criteria.
