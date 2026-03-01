#!/usr/bin/env bash
# JSMN IDE — stop the HTTPS server

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$SCRIPT_DIR/server.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "JSMN IDE is not running (no PID file found)."
  exit 0
fi

PID=$(cat "$PID_FILE")

if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  rm -f "$PID_FILE"
  echo "JSMN IDE stopped (PID $PID)."
else
  echo "JSMN IDE was not running (stale PID $PID)."
  rm -f "$PID_FILE"
fi
