#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint
yarn ts
