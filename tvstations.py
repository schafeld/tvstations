#!/usr/bin/python

# https://pointlessprogramming.wordpress.com/2011/02/13/python-cgi-tutorial-1/
# Run server from terminal:
# $ ./server.py
#
# Don't forget:
# chmod 705 tvstations.py
# or
# chmod +x tvstations.py

import urllib2

response = urllib2.urlopen('https://app.unitymedia.de/channels/api/v1/handler')
jsonResponse = response.read()

print "Content-type: application/json"

# print "Content-Type: text/html\n\n"
print
print jsonResponse
