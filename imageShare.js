const { createCanvas, loadImage, registerFont } = require('canvas');
const { getTodaysQuote } = require('./utils');
const fs = require('fs');

// Control image size and proportions by width, retains aspect ratio of 16:9
const width = 600;
const height = (width / 16) * 9;

const textSize = width * (30 / 1000);
const headerSize = width * 0.2;
const offset = width * (30 / 1000);
const horizontalPadding = width * 0.2;
const textPadding = textSize / 6;

registerFont('./font/CormorantGaramond-MediumItalic.ttf', { family: 'CormorantGaramond-MediumItalic' });
registerFont('./font/CormorantGaramond-Regular.ttf', { family: 'CormorantGaramond-Regular' });

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const formatString = (context, quote) => {
  const words = quote.trim().split(/\s+/);
  let temp = '';
  let formattedQuote = '„';
  for (let i = 0; i < words.length; i += 1) {
    if (context.measureText(temp.concat(words[i].concat(' '))).width >= width - (horizontalPadding * 2)) {
      formattedQuote += temp.concat('\n');
      temp = '';
    }
    temp += (i !== words.length - 1) ? words[i].concat(' ') : words[i].concat('“');
  }
  formattedQuote += temp;
  return formattedQuote;
};

const createImage = async (quote) => {
  const textOffset = offset + headerSize + offset;

  /* Set up background colour */
  ctx.fillStyle = '#FDCB6E';
  ctx.fillRect(0, 0, width, height);

  /* Set text formatting */
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';

  ctx.font = `${textSize}px CormorantGaramond-MediumItalic`;
  const formattedQuote = formatString(ctx, quote.quote);
  ctx.fillText(formattedQuote, width / 2, textOffset);

  const count = formattedQuote.split(/\r\n|\r|\n/).length;
  const authorOffset = textOffset + (count * (textSize + textPadding)) + offset;

  ctx.font = `${textSize}px CormorantGaramond-Regular`;
  ctx.fillText('\u2014 Halldór Laxness', width - (ctx.measureText('\u2014 Halldór Laxness').width / 2) - horizontalPadding, authorOffset);

  const laxnessImg = await loadImage('./public/laxness.png');
  ctx.drawImage(laxnessImg, (width / 2) - (headerSize / 2), offset, headerSize, headerSize);

  const bookOffset = authorOffset + textSize + (textPadding / 2) + (offset / 2);


  ctx.font = `${textSize * 0.7}px CormorantGaramond-Regular`;

  ctx.fillText(`${quote.chapter}: ${quote.book}, ${quote.year}`, width / 2, bookOffset);

  // Border at the bottom indicating where to get the app
  // ctx.fillRect(0, height - (height * 0.1), width, height * 0.1);

  //  const badge = await loadImage('./images/google-play-badge.png');
  //  ctx.drawImage(badge, offset, 0, badge.width * 0.1, badge.height * 0.1);

  return canvas.toDataURL();
};

const getDailyImage = async () => {
  const result = await getTodaysQuote();
  const base = await createImage(result);
  return base;
};

const saveImageToDisk = async (image) => {
  const base64Image = image.split(',').pop();
  fs.writeFile('./public/quote.png', base64Image, { encoding: 'base64' }, (err) => {
    if (err) console.error(err);
    else console.info('Image created successfully');
  });
};

module.exports = {
  createImage,
  getDailyImage,
  saveImageToDisk,
};
