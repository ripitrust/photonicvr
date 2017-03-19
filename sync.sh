#!/bin/bash
aws s3 sync . s3://photonic.willnix.me/ --exclude=".git/*" --exclude="*.pid" --exclude="*.sh" --exclude=".gitignore" --exclude=".DS_Store"
