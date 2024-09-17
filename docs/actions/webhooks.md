# Webhook

> Minimum cooldown: 60 seconds (basic), 10 seconds (prime).  
> Default cooldown is per user.

Actions using this trigger will fire when a HTTP request is sent to the specified URL. To prevent loops, action locking is enforced for webhook actions and `{#fetch}` can only call webhooks from other servers.

The request method must be `POST`. You can access body data via `{$request.body}` and `{$request.headers}`, for example `{$request.headers.content-type}`. For security, the `Authorization` and `Cookie` headers are inaccessible.

Actions with this trigger will run with the user who last updated the action in context, which will also mean the action inherits that users permissions in the server.

#### Response data

|   Property   |                 Type                  |                        Description                         |
| :----------: | :-----------------------------------: | :--------------------------------------------------------: |
|  statusCode  | `"ERROR"` \| `"OK"` \| `"PROCESSING"` |                The result of the invocation                |
|    output    |                string?                |                  The output of the action                  |
| errorMessage |                string?                |       The error message if the action failed to run        |
|  errorStack  |                string?                | The stack trace for the action if the action failed to run |