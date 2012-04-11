#!/opt/perl/bin/perl

use strict;
use LWP::UserAgent;

my $URL = 'http://www.sodexo.fi';
my $method = $ENV{"REQUEST_METHOD"};

if ($method eq "GET") {
  my $ua = LWP::UserAgent->new;
  my $req = HTTP::Request->new(GET => $URL . $ENV{"REQUEST_URI"});

  my $res = $ua->request($req);
  print $res->status_line;
  print "Content-type: " . $res->header("Content-type") . "\r\n\r\n";
  print $res->content;

} else {
  print "Content-type: text/html\r\n\r\n";
  print "Invalid method.";
 }
 
