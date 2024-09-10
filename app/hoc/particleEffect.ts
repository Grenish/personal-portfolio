interface Particle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    originX: number;
    originY: number;
}

interface ParticleOptions {
    fontSize: number;
    fontFamily: string;
    color: string;
    particleSize: number;
    mode?: "integrate" | "disintegrate";
}

export function createParticles(
    ctx: CanvasRenderingContext2D,
    element: HTMLElement,
    canvas: HTMLCanvasElement,
    options: ParticleOptions
) {
    const particles: Particle[] = [];
    const text = element.innerText;
    const { fontSize, fontFamily, color, particleSize, mode = "integrate" } = options;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas text styles
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    ctx.fillText(text, 50, 50);

    // Get image data with willReadFrequently (type-casting to avoid TS error)
    const textData = (ctx as any).getImageData(50, 50, canvas.width, canvas.height, { willReadFrequently: true });
    const pixels = textData.data;

    // Create particles from text pixels
    for (let y = 0; y < canvas.height; y += particleSize) {
        for (let x = 0; x < canvas.width; x += particleSize) {
            const i = (y * canvas.width + x) * 4;
            if (pixels[i + 3] > 128) {
                particles.push({
                    x: Math.random() * canvas.width, // Start particles at random positions
                    y: Math.random() * canvas.height,
                    size: particleSize,
                    vx: Math.random() * 2 - 1, // Random velocity for disintegration
                    vy: Math.random() * 2 - 1,
                    originX: x, // Save original position for reintegration
                    originY: y,
                });
            }
        }
    }

    // Animate particles
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            ctx.fillStyle = color;
            ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

            if (mode === "disintegrate") {
                // Disintegrate: move particles away from their original position
                particle.x += particle.vx * 5;
                particle.y += particle.vy * 5;
            } else if (mode === "integrate") {
                // Integrate: move particles towards their original position
                particle.x += (particle.originX - particle.x) * 0.05;
                particle.y += (particle.originY - particle.y) * 0.05;
            }
        });
        requestAnimationFrame(animate);
    };

    animate();
}
