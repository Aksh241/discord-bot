const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('Get a mock rating for a Microsoft account email.')
    .addStringOption(option =>
      option
        .setName('email')
        .setDescription('Microsoft account email to rate')
        .setRequired(true)),

  async execute(interaction) {
    const email = interaction.options.getString('email');

    // NOTE: This is a mock rating. No real Microsoft account data is accessed.
    const score = Math.floor(Math.random() * 5) + 1; // 1–5
    const stars = '⭐'.repeat(score) + '☆'.repeat(5 - score);

    const embed = new EmbedBuilder()
      .setTitle('Microsoft Account Rating')
      .addFields(
        { name: 'Account', value: `${email}`, inline: true },
        { name: 'Rating', value: `${stars} (${score}/5)`, inline: true }
      )
      .setFooter({ text: 'This rating is for demonstration purposes only.' });

    await interaction.reply({ embeds: [embed] });
  },
};
