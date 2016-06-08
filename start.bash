#!/bin/bash
adafruit-io client feeds watch $1 -j | node monitor-stdin.js
