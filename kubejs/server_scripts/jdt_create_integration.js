
ServerEvents.recipes(event => {
    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 2400,
        id: 'cobblexcreate:andesite_alloy_conversion',
        input: {
            Name: 'minecraft:polished_andesite'
        },
        output: {
            Name: 'create:andesite_alloy_block'
        },
        tierRequirement: 1
    }).id('kubejs:andesite_alloy_goospread');
});

ServerEvents.tags('item', event => {
    event.add('justdirethings:goo_revive_tier_1', 'minecraft:iron_ingot')
})
ServerEvents.tags('item', event => {
    event.add('justdirethings:goo_revive_tier_1', 'minecraft:iron_ingot')
})