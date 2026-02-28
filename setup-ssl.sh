#!/usr/bin/env bash
# JSMN IDE — generate a self-signed SSL certificate
# Run once after cloning:  bash setup-ssl.sh
# Then start the server:   python3 serve-https.py
#
# The certificate is valid for 10 years.
# Browsers will show a warning — click Advanced → Proceed to accept it.

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SSL_DIR="$SCRIPT_DIR/ssl"

mkdir -p "$SSL_DIR"

# Detect server IP for the SAN field
LOCAL_IP=$(ip route get 8.8.8.8 2>/dev/null | awk '{for(i=1;i<=NF;i++) if ($i=="src") print $(i+1)}')
[ -z "$LOCAL_IP" ] && LOCAL_IP="127.0.0.1"

echo "Generating self-signed certificate for IP: $LOCAL_IP"

openssl req -x509 -nodes -days 3650 \
  -newkey rsa:2048 \
  -keyout "$SSL_DIR/server.key" \
  -out    "$SSL_DIR/server.crt" \
  -subj   "/C=DE/ST=Bayern/L=School/O=JSMN-IDE/CN=$LOCAL_IP" \
  -addext "subjectAltName=IP:$LOCAL_IP,IP:127.0.0.1,DNS:localhost"

chmod 600 "$SSL_DIR/server.key"

echo ""
echo "Done! Certificate written to:"
echo "  $SSL_DIR/server.crt"
echo "  $SSL_DIR/server.key"
echo ""
echo "Start the HTTPS server with:"
echo "  python3 serve-https.py"
