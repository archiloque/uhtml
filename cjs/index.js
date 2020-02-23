'use strict';
const {cache, setCache} = require('./cache.js');
const {Hole, retrieve} = require('./rabbit.js');

/**
 * Used as template literal function tag, creates once the specified HTML content and it populates it via interpolations.
 * @param {Array} template The template literal with the HTML content to render.
 * @param  {...any} values Any interpolated value to use within the template.
 * @returns {Hole} An instance of Hole that will be normalized as DOM content once rendered.
 */
const html = (template, ...values) => new Hole('html', template, values);
exports.html = html;

/**
 * Used as template literal function tag, creates once the specified SVG content and it populates it via interpolations.
 * @param {Array} template The template literal with the SVG content to render.
 * @param  {...any} values Any interpolated value to use within the template.
 * @returns {Hole} An instance of Hole that will be normalized as DOM content once rendered.
 */
const svg = (template, ...values) => new Hole('svg', template, values);
exports.svg = svg;

/**
 * Render some content within the passed DOM node.
 * @param {Element} where The DOM node where to render some content.
 * @param {Element | Function | Hole} what A DOM node, a html/svg Hole, or a a function that returns previous values once invoked.
 * @returns {Element} The same DOM node where the content was rendered.
 */
const render = (where, what) => {
  const hole = typeof what === 'function' ? what() : what;
  const info = cache.get(where) || setCache(where);
  const wire = hole instanceof Hole ? retrieve(info, hole) : hole;
  if (wire !== info.wire) {
    info.wire = wire;
    where.textContent = '';
    where.appendChild(wire.valueOf());
  }
  return where;
};
exports.render = render;
