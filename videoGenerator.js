const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

document.getElementById('generateVideo').addEventListener('click', async () => {
    const niche = document.getElementById('niche').value || "Tech";
    const maxLength = parseInt(document.getElementById('maxLength').value) || 60;

    document.getElementById('generateVideo').disabled = true;
    document.getElementById('generateVideo').innerText = "Generating...";

    // Get AI script text placeholder
    const scriptText = generateScript(niche); // from aiHookGenerator.js

    // Pick sample B-roll
    const bRoll = getSampleBRoll(); // from bRollLibrary.js
    const thumbnail = getSampleThumbnail(); // from bRollLibrary.js

    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(bRoll));
    ffmpeg.FS('writeFile', 'thumb.jpg', await fetchFile(thumbnail));

    // Simple FFmpeg command: overlay thumbnail text
    await ffmpeg.run(
        '-i', 'input.mp4',
        '-i', 'thumb.jpg',
        '-filter_complex', `overlay=10:10`,
        '-t', `${maxLength}`,
        'output.mp4'
    );

    const data = ffmpeg.FS('readFile', 'output.mp4');
    const video = document.getElementById('previewVideo');
    video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));

    document.getElementById('generateVideo').disabled = false;
    document.getElementById('generateVideo').innerText = "Generate Video";
});
