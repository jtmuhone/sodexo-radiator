#! /usr/bin/env python

import sys, os, argparse
from httplib import HTTPConnection
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

class SodexoHTTPRequestHandler(SimpleHTTPRequestHandler):

    def do_GET(self):
        path = self.path
        if path.startswith('/ruokalistat/output/daily_json'):
            connection = HTTPConnection('www.sodexo.fi')
            connection.request('GET', path)
            response = connection.getresponse()
            content = response.read()
            self.wfile.write(content)
        else:
            SimpleHTTPRequestHandler.do_GET(self)

def dir(name):
    if os.path.isdir(name):
        return name
    else:
        raise argparse.ArgumentTypeError("Not a dir: %s." % (name))

def run(server_dir):
    os.chdir(server_dir)
    HTTPServer(('', 8000), SodexoHTTPRequestHandler).serve_forever()
    

def build_argparser():
    parser = argparse.ArgumentParser(
        description='Local sodexo api proxy and simple web server')
    parser.add_argument('dir', nargs=1, type=dir,
                        metavar='DIR',
                        help='The working directory, from where files are '
                        'served')
    return parser 

if __name__ == "__main__":
    parser = build_argparser()
    args = parser.parse_args()
    run(args.dir[0])
