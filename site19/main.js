const yAxisLabels = [
  { label: "Fluctuation", title: "Variability Over Time" },
  { label: "Velocity", title: "Speed of Change" },
  { label: "Quantum", title: "Smallest Measurable Unit" },
  { label: "Momentum", title: "Sustained Movement" },
  { label: "Fusion", title: "Combination of Elements" },
  { label: "Core", title: "Central Element" },
  { label: "Drift", title: "Gradual Shift" },
  { label: "Echo", title: "Repeated Signal" },
  { label: "Horizon", title: "Boundary of Perception" },
  { label: "Energy", title: "Power Output" },
  { label: "Pulse", title: "Rhythmic Signal" },
  { label: "Vortex", title: "Rotational Flow" },
  { label: "Intensity", title: "Strength Over Time" },
  { label: "Nucleus", title: "Central Structure" },
  { label: "Waveform", title: "Signal Representation" },
  { label: "Spectra", title: "Range of Frequencies" },
  { label: "Amplitude", title: "Magnitude of Change" },
  { label: "Chaos", title: "Unpredictability in Patterns" },
  { label: "Equilibrium", title: "Balance State" },
  { label: "Zenith", title: "Peak Level" },
  { label: "Phase", title: "Cyclic Position" },
  { label: "Vector", title: "Directional Force" },
  { label: "Catalyst", title: "Acceleration Factor" },
  { label: "Dimension", title: "Spatial Extent" },
  { label: "Rift", title: "Structural Divide" },
  { label: "Fusion", title: "Energy from Combination" },
  { label: "Gradient", title: "Rate of Change" },
  { label: "Aether", title: "Theoretical Medium" },
  { label: "Flux", title: "Continuous Variation" },
  { label: "Continuum", title: "Unbroken Sequence" },
  { label: "Quantum Leap", title: "Sudden Advancement" },
  { label: "Oscillation", title: "Periodic Movement" },
  { label: "Hyperdrive", title: "Faster-than-Light Travel" },
  { label: "Surge", title: "Sudden Increase" },
  { label: "Synapse", title: "Neural Connection" },
  { label: "Momentum", title: "Sustained Movement" },
  { label: "Turbulence", title: "Chaotic Motion" },
  { label: "Spectral", title: "Wave-Based Analysis" },
  { label: "Pulsar", title: "Rotating Neutron Star" },
  { label: "Inertia", title: "Resistance to Change" },
  { label: "Magnetism", title: "Attractive/Repulsive Force" },
  { label: "Relativity", title: "Space-Time Relationship" },
  { label: "Orbit", title: "Path of Revolution" },
  { label: "Interference", title: "Wave Overlap Effects" },
  { label: "Impulse", title: "Force Over Time" },
  { label: "Radiance", title: "Light Emission" },
  { label: "Zero Point", title: "Quantum Vacuum State" },
  { label: "Cascade", title: "Sequential Process" },
  { label: "Singularity", title: "Gravitational Collapse" },
  { label: "Resonance", title: "Amplified Vibration" },
  { label: "Entropy", title: "Measure of Disorder" },
  { label: "Node", title: "Connection Point" },
  { label: "Phase Shift", title: "Transition in Wave Cycle" },
  { label: "Displacement", title: "Change in Position" },
  { label: "Harmonic", title: "Component Frequency" },
  { label: "Impulse Response", title: "Reaction to Stimulus" },
  { label: "Singularity Point", title: "Infinite Density Location" },
  { label: "Radiation", title: "Energy Emission" },
  { label: "Distortion", title: "Altered Signal" },
  { label: "Polarization", title: "Wave Orientation" },
  { label: "Compression", title: "Reduction in Volume" },
  { label: "Refraction", title: "Change in Wave Direction" },
  { label: "Interstice", title: "Small Space Between" },
  { label: "Anomaly", title: "Irregular Event" },
  { label: "Echo Chamber", title: "Reinforced Signal Loop" },
  { label: "Field", title: "Influence Region" },
  { label: "Wavelength", title: "Distance Between Peaks" },
  { label: "Transience", title: "Short-lived Nature" },
  { label: "Friction", title: "Resisting Force" },
  { label: "Threshold", title: "Activation Limit" },
  { label: "Conduction", title: "Energy Transmission" },
  { label: "Absorption", title: "Energy Intake" },
  { label: "Disturbance", title: "Temporary Disruption" },
  { label: "Reflection", title: "Wave Bounce-back" },
  { label: "Attractor", title: "State Toward Which System Evolves" },
  { label: "Permeability", title: "Measure of Passage" },
  { label: "Torque", title: "Rotational Force" },
  { label: "Phase Lock", title: "Synchronized Oscillation" },
  { label: "Superposition", title: "Combined States" }
];

const things = [
  "apple", "banana", "cat", "dog", "car", "tree", "guitar", "book", "mountain", "piano", 
  "elephant", "computer", "chair", "house", "pen", "jacket", "moon", "cloud", "table", "laptop", 
  "keyboard", "coffee", "camera", "flower", "fish", "tiger", "bike", "bird", "ball", "rainbow", 
  "pizza", "lamp", "phone", "television", "glove", "jungle", "shoe", "planet", "star", "sandwich", 
  "shoes", "hat", "rock", "boat", "balloon", "cake", "robot", "candle", "apple pie", "chair", 
  "window", "hat", "giraffe", "pizza box", "guitar string", "shovel", "ice cream", "keyboard", 
  "note", "butterfly", "diamond", "tablecloth", "skateboard", "clock", "bicycle", "mask", "jacket", 
  "glove", "water bottle", "mug", "vase", "ball", "sweater", "fridge", "microwave", "television", 
  "apple", "soccer ball", "telescope", "t-shirt", "backpack", "bottle", "glasses", "rug", "shoes", 
  "remote", "sunglasses", "watch", "coffee table", "lawnmower", "blanket", "toaster", "painting", 
  "cup", "earphones", "backpack", "socks", "cookie", "hat", "bracelet", "skirt", "coat", "broom",
  "drum", "pencil", "notebook", "mirror", "ladder", "helmet", "binoculars", "tent", "puzzle", "glue",
  "chalk", "mat", "radio", "projector", "pillow", "quilt", "slippers", "spoon", "fork", "knife",
  "napkin", "plush toy", "marble", "origami", "drone", "fireplace", "snow globe", "calendar", "bucket", "crayon",
  "measuring tape", "compass", "paintbrush", "pan", "bowl", "whistle", "net", "hammock", "magnet", "screwdriver",
  "plunger", "clipboard", "scissors", "flashlight", "thermometer", "keychain", "poster", "whiteboard", "board game", "glider"
];

const itemSpacing = {};
const baseSpacing = 10;
const spacingMultiplier = 5.5;

things.forEach(item => {
  const key = item.toLowerCase();
  itemSpacing[key] = baseSpacing + key.length * spacingMultiplier;
});

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawDiagram() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const canvas_height = 400;
  const index = randomValue(0, yAxisLabels.length - 1);
  const new_title = yAxisLabels[index].title;
  document.getElementById("title").innerHTML = new_title;

  let dataQuantity = randomValue(3, 5);
  let currLabel = new Set();
  const data = [];
  const labels = [];

  for (let k = 0; k < dataQuantity; k++) {
    let new_index;
    do {
      new_index = randomValue(0, things.length - 1);
    } while (currLabel.has(things[new_index]));

    currLabel.add(things[new_index]);
    data.push(randomValue(1, 300));
    labels.push(things[new_index]);
  }

  const barWidth = 20;
  let x = 30;

  for (let i = 0; i < data.length; i++) {
    const label = labels[i];
    const barHeight = data[i];
    const y = canvas_height - barHeight;

    ctx.fillStyle = "#3498db";
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.font = "14px Arial";
    ctx.textAlign = "center";

    const labelX = x + barWidth / 2;
    ctx.fillStyle = "#000";
    ctx.fillText(label, labelX, canvas_height + 20);
    ctx.fillText(data[i].toString(), labelX, canvas_height + 40);

    const spacing = itemSpacing[label.toLowerCase()] || 20;
    x += barWidth + spacing;
  }

  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(20, canvas_height);
  ctx.lineTo(canvas.width, canvas_height);
  ctx.moveTo(20, 0);
  ctx.lineTo(20, canvas_height);
  ctx.stroke();

  ctx.save();
  ctx.translate(15, canvas_height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText(yAxisLabels[index].label, 0, 0);
  ctx.restore();
}

drawDiagram();