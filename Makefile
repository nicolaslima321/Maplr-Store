#!/usr/bin/make
export

startup:
	npm install
	HOST=0 PORT=3005 npm run dev