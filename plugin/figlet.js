const CFonts = require('cfonts');

let banner = '';

try {
  const out = CFonts.render('Xnet', {
    font: 'block',
    align: 'left',
    colors: ['system'],
    background: 'transparent',
    letterSpacing: 1,
    lineHeight: 1,
    space: false
  });
  banner = out.string;
} catch (err) {
  banner = 'Xnet';
}

module.exports = banner;
