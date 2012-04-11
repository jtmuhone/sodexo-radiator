#!/usr/bin/env bash

DIR=`dirname $0`
BUILD_BASE="$DIR/.."
BUILD_DIR="$BUILD_BASE/build"

cd $BUILD_BASE

script=$1
shift
args=""
for arg in $@; do
    if [ -z $args ]; then
	args="'$arg'"
    else
	args="$args, '$arg'"
    fi
done

java -Xmx512m -Xss1024k \
    -cp steal/rhino/js.jar \
    org.mozilla.javascript.tools.shell.Main \
    -e "_args=[$args]" \
    -opt -1 \
    -e 'load('"'"$script"'"')'
EXITCODE=$?

exit $?
