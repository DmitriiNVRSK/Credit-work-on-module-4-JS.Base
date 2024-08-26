export function calculateFallDistance(time) {
    const g = 9.8;
    return (1/2) * g * Math.pow(time, 2);
}