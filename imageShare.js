const { createCanvas, loadImage, registerFont } = require('canvas');

const width = 800;
const height = 600;
const pixelSize = 30;
const headerSize = 200;
const offset = 30;
const horizontalPadding = 100;
const textPadding = 25;

registerFont('./font/CormorantGaramond-MediumItalic.ttf', { family: 'CormorantGaramond-MediumItalic' });
registerFont('./font/CormorantGaramond-Regular.ttf', { family: 'CormorantGaramond-Regular' });

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const formatString = (context, quote) => {
  const words = quote.trim().split(/\s+/);
  let temp = '';
  let formattedQuote = '';
  for (let i = 0; i < words.length; i += 1) {
    if (context.measureText(temp.concat(words[i].concat(' '))).width >= width - (horizontalPadding * 2)) {
      formattedQuote += temp.concat('\n');
      temp = '';
    }
    temp += words[i].concat(' ');
  }
  formattedQuote += temp;
  return formattedQuote;
};

const createImage = (quote) => {
  const textOffset = offset + headerSize + offset;

  /* Set up background colour */
  ctx.fillStyle = '#FDCB6E';
  ctx.fillRect(0, 0, width, height);

  /* Set text formatting */
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';

  ctx.font = `${pixelSize}px CormorantGaramond-MediumItalic`;

  const formattedQuote = formatString(ctx, quote);
  ctx.fillText(formattedQuote, width / 2, textOffset);

  const count = formattedQuote.split(/\r\n|\r|\n/).length;
  const authorOffset = textOffset + pixelSize + pixelSize + (textPadding * count);

  ctx.font = `${pixelSize}px CormorantGaramond-Regular`;
  ctx.fillText('\u2014 Halldór Laxness', width - (ctx.measureText('\u2014 Halldór Laxness').width / 2) - horizontalPadding, authorOffset);

  ctx.fillRect(0, height - 50, width, 50);

  loadImage('./public/laxness.png').then((image) => {
    ctx.drawImage(image, (width / 2) - (headerSize / 2), offset, headerSize, headerSize);
    loadImage('./google-play-badge.png').then((badge) => {
      ctx.drawImage(badge, 5, height - (badge.height * 0.2), badge.width * 0.2, badge.height * 0.2);
      return canvas.toDataURL();
    });
  });

  const bookOffset = authorOffset + pixelSize + (textPadding / 2);

  ctx.font = `${pixelSize * 0.7}px CormorantGaramond-Regular`;

  ctx.fillText('Úr 17. kafla, Grikklandsárið, 1978', width / 2, bookOffset);
};

createImage('„Ættjarðarljóð“ fara íslendíngum illa, því eingin  illa, því eingin  illa, því eingin þjóð hefur svo kunnugt sé spilt Íslandi viljandi af annarri eins hörku heimsku og heiftúð og við sjálfir, ekki einusinni danakonúngar')

module.exports = {
  createImage,
};
