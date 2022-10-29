const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez le type de ticket à créer.')
					.addOptions([
						{
							label: '💌 Aide',
							description: 'Ouvrez un ticket pour beneficier d\'un support. ',
							value: 'Aide',
						},
						{
							label: '📃 illégal',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'Illégal',
						},
						{
							label: '📃 Légal',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'Légal',
						},
						{
							label: '🚓 Boutique',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'Boutique',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Ouvrir un ticket',
                description: '**Quelle est la raison de votre ticket ?**\nVeuillez choisir le type de ticket que vous souhaitez ouvrir.',
                color: "RED", 
                footer: {text: 'Arpex #0001 '}
            }],
            components: [row]
        })
    }
}
