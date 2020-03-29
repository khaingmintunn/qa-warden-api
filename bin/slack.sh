set -xe
cd -- "$(dirname "$BASH_SOURCE")"
curl -X POST -H 'Content-type: application/json' \
  --data '{"text": "You have pushed to *Q/A Warden [API]* and made us strong. :rocket: \nThank you for your implementation. :tada:",
           "username": "Q/A Warden [API]",
           "channel": "#qa-warden-api",
           "icon_emoji": ":question:",
          }' \
    https://hooks.slack.com/services/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