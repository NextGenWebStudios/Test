function generateScript(niche){
    const hooks = [
        `Top 5 ${niche} hacks you need to know!`,
        `The ultimate guide to ${niche}`,
        `How to master ${niche} in 7 days`,
        `Don't start ${niche} before watching this!`,
        `Secrets of successful ${niche} creators`
    ];
    return hooks[Math.floor(Math.random()*hooks.length)];
}
