import { jsdom } from 'jsdom';
import Factory from './factories';
import { expect } from 'chai';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

global.Factory = Factory;
global.expect = expect;
