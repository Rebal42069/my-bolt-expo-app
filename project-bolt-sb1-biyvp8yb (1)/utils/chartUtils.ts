interface Point {
  x: number;
  y: number;
}

// Generate random data points for mock charts
export const generateRandomPoints = (
  numPoints: number,
  minY: number = 0,
  maxY: number = 1
): Point[] => {
  const points: Point[] = [];
  
  for (let i = 0; i < numPoints; i++) {
    const x = i / (numPoints - 1);
    const y = minY + Math.random() * (maxY - minY);
    points.push({ x, y });
  }
  
  return points;
};

// Create a path string for SVG path element from points
export const createPath = (
  points: Point[],
  width: number,
  height: number
): string => {
  if (points.length === 0) return '';
  
  let path = `M ${points[0].x * width} ${points[0].y * height}`;
  
  for (let i = 1; i < points.length; i++) {
    // Use curve for smoother lines
    const cpX1 = points[i - 1].x * width + (points[i].x - points[i - 1].x) * width * 0.5;
    const cpY1 = points[i - 1].y * height;
    const cpX2 = points[i].x * width - (points[i].x - points[i - 1].x) * width * 0.5;
    const cpY2 = points[i].y * height;
    const x = points[i].x * width;
    const y = points[i].y * height;
    
    path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
  }
  
  return path;
};