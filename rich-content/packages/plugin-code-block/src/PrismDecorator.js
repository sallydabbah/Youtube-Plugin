import _reduce from 'lodash/reduce';
import range from 'lodash/range';
import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import Prism from 'prismjs';
import classNames from 'classnames';
import highlightingTheme from '../statics/styles/highlighting-theme.scss';

const DEFAULT_SYNTAX = 'javascript';
const CODE_TOKEN_CLASS_NAMES = highlightingTheme;

const PrismToken = ({ className, children, offsetKey }) => (
  <span key={`codeBlock_${offsetKey}`} children={children} className={className} />
);

PrismToken.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any,
  offsetKey: PropTypes.string,
};

export default class PrismDecorator {
  highlighted = {};
  theme;

  constructor(theme = {}) {
    this.theme = theme;
  }

  getDecorations(block) {
    const blockKey = block.getKey();
    const blockText = block.getText();
    const decorations = Array(blockText.length).fill(null);

    this.highlighted[blockKey] = {};

    if (block.getType() !== 'code-block') {
      return Immutable.List(decorations); // eslint-disable-line new-cap
    }

    // Parse text using Prism
    const grammar = Prism.languages[DEFAULT_SYNTAX];
    const tokens = Prism.tokenize(blockText, grammar);
    let offset = 0;

    tokens.forEach(token => {
      if (typeof token === 'string') {
        offset += token.length;
      } else {
        const tokenId = `tok${offset}`;
        const resultId = `${blockKey}-${tokenId}`;

        this.highlighted[blockKey][tokenId] = token;

        addDecorations(decorations, offset, offset + getTokenLength(token), resultId);
        offset += getTokenLength(token);
      }
    });

    return Immutable.List(decorations); // eslint-disable-line new-cap
  }

  getComponentForKey() {
    return PrismToken;
  }

  getPropsForKey(key) {
    const parts = key.split('-');
    const blockKey = parts[0];
    const tokId = parts[1];
    const { type } = this.highlighted[blockKey][tokId];
    return {
      className: classNames(CODE_TOKEN_CLASS_NAMES[type], this.theme[`codeBlock_${type}`]),
    };
  }
}

function getTokenLength(token) {
  const tokenContent = token.content || token;
  if (typeof tokenContent === 'string') {
    return tokenContent.length;
  }

  return _reduce(token.content, (acc, token) => getTokenLength(token) + acc, 0);
}

function addDecorations(decorations, start, end, componentKey) {
  const numRange = range(start, end, 1);
  numRange.forEach(i => (decorations[i] = componentKey));
}
