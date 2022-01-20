// Mouvement du soleil
const sun = new mojs.Shape({
  parent: '.screen',
  className: 'sun1',
  radius: {80: 80, curve: 'M0, 55 C0, 55 4.377816206152662, 0.6791981139544082 35, 0 C49.269559298557965, -0.6791981139544124 100, 0 100, 0 '},
  fill: "#f2b53c",
  top: {'100%': '100%', curve: 'M0, 0 C39.838367550785236, 18.184188840192256 35, 50 35, 50 C35, 50 35.451230924059665, 28.66001019001613 36.578947368421055, 25 C37.44350591804561, 25.054275524269578 37.10526315789474, 25 37.10526315789474, 25 C37.10526315789474, 25 38.421052631578945, 25 38.421052631578945, 25 C38.421052631578945, 25 38.515036988498764, 25.000309160422404 40, 25 C40.43233143255387, 44.713976553863304 41.57894736842105, 67 41.57894736842105, 67 C41.57894736842105, 67 42.631580257102065, 50 42.631580257102065, 50 C42.631580257102065, 50 44.16491514576696, 49.775933714023616 45, 50 C53.7298216963383, 49.9383520002621 75, 50 75, 50 C75, 50 100, 50 100, 50 '},
  left: {'50%': '50%', curve: 'M0, 0 C0, 0 37.34375, 0 37.34375, 0 C37.34375, 0 38.28125, -25 38.28125, -25 C38.28125, -25 38.4895838991118, 25 38.4895838991118, 25 C38.4895838991118, 25 40, 25 40, 25 C40, 25 40.204190583136466, -0.03402878854698086 42.864583333333336, 0 C80.68122608353019, -0.2516854971673063 100, 0 100, 0 '},
  scale: {1: 1, curve: 'M0, 0 C0, 0 40, 0 40, 0 C40, 0 40, -10 40, -10 C40, -10 54.898474554477886, 1.5300968740935301 65, 0 C83.76056573985625, -0.14581880348632215 97.49152542372882, -150 97.49152542372882, -150 C97.49152542372882, -150 100.05828084987742, -520.6127602687636 100, -622.1428571428571 '},
  duration: 42000,
  opacity: {1: 1, curve: 'M0, 0 C0, 0 97.28571428571428, 0 97.28571428571428, 0 C97.28571428571428, 0 100, 100 100, 100 '},
});


//Battement du soleil
 const sun2 = new mojs.Shape({
  parent: '.sun1',
  fill: "#f2b53c",
  radius: {80: 80, curve: 'M0, 100 C0, 100 100, 0 100, 0 '},
  duration: 17500,
}).then({
  scale: { 1: 1.1, curve: 'M0, -22 C0, -22 35, 0 35, 0 C35, 0 100, 0 100, 0 '},
  duration: 550,
  repeat: 35,
  easing: 'cubic.out',
});


const explosion = new mojs.Burst({
  parent:   ".sun1",
  radius:   { 0: 600 },
  count:    13,
  children: {
    delay:       8000,
    shape:      'polygon',
    fill:       'none',
    radius:     100,
    rotate:      { 360: 0 },
    duration:   2000,
    stroke:     {'red':'blue'},
    repeat:     5,
    strokeWidth:  20,
  }
}); 
const explosion2 = new mojs.Burst({
  parent:   ".sun1",
  radius:   { 0: 600 },
  count:    13,
  children: {
    delay:       7000,
    shape:      'rect',
    fill:       'none',
    radius:     100,
    rotate:      { 360: 0 },
    duration:   2000,
    stroke:     {'red': 'orange'},
    repeat:     4,
    strokeWidth: 20,
  }
});

const explosion3 = new mojs.Burst({
  parent:    ".sun1",
  radius:   {0: 400}, 
  count:    10,
  children: {
    delay:   7000,
    shape:   'circle',
    fill:    'none',
    radius:   100,
    rotate:   {0: 360},
    duration: 3000,
    stroke:   {'blue':'red'},
    strokeWidth:  20,
    repeat: 4,
  }
});
 const explosion4 = new mojs.Burst({
  parent:    ".sun1",
  radius:   {0: 400}, 
  count:    10,
  children: {
    delay:   8000,
    shape:   'circle',
    fill:    'none',
    radius:   100,
    rotate:   {0: 360},
    duration: 3000,
    stroke:   {'blue':'pink'},
    strokeWidth:  20,
    repeat:     4, 
  }   
});
const burstR = new mojs.Burst({
  parent: '.sun1',
  radius:   { 0: 600 },
  count:    280,
  children: {
    shape:      'polygon',
    points:     25,
    fill:       { '#f2b53c' : 'pink' },
    rotate:      { 360: 0 },
    duration:   2000,
    delay:      'stagger( rand(0, 360) )',
    radius:     30,
  }
});

const burst = new mojs.Burst({
  parent:   ".sun1", 
  radius: { 0: 600 },
  count: 9,
  children: {
    shape: 'polygon',
    stroke: {'red':'blue'},
    strokeWidth:  20,
    radius: 200,
    angle: { 0: 360 },
    fill: 'none',
    duration: 3000,
    delay:  9000,
    repeat: 4,
  }
});


const circle = new mojs.Shape({
  parent:   ".sun1",
  count: 10,
  stroke: { '#e2441d' : '#f99931' },
  strokeWidth: { 20 : 0 },
  fill: 'none',
  scale: { 0: 1.5, easing: 'elastic.out' },
  radius: { 0: 600, curve:'M0, 100 C0, 100 102.9451202760322, -73.92696952006735 100, -150' },
  duration: 1100,
  opacity:  { 1: 0.2 },
  repeat:   38,

});
const rect1 = new mojs.Shape({
  parent:   ".sun1",
  shape: 'rect',
  x: 0,
  parrent:'.screen',
  y: 0,
  fill: 'none',
  radius: 150,
  stroke: { '#F2B53C' : 'red'},
  strokeWidth: 20,
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  rotate: { 180: 0 },
  duration: 1500,
  delay:    30000,
});
const rect2 = new mojs.Shape({
  parent:   ".sun1",
  shape: 'rect',
  x: 0,
  y: 0,
  parrent:'.screen',
  fill: 'none',
  radius: 150,
  stroke: { '#F2B53C' : 'red'},
  strokeWidth: 20,
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%'},
  rotate: { 0: 180 },
  duration: 1500,
  delay:    30000,
});

const sphere = new mojs.Shape({
  parent:   ".sun1",
  shape: 'circle',
  delay: 1000,
  fill: 'none',
  stroke: '#F08080',
  strokeWidth: 10,
  x: 0,
  parrent:'.screen',
  y: 0,
  radius: 200,
  duration: 500,
  scale: { 0.1 : 1 },
  easing: 'cubic.out',
  delay:    30000,
});

const triangle = new mojs.Shape({
  parent:   ".sun1",
  shape: 'polygon',
  fill: 'none',
  stroke: 'purple',
  strokeWidth: 10,
  x: 0,
  parrent:'.screen',
  y: 0,
  radius: 175,
  duration: 500,
  scale: { 0.1 : 1 },
  easing: 'cubic.out',
  delay:    30000,
}).then({
  delay:        1750,
  scale: { 1 : 2 },
});

const triangle2 = new mojs.Shape({
  parent:   ".sun1",
  shape: 'polygon',
  delay: 500,
  fill: 'none',
  stroke: '#000080',
  strokeWidth: 10,
  x: 0,
  parrent:'.screen',
  rotate: 180,
  y: 0,
  radius: 175,
  duration: 500,
  scale: { 0.1 : 1 },
  easing: 'cubic.out',
  delay:    30000,
}).then({
  delay:        500,
  scale: { 1 : 2 },
});

const rectangle = new mojs.Shape({
    parent:   ".sun1",
  shape: 'rect',
  fill: 'none',
  delay: 1500,
  stroke: '#FFDEAD',
  strokeWidth: 10,
  x: 0,
  parrent:'.screen',
  rotate: 360,
  y: 0,
  radius: 225,
  duration: 500,
  scale: { 0.1 : 1 },
  easing: 'cubic.out',
  delay:    30000,
}).then({
  delay:        250,
  scale: { 1 : 0.5 },
});


const rectTimeline = new mojs.Timeline({}).add(rect1, rect2);

const finalTimeline = new mojs.Timeline({}).add(sphere, triangle, triangle2, rectangle);

const circleTimeline = new mojs.Timeline({}).add(sun, sun2, explosion, explosion2, explosion3, explosion4, burstR, burst,circle);


const mainTimeline = new mojs.Timeline({}).add(circleTimeline,).add(finalTimeline);


let audio = new Audio('./assets/music/ID_summer_43s_ff_fo.mp3');

 document.addEventListener("click", function () { audio.play(); mainTimeline.play(); console.log("L'animation et la musique sont lancée !") });