'use strict';

module.exports = {
    'check-coverage': true,
    'extensions': ['.js', '.cjs', '.ts', '.cts'],

    'lines': 50,
    'statements': 50,
    'functions': 50,
    'branches': 50,

    'reporter': ['text-summary', 'html'],

    'exclude': ['test/**', 'node_modules/**'],
};
