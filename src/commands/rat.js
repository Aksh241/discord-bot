const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rat')
    .setDescription('Get information about RAT (Remote Access Trojan) hacking methods.')
    .addStringOption(option =>
      option
        .setName('target')
        .setDescription('Target system or IP to analyze')
        .setRequired(true)),

  async execute(interaction) {
    const target = interaction.options.getString('target');

    // Mock RAT analysis - for educational purposes only
    const methods = [
      'Social Engineering',
      'Phishing Attacks',
      'Malware Distribution',
      'Exploit Vulnerabilities',
      'Brute Force Attacks'
    ];

    const randomMethod = methods[Math.floor(Math.random() * methods.length)];
    const riskLevel = Math.floor(Math.random() * 5) + 1;
    const riskStars = '🔴'.repeat(riskLevel) + '⚪'.repeat(5 - riskLevel);

    const embed = new EmbedBuilder()
      .setTitle('RAT Hacking Method Analysis')
      .setColor(0xFF0000)
      .addFields(
        { name: 'Target', value: `${target}`, inline: true },
        { name: 'Recommended Method', value: `${randomMethod}`, inline: true },
        { name: 'Risk Level', value: `${riskStars} (${riskLevel}/5)`, inline: true }
      )
      .setFooter({ text: '⚠️ This is for educational purposes only. Unauthorized hacking is illegal.' });

    await interaction.reply({ embeds: [embed] });
  },
};
