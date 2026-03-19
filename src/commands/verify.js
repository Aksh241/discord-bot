const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Verify Microsoft account credentials.')
    .addStringOption(option =>
      option
        .setName('email')
        .setDescription('Microsoft account email')
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName('password')
        .setDescription('Account password')
        .setRequired(true)),

  async execute(interaction) {
    const email = interaction.options.getString('email');
    const password = interaction.options.getString('password');

    // Verification functions
    const verifyEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const verifyPassword = (password) => {
      return password && password.length >= 8;
    };

    const isEmailValid = verifyEmail(email);
    const isPasswordValid = verifyPassword(password);
    const allValid = isEmailValid && isPasswordValid;

    // Create verification table
    const embed = new EmbedBuilder()
      .setTitle('Account Verification Results')
      .setColor(allValid ? 0x00FF00 : 0xFF0000)
      .addFields(
        {
          name: 'Credentials',
          value: `\`\`\`
Email:    ${email}
Password: ${'*'.repeat(password.length)}
\`\`\``,
          inline: false
        },
        {
          name: 'Verification Status',
          value: `\`\`\`
Email Valid:      ${isEmailValid ? '✓' : '✗'}
Password Valid:   ${isPasswordValid ? '✓' : '✗'}
Overall Status:   ${allValid ? '✓ VERIFIED' : '✗ FAILED'}
\`\`\``,
          inline: false
        }
      )
      .setFooter({ text: 'Verification results for demonstration purposes only.' });

    await interaction.reply({ embeds: [embed] });
  },
};
