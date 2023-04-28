const {DynamicVC_DatabaseManager} = require('../commands_modules/dynamic-voicechannel/dv_databaseFunctionManager.js');
module.exports = async (interaction) => {
    try {
        const interaction_Guild_id = interaction.guild.id;
        const dynamicVC_DbFunctionManager = new DynamicVC_DatabaseManager();
        await dynamicVC_DbFunctionManager.deleteDynamicVC_Collection(interaction_Guild_id)
        interaction.editReply({ content: 'DynamicVC已刪除' })
    } catch (err) {
        console.error(err);
    }
}