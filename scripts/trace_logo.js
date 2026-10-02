const potrace = require('potrace');
const fs = require('fs');
const { spawnSync } = require('child_process');

// 1. Invert scratch_white so background is white and shape is black
spawnSync('python', [
  '-c',
  `from PIL import Image, ImageOps
im = Image.open('scratch_white.png').convert('L')
ImageOps.invert(im).save('scratch_black.png')
print('Inverted successfully')
`
], { stdio: 'inherit' });

// 2. Trace with potrace
potrace.trace('scratch_black.png', {
  threshold: 128,
  optCurve: true,
  turdSize: 5,
  alphaMax: 1.0,
  optTolerance: 0.15
}, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync('potrace_inverted.svg', svg);
  console.log('TRACE_INVERTED_SUCCESS! File length:', svg.length);
});
