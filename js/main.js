document.addEventListener('DOMContentLoaded', async () => {
    AppState.videoElement   = document.getElementById('webcam');
    AppState.canvasElement  = document.getElementById('canvas');
    AppState.canvasCtx      = AppState.canvasElement.getContext('2d');
    AppState.threeContainer = document.getElementById('three-canvas');
    AppState.currentShapeIndex = CONFIG.availableShapes.indexOf(CONFIG.shape.type);

    initResizeHandler();
    initializeLayout();

    try {
        await initWebcam();
        initThreeJS();

        const hands = await initMediaPipeHands();
        hands.onResults(onResults);

        const cam = new Camera(AppState.videoElement, {
            onFrame: async () => {
                await hands.send({ image: AppState.videoElement });
            },
            width: 1920,
            height: 1080
        });

        cam.start();
    } catch (error) {
        console.error('Error starting application:', error);
    }
});
