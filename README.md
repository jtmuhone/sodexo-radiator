Sodexo radiator
===============

Monitor your local sodexo menu! Works at least in Finland.
Uses sodexo json api.

[http://www.sodexo.fi](http://www.sodexo.fi)

Installing
----------

git clone --recursive https://github.com/jtmuhone/sodexo-radiator.git
cd sodexo-radiator

Building
--------

bin/build.sh

Running
-------

bin/sodexo-proxy.py build
open http://localhost:8080/sodexo
