#!/usr/bin/env python3
"""
JSMN IDE — HTTPS static file server
Serves openb3/ over HTTPS on port 4443 (no root required).

Usage:
    cd /path/to/jsmcide
    python3 serve-https.py [port]

Default port: 4443
SSL cert/key: ssl/server.crt  ssl/server.key

Generate a self-signed cert (already done if you cloned the repo):
    bash setup-ssl.sh
"""

import http.server
import ssl
import os
import sys

PORT     = int(sys.argv[1]) if len(sys.argv) > 1 else 4443
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SERVE_DIR = os.path.join(BASE_DIR, 'openb3')
CERT_FILE = os.path.join(BASE_DIR, 'ssl', 'server.crt')
KEY_FILE  = os.path.join(BASE_DIR, 'ssl', 'server.key')

for f in (CERT_FILE, KEY_FILE):
    if not os.path.isfile(f):
        print(f"ERROR: Missing {f}")
        print("Run:  bash setup-ssl.sh")
        sys.exit(1)

os.chdir(SERVE_DIR)

handler = http.server.SimpleHTTPRequestHandler

# Silence request logs to keep output clean (comment out to re-enable)
handler.log_message = lambda *a: None

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(certfile=CERT_FILE, keyfile=KEY_FILE)

with http.server.HTTPServer(('0.0.0.0', PORT), handler) as httpd:
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    # Get the machine's primary outward-facing IP for display
    import socket
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        local_ip = s.getsockname()[0]
        s.close()
    except Exception:
        local_ip = '0.0.0.0'

    print(f"JSMN IDE — HTTPS server running")
    print(f"  Local:   https://localhost:{PORT}")
    print(f"  Network: https://{local_ip}:{PORT}")
    print(f"  Serving: {SERVE_DIR}")
    print(f"  Cert:    {CERT_FILE}")
    print(f"  NOTE: Browser will warn about self-signed cert.")
    print(f"        Click 'Advanced' → 'Proceed' to continue.")
    print(f"  Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
