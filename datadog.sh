#!/bin/bash
DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=028c23af04951d80bdcae45898faa9f DD_SITE="datadoghq.com" bash -c "$(curl -L  https://s3.amazonaws.com/dd-agent/scripts/install_script.sh)"
