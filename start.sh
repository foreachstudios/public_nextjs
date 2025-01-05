# Check if in virtual environment, if not, activate it
if [ -z "$VIRTUAL_ENV" ]; then
    source .venv/bin/activate
    export ENTERED_VENV=1
fi

# Check if --debug flag is set
if [ "$1" == "--debug" ]; then
    npm run debug
else
    # Run the Python script
    npm run dev
fi

if [ "$ENTERED_VENV" == "1" ]; then
    # Deactivate the virtual environment
    deactivate
fi