#!/usr/bin/env bash
# JSMN IDE — start the HTTPS server
# Usage: bash start.sh [port]
# Default port: 4443

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-4443}"
PID_FILE="$SCRIPT_DIR/server.pid"
LOG_FILE="$SCRIPT_DIR/server.log"

# Check if already running
if [ -f "$PID_FILE" ]; then
  PID=$(cat "$PID_FILE")
  if kill -0 "$PID" 2>/dev/null; then
    echo "JSMN IDE is already running (PID $PID)."
    echo "Stop it first with:  bash stop.sh"
    exit 1
  else
    rm -f "$PID_FILE"
  fi
fi

# Check SSL cert exists
if [ ! -f "$SCRIPT_DIR/ssl/server.crt" ] || [ ! -f "$SCRIPT_DIR/ssl/server.key" ]; then
  echo "SSL certificate not found. Generating one now..."
  bash "$SCRIPT_DIR/setup-ssl.sh" || exit 1
fi

# Start server in background
nohup python3 "$SCRIPT_DIR/serve-https.py" "$PORT" > "$LOG_FILE" 2>&1 &
PID=$!
echo "$PID" > "$PID_FILE"

# Brief pause to catch immediate startup errors
python3 -c "import time; time.sleep(1)"

if ! kill -0 "$PID" 2>/dev/null; then
  echo "ERROR: Server failed to start. Check $LOG_FILE for details."
  cat "$LOG_FILE"
  rm -f "$PID_FILE"
  exit 1
fi

# Determine server IP for display
LOCAL_IP=$(ip route get 8.8.8.8 2>/dev/null | awk '{for(i=1;i<=NF;i++) if ($i=="src") print $(i+1)}')
[ -z "$LOCAL_IP" ] && LOCAL_IP="<your-ip>"

echo "JSMN IDE started (PID $PID)"
echo "  Local:   https://localhost:$PORT"
echo "  Network: https://$LOCAL_IP:$PORT"
echo "  Log:     $LOG_FILE"
echo "  Stop:    bash stop.sh"
