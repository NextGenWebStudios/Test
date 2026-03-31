const sampleBrolls = [
    'assets/sampleBrolls/clip1.mp4',
    'assets/sampleBrolls/clip2.mp4'
];

const sampleThumbnails = [
    'assets/sampleThumbnails/thumb1.jpg',
    'assets/sampleThumbnails/thumb2.jpg'
];

function getSampleBRoll(){
    return sampleBrolls[Math.floor(Math.random()*sampleBrolls.length)];
}

function getSampleThumbnail(){
    return sampleThumbnails[Math.floor(Math.random()*sampleThumbnails.length)];
}
