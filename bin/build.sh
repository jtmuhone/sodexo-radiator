#!/usr/bin/env bash

DIR=`dirname $0`
if [[ "$OSTYPE" == "darwin"* ]]; then
    BASEDIR=$DIR
else
    BASEDIR=`readlink -m $DIR/..`
fi

MODULE=sodexo
$DIR/js.sh $MODULE/scripts/build.js
EXITCODE=$?

BUILD_DIR=$BASEDIR/build

if [ $EXITCODE -eq 0 ]; then
    mkdir -p $BUILD_DIR/$MODULE
    mv -f $BASEDIR/$MODULE/production.js $BUILD_DIR/$MODULE
    mv -f $BASEDIR/$MODULE/production.css $BUILD_DIR/$MODULE
    cp -f $BASEDIR/$MODULE/index.html $BUILD_DIR/$MODULE

    mkdir -p $BUILD_DIR/steal
    cp -f $BASEDIR/steal/steal.production.js $BUILD_DIR/steal

    echo "Build moved to $BUILD_DIR"
fi

