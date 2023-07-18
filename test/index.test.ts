import test from 'node:test'
import assert from 'node:assert/strict'

import * as index from '../src/index.js'

test('module import', t => assert.ok(index))
